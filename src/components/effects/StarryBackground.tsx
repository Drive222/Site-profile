import { useEffect, useRef } from 'react';
import { usePortfolio } from '../../state/usePortfolio';

type Star = {
  x: number;
  y: number;
  z: number;
  radius: number;
  alpha: number;
  twinkle: number;
  speed: number;
};

function createStar(width: number, height: number): Star {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    z: 0.25 + Math.random() * 0.75,
    radius: 0.45 + Math.random() * 1.35,
    alpha: 0.3 + Math.random() * 0.65,
    twinkle: Math.random() * Math.PI * 2,
    speed: 0.015 + Math.random() * 0.045
  };
}

export function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = usePortfolio();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!canvas || !context) {
      return undefined;
    }

    let animationFrame = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let stars: Star[] = [];
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const density = width < 640 ? 95 : width < 1024 ? 140 : 190;
      stars = Array.from({ length: density }, () => createStar(width, height));
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.targetX = (event.clientX / width - 0.5) * 20;
      pointer.targetY = (event.clientY / height - 0.5) * 20;
    };

    const draw = () => {
      pointer.x += (pointer.targetX - pointer.x) * 0.08;
      pointer.y += (pointer.targetY - pointer.y) * 0.08;
      context.clearRect(0, 0, width, height);

      const backgroundGlow = context.createRadialGradient(width * 0.72, height * 0.18, 0, width * 0.72, height * 0.18, width * 0.72);
      backgroundGlow.addColorStop(0, theme === 'dark' ? 'rgba(38, 198, 185, 0.16)' : 'rgba(26, 137, 124, 0.12)');
      backgroundGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      context.fillStyle = backgroundGlow;
      context.fillRect(0, 0, width, height);

      for (const star of stars) {
        if (!reducedMotion) {
          star.y += star.speed * star.z;
          star.x += star.speed * 0.12;
          star.twinkle += 0.018 + star.z * 0.012;

          if (star.y > height + 8 || star.x > width + 8) {
            Object.assign(star, createStar(width, height));
            star.y = -8;
          }
        }

        const twinkle = 0.62 + Math.sin(star.twinkle) * 0.28;
        const x = star.x + pointer.x * star.z * 0.8;
        const y = star.y + pointer.y * star.z * 0.8;

        context.beginPath();
        context.arc(x, y, star.radius * star.z, 0, Math.PI * 2);
        context.fillStyle =
          theme === 'dark'
            ? `rgba(231, 250, 255, ${star.alpha * twinkle})`
            : `rgba(31, 68, 93, ${star.alpha * twinkle * 0.5})`;
        context.fill();
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', handlePointerMove);
    draw();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 opacity-80" aria-hidden="true" />;
}
