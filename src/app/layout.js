import './globals.css'
import {  Space_Grotesk } from 'next/font/google'

const space = Space_Grotesk({ subsets: ['latin'] }, {weight: ["400"]})

export const metadata = {
  title: 'GPM',
  description: 'Graphix and Prints Multimedia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={space.className}>{children}</body>
    </html>
  )
}
