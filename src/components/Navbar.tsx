import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-20 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="TakaTopUp" className="w-8 h-8" />
          <span className="text-xl font-bold text-blue-400 tracking-wide">TakaTopUp</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300 font-medium">
          <Link to="/" className="hover:text-white transition">Beranda</Link>
          <a href="#games" className="hover:text-white transition">Game</a>
          <a href="#kontak" className="hover:text-white transition">Kontak</a>
        </nav>
      </div>
    </header>
  )
}

