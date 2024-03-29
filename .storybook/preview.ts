import type { Preview } from '@storybook/react'
import '../src/styles/index.scss'
import '../src/styles/app.scss'
import '../src/styles/components.scss'
import '../src/styles/palettes/index.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
