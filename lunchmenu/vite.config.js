// vite.config.ts
import UnoCSS from 'unocss/vite'
import { presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons'

export default {
  plugins: [
    UnoCSS({ 
      presets: [
        presetUno(),
        presetIcons({})
      ]
     }),
  ],
}
