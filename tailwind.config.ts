import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
  content: [
    "{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}"
  ],
  plugins: [
    tailwindcssAnimate
  ]
} satisfies Config