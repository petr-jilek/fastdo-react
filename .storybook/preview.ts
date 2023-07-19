import type { Preview } from "@storybook/react"
import "../src/styles/index.css"
import "../src/styles/app/app.css"
import "../src/styles/app/components.css"
import "../src/styles/palettes/kemp-nb.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
