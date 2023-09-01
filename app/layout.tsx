import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tech Jobs Interview Questions',
  description: 'We help you prepare for tech job interviews',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
