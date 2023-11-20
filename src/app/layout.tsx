import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s - HabitoFacil',
    default: 'HabitoFacil - Transforma tu vida, hábito a hábito.',
  },
  description:
    'Habitofácil es tu compañero diario para construir hábitos positivos de manera sencilla y efectiva. Con plantillas personalizadas, seguimiento detallado y apoyo motivacional, nuestra aplicación te guía paso a paso hacia una vida más saludable y productiva.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full bg-gray-50 antialiased', inter.variable)}
    >
      <body className="flex h-full flex-col">
        <div className="flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  )
}
