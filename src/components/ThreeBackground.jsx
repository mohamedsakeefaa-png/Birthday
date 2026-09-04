import React, { useEffect, useRef } from 'react';

export const ThreeBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse interactive parallax
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 1. Stars (3D perspective particles)
    const starCount = window.innerWidth < 768 ? 90 : 180;
    const stars = Array.from({ length: starCount }, () => ({
      x: (Math.random() - 0.5) * width * 1.5,
      y: (Math.random() - 0.5) * height * 1.5,
      z: Math.random() * 1000 + 1,
      size: Math.random() * 1.8 + 0.5,
      alpha: Math.random() * 0.8 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
    }));

    // 2. Floating lanterns (glowing warm gold bubbles)
    const lanternCount = window.innerWidth < 768 ? 6 : 12;
    const lanterns = Array.from({ length: lanternCount }, () => ({
      x: Math.random() * width,
      y: height + Math.random() * 300,
      size: Math.random() * 16 + 12,
      speedY: Math.random() * 0.4 + 0.2,
      speedX: (Math.random() - 0.5) * 0.3,
      swayFreq: Math.random() * 0.02 + 0.01,
      swayAmp: Math.random() * 20 + 10,
      initialX: Math.random() * width,
      glowColor: Math.random() > 0.3 ? 'rgba(251, 191, 36, ' : 'rgba(244, 63, 94, '
    }));

    // 3. Floating Rose Petals / Hearts
    const petalCount = window.innerWidth < 768 ? 8 : 16;
    const petals = Array.from({ length: petalCount }, () => ({
      x: Math.random() * width,
      y: -20 - Math.random() * 200,
      size: Math.random() * 8 + 6,
      speedY: Math.random() * 0.6 + 0.3,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.03,
      opacity: Math.random() * 0.7 + 0.3
    }));

    let time = 0;

    const render = () => {
      time += 0.01;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const parallaxX = (mouseX - width / 2) * 0.04;
      const parallaxY = (mouseY - height / 2) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Deep Purple & Midnight Blue Gradient background with radial light spots
      const grad = ctx.createRadialGradient(
        width / 2 + parallaxX * 2,
        height * 0.3 + parallaxY * 2,
        50,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.9
      );
      grad.addColorStop(0, '#2d124d');
      grad.addColorStop(0.4, '#15092a');
      grad.addColorStop(1, '#070311');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Subtle Glowing Crescent Moon Motif in top corner
      const moonX = width * 0.82 + parallaxX * 0.5;
      const moonY = height * 0.18 + parallaxY * 0.5;
      ctx.save();
      ctx.shadowColor = 'rgba(254, 240, 138, 0.4)';
      ctx.shadowBlur = 40;
      ctx.beginPath();
      ctx.arc(moonX, moonY, 42, Math.PI * 0.15, Math.PI * 1.85);
      ctx.fillStyle = 'rgba(254, 240, 138, 0.25)';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(moonX - 12, moonY - 6, 38, 0, Math.PI * 2);
      ctx.fillStyle = '#15092a';
      ctx.fill();
      ctx.restore();

      // Render 3D Stars with Twinkle and Mouse Parallax
      stars.forEach((star) => {
        star.twinkleSpeed += 0.01;
        const alpha = Math.sin(star.twinkleSpeed) * 0.3 + star.alpha;

        const k = 600 / star.z;
        const px = star.x * k + width / 2 + parallaxX * (1000 / star.z);
        const py = star.y * k + height / 2 + parallaxY * (1000 / star.z);

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          ctx.beginPath();
          ctx.arc(px, py, Math.max(0.5, star.size * k), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(248, 250, 252, ${Math.max(0.1, alpha)})`;
          ctx.shadowColor = 'rgba(244, 114, 182, 0.6)';
          ctx.shadowBlur = star.size * 3;
          ctx.fill();
        }
      });

      // Render Floating Lanterns
      lanterns.forEach((l) => {
        l.y -= l.speedY;
        l.x = l.initialX + Math.sin(time * l.swayFreq * 20) * l.swayAmp + parallaxX * 0.2;

        if (l.y < -50) {
          l.y = height + 50;
          l.initialX = Math.random() * width;
        }

        ctx.save();
        ctx.shadowColor = l.glowColor + '0.8)';
        ctx.shadowBlur = l.size * 2;

        // Lantern Outer Glow
        const lGrad = ctx.createRadialGradient(l.x, l.y, 0, l.x, l.y, l.size * 1.8);
        lGrad.addColorStop(0, l.glowColor + '0.9)');
        lGrad.addColorStop(0.5, l.glowColor + '0.4)');
        lGrad.addColorStop(1, l.glowColor + '0)');

        ctx.beginPath();
        ctx.arc(l.x, l.y, l.size * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = lGrad;
        ctx.fill();

        // Lantern Inner Body (geometric silhouette)
        ctx.beginPath();
        ctx.roundRect(l.x - l.size * 0.4, l.y - l.size * 0.6, l.size * 0.8, l.size * 1.2, 4);
        ctx.fillStyle = 'rgba(254, 240, 138, 0.95)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(251, 191, 36, 0.6)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.restore();
      });

      // Render Floating Rose Petals / Hearts
      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(time + p.y * 0.01) * 0.5;
        p.rotation += p.rotSpeed;

        if (p.y > height + 30) {
          p.y = -20;
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = `rgba(244, 63, 94, ${p.opacity})`;
        ctx.shadowColor = 'rgba(236, 72, 153, 0.5)';
        ctx.shadowBlur = 8;

        // Draw soft heart petal
        ctx.beginPath();
        ctx.arc(-p.size / 4, 0, p.size / 2, 0, Math.PI);
        ctx.arc(p.size / 4, 0, p.size / 2, 0, Math.PI);
        ctx.lineTo(0, p.size * 0.8);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};
