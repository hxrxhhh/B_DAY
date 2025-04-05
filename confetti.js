// Simple Confetti System
class Confetti {
    constructor() {
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
      document.body.appendChild(this.canvas);
      
      this.particles = [];
      this.maxParticles = 150;
      this.lastUpdate = Date.now();
      
      this.resize();
      window.addEventListener('resize', () => this.resize());
      this.init();
    }
  
    resize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
    }
  
    init() {
      // Create initial particles
      for(let i = 0; i < this.maxParticles; i++) {
        this.particles.push({
          x: Math.random() * this.width,
          y: -Math.random() * this.height,
          color: `hsl(${Math.random() * 360}, 100%, 50%)`,
          size: Math.random() * 10 + 5,
          speed: Math.random() * 3 + 2,
          angle: Math.random() * Math.PI * 2
        });
      }
      
      this.animate();
    }
  
    animate() {
      const now = Date.now();
      const delta = now - this.lastUpdate;
      this.lastUpdate = now;
  
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      this.ctx.fillRect(0, 0, this.width, this.height);
  
      this.particles.forEach(particle => {
        particle.y += particle.speed * (delta / 16);
        particle.x += Math.cos(particle.angle) * 2;
        particle.angle += 0.03;
  
        if(particle.y > this.height) {
          particle.y = -10;
          particle.x = Math.random() * this.width;
        }
  
        this.ctx.fillStyle = particle.color;
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        this.ctx.fill();
      });
  
      requestAnimationFrame(() => this.animate());
    }
  }
  
<script src="confetti.js"></script>