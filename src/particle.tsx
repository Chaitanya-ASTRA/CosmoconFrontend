import React, { useEffect, useRef } from "react";

const ParticleText: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles: any[] = [];
    let textCoordinates: { x: number; y: number }[] = [];
    let mode: "spread" | "text" = "spread";
    let switchTime = Date.now();

    // Hidden canvas for text pixels
    const textCanvas = document.createElement("canvas");
    const textCtx = textCanvas.getContext("2d")!;
    textCanvas.width = canvas.width;
    textCanvas.height = canvas.height;
    textCtx.fillStyle = "white";
    textCtx.font = "bold 120px Arial";
    textCtx.textAlign = "center";
    textCtx.fillText("COSMOCON", canvas.width / 2, canvas.height / 2);
    const textData = textCtx.getImageData(0, 0, canvas.width, canvas.height).data;

    for (let y = 0; y < canvas.height; y += 4) {
      for (let x = 0; x < canvas.width; x += 4) {
        const alpha = textData[(y * canvas.width + x) * 4 + 3];
        if (alpha > 128) textCoordinates.push({ x, y });
      }
    }

    class Particle {
      x: number; y: number; size: number; speedX: number; speedY: number;
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = 2;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
      }
      draw() {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
      update() {
        if (mode === "spread") {
          this.x += this.speedX;
          this.y += this.speedY;
          if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
          if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        } else {
          const target = textCoordinates[Math.floor(Math.random() * textCoordinates.length)];
          this.x += (target.x - this.x) * 0.05;
          this.y += (target.y - this.y) * 0.05;
        }
        this.draw();
      }
    }

    for (let i = 0; i < 1000; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update());

      if (Date.now() - switchTime > 3500) {
        mode = mode === "spread" ? "text" : "spread";
        switchTime = Date.now();
      }

      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-5" />;
};

export default ParticleText;
