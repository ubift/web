import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ubift',
  icons: {
    icon: '/ubift.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`container text-primary bg-primary-dark ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
