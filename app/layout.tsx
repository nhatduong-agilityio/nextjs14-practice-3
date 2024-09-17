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
    <html lang='en' className={`${poppins.variable} ${roboto.variable}`} suppressHydrationWarning>
      <body>
        <ClerkProvider>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
            {children}
            <Toaster />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}

export default RootLayout
