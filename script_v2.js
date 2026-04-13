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

/* ── Reveal en scroll — funciona al bajar Y al subir ─────── */
(function () {
  var elements = document.querySelectorAll(".reveal");

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          // Elemento entra en vista → animar entrada
          e.target.classList.add("visible");
          e.target.classList.remove("hidden-up", "hidden-down");
        } else {
          // Elemento sale de vista → preparar animación para la próxima vez
          var rect = e.target.getBoundingClientRect();
          if (rect.top > 0) {
            // Sale por abajo → cuando vuelva a subir, entrará desde abajo
            e.target.classList.remove("visible");
            e.target.classList.add("hidden-down");
          } else {
            // Sale por arriba → cuando vuelva a bajar, entrará desde arriba
            e.target.classList.remove("visible");
            e.target.classList.add("hidden-up");
          }
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach(function (el) {
    observer.observe(el);
  });
})();
