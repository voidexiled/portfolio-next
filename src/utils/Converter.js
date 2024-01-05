export function reduceBrightness(hexColor, amount) {
  // Verificar si se proporcionó un color hexadecimal válido
  if (!/^#([0-9A-F]{3}){1,2}$/i.test(hexColor)) {
    console.error("Formato de color hexadecimal no válido");
    return hexColor;
  }

  // Eliminar el símbolo # y convertir a formato de 6 caracteres si es de 3 caracteres
  hexColor = hexColor.replace(/^#/, "");
  if (hexColor.length === 3) {
    hexColor = hexColor
      .split("")
      .map((char) => char + char)
      .join("");
  }

  // Convertir a valores RGB
  const [r, g, b] = hexColor
    .match(/.{2}/g)
    .map((channel) => parseInt(channel, 16));

  // Convertir a HSL
  let hslColor = rgbToHsl(r, g, b);

  // Reducir la luminosidad
  hslColor[2] = Math.max(0, hslColor[2] - amount);

  // Convertir de nuevo a RGB
  const [newR, newG, newB] = hslToRgb(...hslColor);

  // Convertir a formato hexadecimal
  const newHexColor = `#${((1 << 24) + (newR << 16) + (newG << 8) + newB)
    .toString(16)
    .slice(1)}`;

  return newHexColor;
}

// Función para convertir RGB a HSL
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // Grayscale
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return [h * 360, s * 100, l * 100];
}

// Función para convertir HSL a RGB
function hslToRgb(h, s, l) {
  s /= 100;
  l /= 100;

  let r, g, b;

  if (s === 0) {
    r = g = b = l; // Achromatic
  } else {
    const hueToRgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hueToRgb(p, q, h + 1 / 3);
    g = hueToRgb(p, q, h);
    b = hueToRgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
