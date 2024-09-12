import { poppins, roboto } from '@/styles/fonts'
import { ClerkProvider } from '@clerk/nextjs'
import '../styles/globals.css'

// Components
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/providers/toaster'

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <ClerkProvider>
      <html lang='en' className={`${poppins.variable} ${roboto.variable}`}>
        <body>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}

export default RootLayout
