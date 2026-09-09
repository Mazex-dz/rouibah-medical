"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Medical3DCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [telemetryBpm, setTelemetryBpm] = useState(72);

  useEffect(() => {
    // Subtle realistic BPM fluctuation every 3.5s
    const bpmInterval = setInterval(() => {
      setTelemetryBpm(Math.floor(70 + Math.random() * 5));
    }, 3500);
    return () => clearInterval(bpmInterval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse tilt & momentum
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;
    let scrollRot = 0;

    const handleResize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const onMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = x * 0.8;
      targetRotX = -y * 0.6;
    };

    const onScroll = () => {
      scrollRot = window.scrollY * 0.003;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    // DNA Parameters
    const numPairs = 28;
    const radius = Math.min(width * 0.18, 120);
    const spacing = 18;
    let time = 0;

    // Ambient floating particles
    const particleCount = width < 768 ? 24 : 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: (Math.random() - 0.5) * width * 1.2,
      y: (Math.random() - 0.5) * height * 1.2,
      z: (Math.random() - 0.5) * 400,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 2.2 + 0.8,
      hue: Math.random() > 0.6 ? 175 : 205,
      alpha: Math.random() * 0.5 + 0.3,
    }));

    // ECG waveform animation state
    let ecgX = 0;
    const ecgHistory: number[] = [];
    const maxEcgPoints = 140;

    const getEcgSample = (t: number) => {
      // Periodic cardiac wave formula: P-wave -> QRS complex -> T-wave
      const period = 1.2;
      const cycle = (t % period) / period;
      if (cycle > 0.18 && cycle < 0.24) {
        return Math.sin((cycle - 0.18) / 0.06 * Math.PI) * 6; // P wave
      }
      if (cycle >= 0.28 && cycle < 0.31) {
        return -((cycle - 0.28) / 0.03) * 8; // Q
      }
      if (cycle >= 0.31 && cycle < 0.36) {
        return ((cycle - 0.31) / 0.025) * 38; // R wave (sharp peak)
      }
      if (cycle >= 0.36 && cycle < 0.40) {
        return -((cycle - 0.36) / 0.04) * 14; // S wave
      }
      if (cycle > 0.48 && cycle < 0.60) {
        return Math.sin((cycle - 0.48) / 0.12 * Math.PI) * 10; // T wave
      }
      return 0; // Baseline
    };

    // 3D rotation projection helper
    const project = (x: number, y: number, z: number, cx: number, cy: number) => {
      // Rotate around X
      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);
      const y1 = y * cosX - z * sinX;
      const z1 = y * sinX + z * cosX;

      // Rotate around Y
      const cosY = Math.cos(currentRotY);
      const sinY = Math.sin(currentRotY);
      const x2 = x * cosY + z1 * sinY;
      const z2 = -x * sinY + z1 * cosY;

      // Perspective projection
      const fov = 450;
      const scale = fov / (fov + z2 + 300);
      return {
        x: cx + x2 * scale,
        y: cy + y1 * scale,
        scale,
        depth: z2,
      };
    };

    const render = () => {
      time += 0.016;

      // Smooth lerp rotation toward target
      currentRotX += (targetRotX - currentRotX) * 0.06;
      currentRotY += (targetRotY + scrollRot - currentRotY) * 0.06;

      ctx.clearRect(0, 0, width, height);

      const centerX = width * 0.5;
      const centerY = height * 0.48;

      // ── 1. Floating Ambient Medical Particles ───────────────────────
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -width * 0.6) p.x = width * 0.6;
        if (p.x > width * 0.6) p.x = -width * 0.6;
        if (p.y < -height * 0.6) p.y = height * 0.6;
        if (p.y > height * 0.6) p.y = -height * 0.6;

        const prj = project(p.x, p.y, p.z, centerX, centerY);
        if (prj.scale > 0) {
          ctx.beginPath();
          ctx.arc(prj.x, prj.y, p.radius * prj.scale, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.hue}, 85%, 65%, ${p.alpha * prj.scale})`;
          ctx.shadowColor = `hsl(${p.hue}, 90%, 60%)`;
          ctx.shadowBlur = 8 * prj.scale;
          ctx.fill();
        }
      });
      ctx.shadowBlur = 0;

      // ── 2. 3D DNA Double Helix ──────────────────────────────────────
      const dnaAngleOffset = time * 0.85;
      const nodes: Array<{
        x1: number;
        y1: number;
        s1: number;
        x2: number;
        y2: number;
        s2: number;
        depth: number;
        index: number;
      }> = [];

      for (let i = 0; i < numPairs; i++) {
        const yOffset = (i - numPairs / 2) * spacing;
        const theta = i * 0.32 + dnaAngleOffset;

        const xA = Math.cos(theta) * radius;
        const zA = Math.sin(theta) * radius;
        const xB = -xA;
        const zB = -zA;

        const pA = project(xA, yOffset, zA, centerX, centerY);
        const pB = project(xB, yOffset, zB, centerX, centerY);

        const avgDepth = (pA.depth + pB.depth) / 2;
        nodes.push({
          x1: pA.x,
          y1: pA.y,
          s1: pA.scale,
          x2: pB.x,
          y2: pB.y,
          s2: pB.scale,
          depth: avgDepth,
          index: i,
        });
      }

      // Depth sorting (painter's algorithm)
      nodes.sort((a, b) => b.depth - a.depth);

      nodes.forEach((n) => {
        const alpha = Math.max(0.2, Math.min(1, (n.depth + 250) / 400));

        // Base pair connecting bar with gradient
        const rungsGrad = ctx.createLinearGradient(n.x1, n.y1, n.x2, n.y2);
        rungsGrad.addColorStop(0, `rgba(45, 212, 191, ${alpha * 0.8})`);
        rungsGrad.addColorStop(0.5, `rgba(56, 189, 248, ${alpha * 0.95})`);
        rungsGrad.addColorStop(1, `rgba(16, 185, 129, ${alpha * 0.8})`);

        ctx.beginPath();
        ctx.moveTo(n.x1, n.y1);
        ctx.lineTo(n.x2, n.y2);
        ctx.lineWidth = Math.max(1, 2.5 * ((n.s1 + n.s2) / 2));
        ctx.strokeStyle = rungsGrad;
        ctx.stroke();

        // Node A (Cyan / Teal)
        ctx.beginPath();
        ctx.arc(n.x1, n.y1, Math.max(2, 4.5 * n.s1), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(45, 212, 191, ${alpha})`;
        ctx.shadowColor = "#2dd4bf";
        ctx.shadowBlur = 10 * n.s1;
        ctx.fill();

        // Node B (Emerald / Blue)
        ctx.beginPath();
        ctx.arc(n.x2, n.y2, Math.max(2, 4.5 * n.s2), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${alpha})`;
        ctx.shadowColor = "#38bdf8";
        ctx.shadowBlur = 10 * n.s2;
        ctx.fill();
      });
      ctx.shadowBlur = 0;

      // ── 3. Real-Time Holographic ECG Monitor Wave ───────────────────
      const ecgVal = getEcgSample(time * 1.2);
      ecgHistory.push(ecgVal);
      if (ecgHistory.length > maxEcgPoints) {
        ecgHistory.shift();
      }

      const ecgBoxWidth = Math.min(width * 0.75, 420);
      const ecgBoxHeight = 56;
      const ecgLeft = (width - ecgBoxWidth) / 2;
      const ecgBaseY = height - 60;

      // ECG Background Glow Strip
      const ecgBgGrad = ctx.createLinearGradient(ecgLeft, 0, ecgLeft + ecgBoxWidth, 0);
      ecgBgGrad.addColorStop(0, "rgba(15, 76, 129, 0)");
      ecgBgGrad.addColorStop(0.15, "rgba(20, 184, 166, 0.08)");
      ecgBgGrad.addColorStop(0.85, "rgba(20, 184, 166, 0.08)");
      ecgBgGrad.addColorStop(1, "rgba(15, 76, 129, 0)");

      ctx.fillStyle = ecgBgGrad;
      ctx.fillRect(ecgLeft, ecgBaseY - ecgBoxHeight / 2, ecgBoxWidth, ecgBoxHeight);

      // Fine grid lines
      ctx.strokeStyle = "rgba(45, 212, 191, 0.12)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(ecgLeft, ecgBaseY);
      ctx.lineTo(ecgLeft + ecgBoxWidth, ecgBaseY);
      ctx.stroke();

      // Draw ECG Path
      if (ecgHistory.length > 1) {
        ctx.beginPath();
        const step = ecgBoxWidth / maxEcgPoints;
        for (let i = 0; i < ecgHistory.length; i++) {
          const px = ecgLeft + i * step;
          const py = ecgBaseY - ecgHistory[i];
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }

        ctx.strokeStyle = "#2dd4bf";
        ctx.lineWidth = 2.2;
        ctx.shadowColor = "#2dd4bf";
        ctx.shadowBlur = 12;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Glowing pulse head
        const lastIdx = ecgHistory.length - 1;
        const headX = ecgLeft + lastIdx * step;
        const headY = ecgBaseY - ecgHistory[lastIdx];

        ctx.beginPath();
        ctx.arc(headX, headY, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "#2dd4bf";
        ctx.shadowBlur = 16;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="dora-medical-canvas-wrapper relative w-full h-[460px] md:h-[580px] lg:h-[660px] overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />

      {/* Floating 3D Telemetry HUD (Dora signature) */}
      <div className="absolute top-6 right-6 md:right-12 z-10 flex flex-col gap-2 pointer-events-auto">
        <div className="dora-hud-pill flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-teal-500/25 shadow-lg shadow-teal-900/5 text-xs font-semibold text-slate-800 transition-all hover:scale-105">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-[11px] text-teal-800">
            ECG LIVE : <span className="text-emerald-700 font-bold">{telemetryBpm} BPM</span>
          </span>
        </div>

        <div className="dora-hud-pill flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-400/30 text-white text-[10px] tracking-wide font-medium shadow-md">
          <i className="fa-solid fa-shield-heart text-cyan-400 text-xs"></i>
          <span>URGENCES 24/7 EN DIRECT</span>
        </div>
      </div>

      {/* Subtle depth radial vignette */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
    </div>
  );
}
