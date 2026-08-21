"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { graphEdges, graphNodes } from "@/data/skills";

interface NodeState {
  id: string;
  label: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  major?: boolean;
  group: number;
}

const GROUP_COLORS = [
  "#2563eb",
  "#3b82f6",
  "#6366f1",
  "#8b5cf6",
  "#a78bfa",
  "#64748b",
];

export function NetworkGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const nodesRef = useRef<NodeState[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const frameRef = useRef<number>(0);

  const initNodes = useCallback((width: number, height: number) => {
    nodesRef.current = graphNodes.map((n) => ({
      ...n,
      x: n.x * width,
      y: n.y * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNodes(rect.width, rect.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const getConnected = (nodeId: string) => {
      const connected = new Set<string>([nodeId]);
      graphEdges.forEach((e) => {
        if (e.from === nodeId) connected.add(e.to);
        if (e.to === nodeId) connected.add(e.from);
      });
      return connected;
    };

    const draw = () => {
      const rect = container.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const nodes = nodesRef.current;
      const mouse = mouseRef.current;
      const activeSet = hovered ? getConnected(hovered) : null;

      ctx.clearRect(0, 0, w, h);

      // Update physics
      nodes.forEach((node) => {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120 && dist > 0) {
          const force = (120 - dist) / 120;
          node.vx -= (dx / dist) * force * 0.08;
          node.vy -= (dy / dist) * force * 0.08;
        }

        node.vx *= 0.98;
        node.vy *= 0.98;
        node.x += node.vx;
        node.y += node.vy;

        // Soft bounds
        const pad = 30;
        if (node.x < pad) node.vx += 0.5;
        if (node.x > w - pad) node.vx -= 0.5;
        if (node.y < pad) node.vy += 0.5;
        if (node.y > h - pad) node.vy -= 0.5;
      });

      // Draw edges
      graphEdges.forEach((edge) => {
        const from = nodes.find((n) => n.id === edge.from);
        const to = nodes.find((n) => n.id === edge.to);
        if (!from || !to) return;

        const isActive =
          activeSet &&
          (activeSet.has(edge.from) || activeSet.has(edge.to));

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = isActive
          ? "rgba(167, 139, 250, 0.7)"
          : "rgba(148, 163, 184, 0.25)";
        ctx.lineWidth = isActive ? 2 : 1;
        ctx.stroke();
      });

      // Draw nodes
      nodes.forEach((node) => {
        const isHovered = hovered === node.id;
        const isConnected = activeSet?.has(node.id);
        const radius = node.major ? 10 : 6;
        const color = GROUP_COLORS[node.group % GROUP_COLORS.length];

        ctx.beginPath();
        ctx.arc(node.x, node.y, isHovered ? radius + 3 : radius, 0, Math.PI * 2);
        ctx.fillStyle =
          isHovered || isConnected
            ? color
            : `${color}88`;
        ctx.fill();

        if (isHovered || isConnected) {
          ctx.shadowColor = color;
          ctx.shadowBlur = 12;
        } else {
          ctx.shadowBlur = 0;
        }

        if (node.major || isHovered) {
          ctx.font = `${node.major ? "600 11px" : "500 10px"} var(--font-display), sans-serif`;
          ctx.fillStyle = isHovered ? "#1e40af" : "#64748b";
          ctx.textAlign = "center";
          ctx.fillText(node.label, node.x, node.y - radius - 8);
        }
      });

      ctx.shadowBlur = 0;
      frameRef.current = requestAnimationFrame(draw);
    };

    frameRef.current = requestAnimationFrame(draw);

    const handleMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };

      let found: string | null = null;
      for (const node of nodesRef.current) {
        const dx = mouseRef.current.x - node.x;
        const dy = mouseRef.current.y - node.y;
        if (Math.sqrt(dx * dx + dy * dy) < (node.major ? 14 : 10)) {
          found = node.id;
          break;
        }
      }
      setHovered(found);
    };

    const handleLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
      setHovered(null);
    };

    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("mouseleave", handleLeave);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("mouseleave", handleLeave);
    };
  }, [hovered, initNodes]);

  return (
    <div
      ref={containerRef}
      className="relative h-[320px] w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface to-card sm:h-[380px]"
    >
      <canvas ref={canvasRef} className="absolute inset-0 cursor-crosshair" />
      <div className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-card/80 px-3 py-1 text-xs text-muted backdrop-blur-sm">
        Hover nodes to explore skill connections
      </div>
    </div>
  );
}
