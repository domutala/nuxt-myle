export function GetContrastTextColor(backgroundColor: string) {
  // Convertir la couleur de fond en format RGB si nécessaire
  let hexColor: string | undefined;
  if (backgroundColor[0] === "#") hexColor = HexToRgb(backgroundColor);
  else hexColor = backgroundColor;
  if (!hexColor) return 0;

  // Extraire les valeurs R, G et B de la couleur de fond
  const rgbValues = ExtractRGBValues(hexColor);
  if (!rgbValues) return 0;

  // Calculer la luminosité relative (indice de contraste)
  const relativeBrightness =
    (rgbValues.r * 299 + rgbValues.g * 587 + rgbValues.b * 114) / 1000;

  // Déterminer si la couleur de texte doit être claire ou sombre
  return relativeBrightness < 125 ? 0 : 1;
}

// Convertir une couleur hexadécimale en notation RGB
export function HexToRgb(hex: string) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b;
  });
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    return `rgb(${r}, ${g}, ${b})`;
  }
}

// Extraire les valeurs R, G et B de la couleur au format RGB
export function ExtractRGBValues(
  rgbColor: string
): { r: number; g: number; b: number } | null {
  const match = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/.exec(rgbColor);
  if (match) {
    const r = parseInt(match[1], 10);
    const g = parseInt(match[2], 10);
    const b = parseInt(match[3], 10);
    return { r, g, b };
  }
  return null;
}

export function GetVarColor(element: HTMLElement, color?: string) {
  if (!color) return;
  if (!/var\(\s*--([a-zA-Z0-9-]+)\s*\)/.test(color)) return color;

  color = window.getComputedStyle(element).getPropertyValue(color.slice(4, -1));

  return GetVarColor(element, color);
}

export function BlendColor(color: string, opacity: string | number = 1) {
  if (typeof opacity === "string") opacity = Number(opacity);
  if (isNaN(opacity)) opacity = 1;

  if (color[0] === "#") color = HexToRgb(color) as string;
  // Extraire les valeurs RVB de la couleur
  const rgbValues = color.match(/\d+/g);
  if (rgbValues) {
    const [r, g, b] = rgbValues;

    // Appliquer l'opacité en utilisant la formule CSS : nouvelle valeur = (ancienne valeur * opacité) + (couleur de fond * (1 - opacité))
    const newR = Math.round(parseInt(r, 10) * opacity + 255 * (1 - opacity));
    const newG = Math.round(parseInt(g, 10) * opacity + 255 * (1 - opacity));
    const newB = Math.round(parseInt(b, 10) * opacity + 255 * (1 - opacity));

    return `rgb(${newR}, ${newG}, ${newB})`;
  }

  return color;
}
