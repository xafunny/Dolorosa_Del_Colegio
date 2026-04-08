/* ============================================================
   script_v2.js — ANIMACIONES
   Partículas flotantes + animación reveal al hacer scroll.
   No necesitas editar este archivo.
   ============================================================ */

/* ── Partículas flotantes ─────────────────────────────────── */
(function () {
  var canvas = document.getElementById("particles");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  var W, H, pts;

  function rand(a, b) { return Math.random() * (b - a) + a; }

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    init();
  }

  function init() {
    var count = Math.floor(W * H / 14000);
    pts = [];
    for (var i = 0; i < count; i++) {
      pts.push({
        x:   rand(0, W),
        y:   rand(0, H),
        r:   rand(0.5, 2.2),
        vx:  rand(-0.2, 0.2),
        vy:  rand(-0.35, -0.05),
        alpha: rand(0.2, 0.85),
        // Colores: dorado, azul o crema según la paleta de la Virgen
        color: Math.random() < 0.6
          ? "rgba(200,145,58,"
          : Math.random() < 0.5
            ? "rgba(35,68,112,"
            : "rgba(253,250,244,",
        tw:  rand(0, Math.PI * 2),
        tws: rand(0.01, 0.04),
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    pts.forEach(function (p) {
      p.tw += p.tws;
      var a = p.alpha * (0.5 + 0.5 * Math.sin(p.tw));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + a + ")";
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;
      if (p.y < -5)   { p.y = H + 5; p.x = rand(0, W); }
      if (p.x < -5)     p.x = W + 5;
      if (p.x > W + 5)  p.x = -5;
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  draw();
})();

/* ── Reveal en scroll ─────────────────────────────────────── */
(function () {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach(function (el) {
    observer.observe(el);
  });
})();
