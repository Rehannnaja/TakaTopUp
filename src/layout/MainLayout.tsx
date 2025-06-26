import { ReactNode, useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DarkModeToggle from '../components/DarkModeToggle'
import KonamiListener from '../components/KonamiListener'
import BlackHoleCanvas from '../effects/BlackHoleCanvas'

interface Props {
  children: ReactNode
}

export default function MainLayout({ children }: Props) {
  const [dark, setDark] = useState(true)

  // Sync mode ke class html
  useEffect(() => {
    const html = document.documentElement
    dark ? html.classList.add('dark') : html.classList.remove('dark')
  }, [dark])

  return (
    <div className="bg-black text-white dark:bg-black dark:text-white relative min-h-screen">
      {/* Interaktif background black hole */}
      <BlackHoleCanvas />

      {/* Navigasi dan toggle */}
      <Navbar />
      <DarkModeToggle dark={dark} setDark={setDark} />
      <KonamiListener setDark={setDark} />

      {/* Konten halaman */}
      <main className="relative z-10">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

