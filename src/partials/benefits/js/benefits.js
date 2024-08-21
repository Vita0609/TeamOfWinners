function initCanvas() {
  const canvas = document.querySelector('.canvas-decoration');
  if (canvas) {
    const ctx = canvas.getContext('2d');

    setCanvasSize();

    window.addEventListener('resize', setCanvasSize);

    const config = {
      maxSpeed: 20,
      minSpeed: 50,
      density: 150,
      lineThreshold: 150,
      dotColor: '#ed3b44',
      lineColor: '#ed3b44',
      bgColor: '#1c1d20',
    };

    let dots = [];

    function setCanvasSize() {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    }

    function randomInt(min, max) {
      return min + Math.round(Math.random() * (max - min));
    }

    const outsideTolerance = 70;

    function getRandomInitialPos() {
      let x, y;
      if (Math.random() > 0.5) {
        x =
          Math.random() > 0.5
            ? canvas.width + outsideTolerance + randomInt(1, outsideTolerance)
            : -outsideTolerance - randomInt(1, outsideTolerance);
        y = randomInt(-outsideTolerance, canvas.height + outsideTolerance);
      } else {
        y =
          Math.random() > 0.5
            ? canvas.height + outsideTolerance + randomInt(1, outsideTolerance)
            : -outsideTolerance - randomInt(1, outsideTolerance);
        x = randomInt(-outsideTolerance, canvas.width + outsideTolerance);
      }

      return { x, y };
    }

    function generateSpeed(pos) {
      const speed = {};
      const randomX = randomInt(config.minSpeed, config.maxSpeed),
        randomY = randomInt(config.minSpeed, config.maxSpeed);

      speed.x =
        pos.x < 0
          ? randomX
          : pos.x > canvas.width
          ? -randomX
          : randomInt(-config.maxSpeed, config.maxSpeed);

      speed.y =
        pos.y < 0
          ? randomY
          : pos.y > canvas.height
          ? -randomY
          : randomInt(-config.maxSpeed, config.maxSpeed);

      return speed;
    }

    function isDotStraying(dot) {
      return (
        (dot.pos.x < -outsideTolerance && dot.speed.x < 0) ||
        (dot.pos.y < -outsideTolerance && dot.speed.y < 0) ||
        (dot.pos.x > canvas.width + outsideTolerance && dot.speed.x > 0) ||
        (dot.pos.y > canvas.height + outsideTolerance && dot.speed.y > 0)
      );
    }

    class Dot {
      constructor() {
        this.pos = getRandomInitialPos();
        this.radius = randomInt(2, 4);

        this.speed = generateSpeed(this.pos);
        this.shouldBeRemoved = false;
      }

      update(timeStep) {
        this.pos.x += this.speed.x * timeStep;
        this.pos.y += this.speed.y * timeStep;
        this.shouldBeRemoved = isDotStraying(this);
      }
    }

    function generateDots() {
      for (let s = dots.length; s < config.density; s++) {
        dots.push(new Dot());
      }
    }

    function removeDots() {
      dots = dots.filter(d => !d.shouldBeRemoved);
    }

    function getRGBComponents(hex) {
      const result = /^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/.exec(hex);
      const r = parseInt(result[1], 16),
        g = parseInt(result[2], 16),
        b = parseInt(result[3], 16);

      return [r, g, b];
    }

    function drawDot(dot) {
      ctx.beginPath();
      ctx.moveTo(dot.pos.x, dot.pos.y);
      ctx.arc(dot.pos.x, dot.pos.y, dot.radius, 0, Math.PI * 2);
      const [r, g, b] = getRGBComponents(config.dotColor);
      ctx.fillStyle = `rgb(${r} ${g} ${b})`;
      ctx.fill();
    }

    function drawDots() {
      for (const dot of dots) {
        drawDot(dot);
      }
    }

    function drawLines(lines) {
      ctx.lineWidth = 2;
      for (const l of lines) {
        const [start, end] = l;
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.closePath();

        const d = distance(start, end);
        const opacity = (config.lineThreshold - d) / config.lineThreshold;
        const [r, g, b] = getRGBComponents(config.lineColor);
        ctx.strokeStyle = `rgb(${r} ${g} ${b} / ${opacity})`;
        ctx.stroke();
      }
    }

    function drawBackground() {
      const [r, g, b] = getRGBComponents(config.bgColor);
      ctx.fillStyle = `rgb(${r} ${g} ${b})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function updateCanvas(timeStep) {
      drawBackground();
      drawLines(formLines());
      drawDots();
    }

    function distance(a, b) {
      const horizontalDistance = Math.max(a.x, b.x) - Math.min(a.x, b.x);
      const verticalDistance = Math.max(a.y, b.y) - Math.min(a.y, b.y);
      return Math.sqrt(horizontalDistance ** 2 + verticalDistance ** 2);
    }

    function formLines() {
      const lines = [];
      const numOfDots = dots.length;
      for (let i = 0; i < numOfDots; i++) {
        const dot1 = dots[i];
        for (let i2 = 0; i2 < numOfDots; i2++) {
          if (i == i2) continue;
          const dot2 = dots[i2];
          const d = distance(dot1.pos, dot2.pos);
          if (d <= config.lineThreshold) {
            lines.push([dot1.pos, dot2.pos]);
          }
        }
      }
      return lines;
    }

    let timerId;

    function runAnimation(callback) {
      let lastTime = null;
      function frame(current) {
        if (lastTime) {
          const timePassed = Math.min(100, current - lastTime) / 1000;
          if (callback(timePassed)) timerId = requestAnimationFrame(frame);
        } else {
          timerId = requestAnimationFrame(frame);
        }
        lastTime = current;
      }
      timerId = requestAnimationFrame(frame);
    }

    function stopAnimation() {
      cancelAnimationFrame(timerId);
    }

    runAnimation(timeStep => {
      removeDots();
      generateDots();
      for (const d of dots) d.update(timeStep);
      updateCanvas(timeStep);
      return true;
    });

    window.config = config;
  }
}

function checkAndInitCanvas() {
  if (window.innerWidth >= 1440) {
    initCanvas();
  } else {
    const canvas = document.querySelector('.canvas-decoration');
    if (canvas) {
      canvas.remove();
    }
  }
}

checkAndInitCanvas();

window.addEventListener('resize', checkAndInitCanvas);
