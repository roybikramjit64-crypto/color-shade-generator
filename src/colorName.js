import { colord } from "colord"

export function getFriendlyColorName(hue, sat, lightness) {
  if (lightness > 90) return "White";
  if (lightness < 10) return "Black";
  if (sat < 10) return "Gray";

  if (hue >= 345 || hue < 15) return "Red";
  if (hue >= 15 && hue < 45) return "Orange";
  if (hue >= 45 && hue < 70) return "Yellow";
  if (hue >= 70 && hue < 165) return "Green";
  if (hue >= 165 && hue < 195) return "Cyan";
  if (hue >= 195 && hue < 260) return "Blue";
  if (hue >= 260 && hue < 290) return "Purple";
  if (hue >= 290 && hue < 330) return "Magenta";
  return "Pink";
}