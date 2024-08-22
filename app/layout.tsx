import type { Metadata } from 'next'
import { Poppins, Roboto } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

// Components
import { ThemeProvider } from '@/components/theme-provider'

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'], variable: '--font-poppins' })
const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'], variable: '--font-roboto' })

export const metadata: Metadata = {
  title: {
    template: '%s | Square Dashboard',
    default: 'Square Dashboard',
  },
  description: 'Square Dashboard App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang='en' className={`${poppins.variable} ${roboto.variable}`}>
        <body>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
