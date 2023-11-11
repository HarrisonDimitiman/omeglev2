import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { getServerSession } from 'next-auth'
import SessionProvider from "./components/SessionProvider"
import NavMenu from "./components/NavMenu"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Omegle V2',
  description: 'This is a Omegle V2',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()

  return (
    <html lang="en">
      <body className={inter.className}>
          <SessionProvider session={session}>
            <NavMenu />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
              {children}
            </main>
          </SessionProvider>
          
      </body>
    </html>
  )
}
