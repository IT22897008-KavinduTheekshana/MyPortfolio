import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './provider'

export const metadata: Metadata = {
  title: "Kavindu's Portfolio",
  description: 'Modern & Minimalist JS Mastery Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
