import { Moon, Sun } from 'lucide-react'

interface Props {
  dark: boolean
  setDark: (v: boolean) => void
}

export default function DarkModeToggle({ dark, setDark }: Props) {
  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-4 right-4 z-30 bg-black/60 backdrop-blur text-white p-2 rounded-full hover:bg-blue-600 transition"
      title="Toggle Dark Mode"
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
