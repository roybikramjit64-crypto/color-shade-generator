import { colord } from "colord"

export function generateCenteredShades(baseHue, baseSat, baseLightness) {
  const cards = []
  const totalCards = 21
  const midIndex = 10

  const maxLightness = 88
  const minLightness = 15

  const clampedBaseL = Math.max(minLightness, Math.min(maxLightness, baseLightness))

  for (let i = 0; i < totalCards; i++) {
    let lightness

    if (i < midIndex) {
      lightness = maxLightness - ((maxLightness - clampedBaseL) / midIndex) * i
    } else if (i === midIndex) {
      lightness = clampedBaseL
    } else {
      const stepsFromMid = i - midIndex
      lightness = clampedBaseL - ((clampedBaseL - minLightness) / (totalCards - 1 - midIndex)) * stepsFromMid
    }

    const color = colord({h: baseHue, s: baseSat, l: lightness})

    cards.push({
      hex: color.toHex(),
      rgba: color.toRgbString(),
      hsl: color.toHslString(),
      isLight: lightness > 50,
      isBase: i === midIndex,
    });
  }
  return cards;
}