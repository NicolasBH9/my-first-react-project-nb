import { Inter } from 'next/font/google'
import Message from './components/message'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div><Message></Message></div>

    </main>
  )
}

