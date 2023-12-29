import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../style/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mosha',
  description: 'Motivational quotes for daily inspiration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
