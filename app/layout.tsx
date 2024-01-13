import type { Metadata } from 'next'
import './assets/scss/_styles.scss'

// Import Layout Components
import Header from './components/layout/header'

// Metadata for the <head> section of the page
export const metadata: Metadata = {
  title: 'Carlos Muñoz',
  description: 'Portfolio of Carlos Muñoz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
