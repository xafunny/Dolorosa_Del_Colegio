# Congregación La Dolorosa del Colegio
### Sitio web de invitación — La Esperanza

---

## 📁 Estructura del proyecto

```
dolorosa/
├── index.html      ← Página principal (estructura)
├── style.css       ← Todos los estilos y colores
├── script_v1.js    ← Configuración editable (WhatsApp, etc.)
├── script_v2.js    ← Animaciones (partículas + scroll)
├── foto_1.png      ← Foto de la Virgencita (ya incluida)
├── foto_2.jpg      ← ⚠️ DEBES AGREGAR: foto de los miembros
├── foto_3.jpg      ← ⚠️ DEBES AGREGAR: foto de la urna peregrina
└── README.md       ← Este archivo
```

---

## 🖼️ Cómo agregar tus fotos

Solo copia tus imágenes a la misma carpeta del proyecto con estos nombres exactos:

| Archivo     | Qué es                          |
|-------------|---------------------------------|
| `foto_1.png`| La Virgencita ✅ ya incluida    |
| `foto_2.jpg`| Foto grupal de los miembros     |
| `foto_3.jpg`| Foto de la Urna Peregrina       |

> **Consejo:** Puedes usar `.jpg`, `.jpeg`, `.png` o `.webp`.
> Si usas otro nombre o extensión, edita `index.html` y cambia
> `src="foto_2.jpg"` por el nombre real de tu archivo.

---

## 📱 Cómo cambiar el número de WhatsApp

Abre **`script_v1.js`** y edita esta línea:

```js
whatsappNumero: "593939301827",
```

Formato: código de país + número sin el 0 inicial.
- Ecuador: `593` + `939301827` = `593939301827`
- Colombia: `57` + tu número

---

## 🎨 Cómo cambiar colores

Abre **`style.css`** y edita las variables al inicio:

```css
:root {
  --gold:  #c8913a;   /* dorado principal */
  --gold2: #e8c878;   /* dorado claro */
  --azul3: #0d1e34;   /* fondo oscuro */
  --cream: #f5ecd8;   /* texto claro */
}
```

---

## 📝 Cómo cambiar textos

Abre **`index.html`** y edita directamente los textos dentro de las etiquetas.
Cada sección tiene un comentario que indica qué es:

- `§1 HERO` → Título y lema principal
- `§2 QUIÉNES SOMOS` → Descripción de la congregación
- `§3 MISIÓN` → Las 4 tarjetas de actividades
- `§4 POR QUÉ UNIRSE` → Lista de razones
- `§5 CIERRE` → Llamada a la acción y contacto

---

## 🚀 Cómo publicar en GitHub Pages

1. Sube todos los archivos a tu repositorio de GitHub
2. Ve a **Settings → Pages**
3. En **Source** selecciona `main` branch y carpeta `/ (root)`
4. Guarda y espera unos minutos
5. Tu página estará en `https://tuusuario.github.io/tu-repositorio`

---

*Hecho con ❤️ para la Congregación La Dolorosa del Colegio — La Esperanza*
