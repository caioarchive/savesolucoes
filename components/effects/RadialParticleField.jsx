"use client";

import { useEffect, useRef } from "react";

import { useReducedMotion } from "framer-motion";
import { useLenis } from "lenis/react";

const particleColors = [
  "rgba(0, 0, 0, 0.72)",
  "rgba(20, 20, 20, 0.58)",
  "rgba(55, 55, 55, 0.46)",
  "rgba(95, 95, 95, 0.36)",
];

function randomBetween(minimum, maximum) {
  return minimum + Math.random() * (maximum - minimum);
}

function getParticleCount(width) {
  if (width < 640) {
    return 55;
  }

  if (width < 1024) {
    return 95;
  }

  if (width < 1600) {
    return 145;
  }

  return 170;
}

function resetParticle(particle, width, height, distribute = false) {
  const shortestSide = Math.min(width, height);

  particle.angle = randomBetween(0, Math.PI * 2);
  particle.distance = randomBetween(shortestSide * 0.035, shortestSide * 0.5);
  particle.z = distribute ? randomBetween(0.1, 1.6) : randomBetween(1.24, 1.6);
  particle.speed = randomBetween(0.45, 1.05);
  particle.length = randomBetween(3, 11);
  particle.thickness = randomBetween(1.2, 2.4);
  particle.color =
    particleColors[Math.floor(Math.random() * particleColors.length)];
}

export default function RadialParticleField() {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);
  const particlesRef = useRef([]);
  const dimensionsRef = useRef({ width: 0, height: 0, dpr: 1 });
  const isVisibleRef = useRef(false);
  const pointerRef = useRef({
    currentX: 0,
    currentY: 0,
    targetX: 0,
    targetY: 0,
  });
  const scrollBoostRef = useRef({ current: 1, target: 1 });
  const shouldReduceMotion = useReducedMotion();

  useLenis((lenis) => {
    scrollBoostRef.current.target = Math.min(
      1.3,
      1 + Math.abs(lenis.velocity) * 0.012,
    );
  });

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d", { alpha: true });
    const host = canvas.parentElement;
    const finePointerQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );

    if (!context || !host) {
      return undefined;
    }

    function resizeCanvas() {
      const bounds = host.getBoundingClientRect();
      const width = Math.max(1, Math.round(bounds.width));
      const height = Math.max(1, Math.round(bounds.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      dimensionsRef.current = { width, height, dpr };

      const particleCount = shouldReduceMotion ? 44 : getParticleCount(width);
      const particles = particlesRef.current;

      while (particles.length < particleCount) {
        const particle = {};
        resetParticle(particle, width, height, true);
        particles.push(particle);
      }

      if (particles.length > particleCount) {
        particles.length = particleCount;
      }

      if (shouldReduceMotion) {
        drawFrame(0);
      }
    }

    function drawFrame(timestamp) {
      const { width, height } = dimensionsRef.current;
      const particles = particlesRef.current;
      const pointer = pointerRef.current;
      const scrollBoost = scrollBoostRef.current;
      const previousTimestamp = drawFrame.previousTimestamp || timestamp;
      const delta = Math.min(32, timestamp - previousTimestamp);
      const mobileOpacity = width < 640 ? 0.78 : width < 1024 ? 0.9 : 1;

      drawFrame.previousTimestamp = timestamp;
      pointer.currentX += (pointer.targetX - pointer.currentX) * 0.04;
      pointer.currentY += (pointer.targetY - pointer.currentY) * 0.04;
      scrollBoost.current += (scrollBoost.target - scrollBoost.current) * 0.06;
      scrollBoost.target += (1 - scrollBoost.target) * 0.08;

      context.clearRect(0, 0, width, height);
      context.lineCap = "round";

      const centerX = width / 2 + pointer.currentX;
      const centerY = height * 0.38 + pointer.currentY;

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];

        particle.z -= particle.speed * delta * 0.00034 * scrollBoost.current;

        if (particle.z <= 0.08) {
          resetParticle(particle, width, height);
        }

        const directionX = Math.cos(particle.angle);
        const directionY = Math.sin(particle.angle);
        const projectedRadius = particle.distance / particle.z;
        const x = centerX + directionX * projectedRadius;
        const y = centerY + directionY * projectedRadius;

        if (x < -24 || x > width + 24 || y < -24 || y > height + 24) {
          resetParticle(particle, width, height);
          continue;
        }

        const depth = Math.max(0, Math.min(1, 1 - particle.z / 1.6));
        const edgeFade = Math.max(
          0,
          Math.min(1, x / 42, (width - x) / 42, y / 42, (height - y) / 42),
        );
        const length = particle.length * (0.65 + depth * 0.58);

        context.globalAlpha = (0.62 + depth * 0.38) * edgeFade * mobileOpacity;
        context.strokeStyle = particle.color;
        context.lineWidth = particle.thickness * (0.85 + depth * 0.32);
        context.beginPath();
        context.moveTo(
          x - directionX * length * 0.3,
          y - directionY * length * 0.3,
        );
        context.lineTo(
          x + directionX * length * 0.7,
          y + directionY * length * 0.7,
        );
        context.stroke();
      }

      context.globalAlpha = 1;

      if (isVisibleRef.current && document.visibilityState === "visible") {
        frameRef.current = window.requestAnimationFrame(drawFrame);
      } else {
        frameRef.current = null;
        drawFrame.previousTimestamp = 0;
      }
    }

    function startAnimation() {
      if (
        frameRef.current === null &&
        isVisibleRef.current &&
        document.visibilityState === "visible"
      ) {
        frameRef.current = window.requestAnimationFrame(drawFrame);
      }
    }

    function stopAnimation() {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }

      drawFrame.previousTimestamp = 0;
    }

    function handleVisibilityChange() {
      if (document.visibilityState === "hidden") {
        stopAnimation();
      } else {
        startAnimation();
      }
    }

    function handlePointerMove(event) {
      if (!finePointerQuery.matches) {
        return;
      }

      const bounds = host.getBoundingClientRect();
      const normalizedX = (event.clientX - bounds.left) / bounds.width - 0.5;
      const normalizedY = (event.clientY - bounds.top) / bounds.height - 0.5;

      pointerRef.current.targetX = normalizedX * 24;
      pointerRef.current.targetY = normalizedY * 16;
    }

    function resetPointer() {
      pointerRef.current.targetX = 0;
      pointerRef.current.targetY = 0;
    }

    const resizeObserver = new ResizeObserver(resizeCanvas);

    if (shouldReduceMotion) {
      resizeCanvas();
      resizeObserver.observe(host);

      return () => resizeObserver.disconnect();
    }

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      { threshold: 0.01 },
    );

    resizeCanvas();
    resizeObserver.observe(host);
    intersectionObserver.observe(canvas);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    host.addEventListener("pointermove", handlePointerMove, { passive: true });
    host.addEventListener("pointerleave", resetPointer);

    return () => {
      stopAnimation();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      host.removeEventListener("pointermove", handlePointerMove);
      host.removeEventListener("pointerleave", resetPointer);
    };
  }, [shouldReduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="radial-particle-field pointer-events-none absolute inset-0 z-0 h-full w-full mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.28)_16%,rgba(0,0,0,0.58)_36%,black_68%,black_100%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.28)_16%,rgba(0,0,0,0.58)_36%,black_68%,black_100%)]"
    />
  );
}
