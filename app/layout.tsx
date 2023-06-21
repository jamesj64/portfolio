import './globals.css'
import { League_Spartan } from 'next/font/google'

const leagueSpartan = League_Spartan({ subsets: ['latin'] })

export const metadata = {
  title: 'James Jordan - Portfolio',
  description: 'James Jordan portfolio, software engineer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="all" />
      </head>
      <body className={leagueSpartan.className}>{children}</body>
    </html>
  )
}
