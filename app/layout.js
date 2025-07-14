import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Reticulo - Revolutionary Sports Technology Solutions',
  description: 'Reticulo provides innovative sports technology solutions including academy management, AI analysis, and event management. Empowering athletes and coaches worldwide.',
  keywords: 'sports technology, academy management, AI sports analysis, event management, athlete performance, coaching tools',
  authors: [{ name: 'Reticulo' }],
  creator: 'Reticulo',
  publisher: 'Reticulo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Reticulo - Revolutionary Sports Technology Solutions',
    description: 'Empowering athletes and coaches with cutting-edge technology solutions for sports excellence.',
    url: 'https://reticulo.in',
    siteName: 'Reticulo',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1496055828681-8d699424c1c7',
        width: 1200,
        height: 630,
        alt: 'Reticulo Sports Technology',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reticulo - Revolutionary Sports Technology Solutions',
    description: 'Empowering athletes and coaches with cutting-edge technology solutions for sports excellence.',
    images: ['https://images.unsplash.com/photo-1496055828681-8d699424c1c7'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}