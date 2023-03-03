import { Inter } from '@next/font/google'
import '@/styles/globals.css'
import '@/styles/components.scss'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  )
}
