import React, { useState } from "react"
import { colord } from "colord"
import { Copy, Check } from "lucide-react"
import { generateCenteredShades } from "./generateShade.js"
import { getFriendlyColorName } from "./colorName.js"

function ColorGenerator() {
  const [copiedHex, setCopiedHex] = useState(null)
  const [inputColor, setInputColor] = useState("3b82f6")
  const [colorName, setColorName] = useState("Blue")
  const [colorCards, setColorCards] = useState(() => {
    const parsed = colord('#3b82f6').toHsl()
    return generateCenteredShades(parsed.h, parsed.s, parsed.l)
  })

  const handleRandomClick = () => {
    const randomHue = Math.floor(Math.random() * 360)
    const randomSat = Math.floor(Math.random() * 30) + 60
    const randomLighness = Math.floor(Math.random() * 40) + 30

    const newShades = generateCenteredShades(randomHue, randomSat, randomLighness)

    setColorCards(newShades)

    const baseShade = newShades[10]
    setInputColor(baseShade.hex.replace("#", ""))

    const parsed = colord(baseShade.hex).toHsl()
    setColorName(getFriendlyColorName(parsed.h, parsed.s, parsed.l))
  }

  const handleChange = (e) => {
    const value = e.target.value
    setInputColor(value)

    const formattedValue = value.startsWith("#") || value.length !== 6 ? value : `#${value}`

    const parsedColor = colord(formattedValue)
    if (parsedColor.isValid()) {
       const {h, s, l} = parsedColor.toHsl()
       setColorCards(generateCenteredShades(h, s, l))

       setColorName(getFriendlyColorName(h, s, l))
    }
  }

  function handleCopy(hex) {
    navigator.clipboard.writeText(hex)
    setCopiedHex(hex)
    setTimeout(() => {
      setCopiedHex(null)
    }, 2000)
  }

  return (
    <div className="p-6 max-w-7xl mx-auto font-sans bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">React Color Shade Generator</h1>

      <div className="flex flex-wrap gap-4 mb-6 items-end bg-white p-4 rounded-xl shadow-sm border border-slate-200">
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">ENTER COLOR (e.g. 3b82f6)</label>
          <input type="text" value={inputColor} className="border border-slate-300 px-3 py-2 rounded-lg uppercase outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm" placeholder="3b82f6" />
        </div>

        <button onClick={handleRandomClick} className="bg-blue-600 text-white font-medium px-5 py-2 rounded-lg hover:bg-blue-700 transition shadow-sm">Generate Random</button>
      </div>

      <div className="mb-4 flex items-baseline gap-2">
        <h2 className="text-2xl font-bold text-slate-800">21 Shades of <span className="text-blue-600 capitaliz">{colorName}</span></h2>
        <span className="text-xs font-mono text-slate-400">({inputColor.startsWith("#") ? inputColor : `#${inputColor}`})</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-7 gap-4">
        {colorCards.map((card, index) => (
          <div key={index} style={{backgroundColor: card.hex}} className={`p-4 rounded-xl shadow-md flex flex-col justify-between h-44 transition-transform hover:scale-105 duration-200 relative ${card.isLight ? "text-slate-900" : "text-white"} ${card.isBase ? "ring-4 ring-offset-2 ring-blue-500" : ""}`}>
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold opacity-70">Step {index + 1}</span>
              {card.isBase && (<span className="bg-black/20 text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Base</span>)}

              <button onClick={() => handleCopy(card.hex)} className={`flex items-center gap-1.5 text-[10px] font-semibold px-2 py-1 rounded transition backdrop-blur-sm cursor-pointer ${card.isLight ? "bg-black/10 hover:bg-black/20 text-slate-900" : "bg-white/20 hover:bg-white/30 text-white"}`} title="Copy hex code">
                {copiedHex === card.hex ? (
                  <>
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    <spann>Copied</spann>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>

            <div className="space-y-1 font-mono text-xs">
              <p className="font-bold">{card.hex}</p>
              <p className="truncate opacity-90">{card.rgba}</p>
              <p className="truncate opacity-90">{card.hsl}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ColorGenerator