import { useState } from 'react'

interface Props {
  gameName: string
}

export default function WhatsAppButton({ gameName }: Props) {
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    const uidInput = document.getElementById('uid') as HTMLInputElement
    const packageSelect = document.getElementById('package') as HTMLSelectElement

    const uid = uidInput?.value.trim()
    const selected = packageSelect?.value

    if (!uid || !selected) {
      alert('Mohon isi UID dan pilih paket terlebih dahulu.')
      return
    }

    const message = `Halo Admin, saya ingin top up ${gameName}.\n\nUID: ${uid}\nPaket: ${selected}`
    const phone = '62XXXXXXXXXX' // GANTI dengan nomor WA kamu
    const encoded = encodeURIComponent(message)
    const url = `https://wa.me/${phone}?text=${encoded}`

    setLoading(true)
    setTimeout(() => {
      window.open(url, '_blank')
      setLoading(false)
    }, 500)
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-lg transition mt-4 disabled:opacity-50"
    >
      {loading ? 'Mengalihkan ke WhatsApp...' : 'Checkout via WhatsApp'}
    </button>
  )
}

