import * as React from 'react'
import { Poppins, Roboto } from 'next/font/google'
import type { Preview } from '@storybook/react'
import '../styles/globals.css'
import { ThemeProvider } from '../components/providers/theme-provider'
import { Toaster } from '../components/providers/toaster'

import { withThemeByClassName } from '@storybook/addon-themes'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'], variable: '--font-poppins' })
const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'], variable: '--font-roboto' })

// Decoradores: https://storybook.js.org/docs/react/writing-stories/decorators#page-top
export const decorators = [
  (Story) => {
    return (
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
        <div className={`${poppins.variable} ${roboto.variable}`}>
          <Story />
          <Toaster />
        </div>
      </ThemeProvider>
    )
  },
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
]

export default preview
