import { useEffect } from 'react'

interface Props {
  setDark: (value: boolean) => void
}

export default function KonamiListener({ setDark }: Props) {
  useEffect(() => {
    const konami = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
    ]
    let input: string[] = []

    const onKeyDown = (e: KeyboardEvent) => {
      input.push(e.key)
      if (input.length > konami.length) input.shift()

      if (input.join(',') === konami.join(',')) {
        // Trigger efek — contoh: toggle dark mode
        setDark((prev) => !prev)
        alert('🌀 Mode berubah dengan kekuatan Konami Code!')
        input = []
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [setDark])

  return null
}

