import type { Metadata } from 'next'
import '../style/globals.css'
import React from "react";

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
