import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Raleway } from 'next/font/google'
import './globals.css'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hongyu Zhu',
  description: 'Hongyu Zhu - personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
