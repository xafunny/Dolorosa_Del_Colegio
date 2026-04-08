/* ============================================================
   script_v1.js — CONFIGURACIÓN
   Edita aquí tu número de WhatsApp y el mensaje predefinido.
   ============================================================ */

// ── CONFIGURACIÓN EDITABLE ──────────────────────────────────
var CONFIG = {

  // Número de WhatsApp con código de país SIN el signo +
  // Ecuador: 593 + tu número sin el 0 inicial
  // Ejemplo: 0939301827  →  593939301827
  whatsappNumero: "593939301827",

  // Mensaje que aparece pre-escrito al abrir WhatsApp
  whatsappMensaje: "Hola, me interesa saber más sobre la Congregación La Dolorosa del Colegio 🙏",

};
// ────────────────────────────────────────────────────────────

// Construir enlace de WhatsApp automáticamente
(function () {
  var btn = document.getElementById("waBtn");
  if (btn) {
    var url =
      "https://wa.me/" +
      CONFIG.whatsappNumero +
      "?text=" +
      encodeURIComponent(CONFIG.whatsappMensaje);
    btn.setAttribute("href", url);
  }
})();
