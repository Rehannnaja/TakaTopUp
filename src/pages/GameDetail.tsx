import { useParams, useNavigate } from 'react-router-dom'
import games from '../data/games'
import packages from '../data/packages'
import WhatsAppButton from '../components/WhatsAppButton'

export default function GameDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const game = games.find((g) => g.id === id)
  const gamePackages = packages[id || ''] || []

  if (!game) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-red-500">Game tidak ditemukan.</h1>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Kembali ke Beranda
        </button>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen px-4 pt-24 pb-12 max-w-4xl mx-auto z-10">
      <h1 className="text-4xl font-bold mb-2 text-blue-300">{game.name}</h1>
      <p className="text-gray-400 mb-6">{game.description}</p>
      <img
        src={`/images/${game.image}`}
        alt={game.name}
        className="w-full max-w-md mx-auto rounded-xl mb-8 shadow-xl"
      />

      <form className="mb-8 space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-300">UID / ID Pengguna</label>
          <input
            type="text"
            placeholder="Masukkan UID kamu"
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="uid"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-300">Pilih Paket</label>
          <select
            id="package"
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Pilih Paket --</option>
            {gamePackages.map((p, idx) => (
              <option key={idx} value={p.name}>
                {p.name} - Rp{p.price.toLocaleString()}
              </option>
            ))}
          </select>
        </div>

        {/* Checkout via WA */}
        <WhatsAppButton gameName={game.name} />
      </form>
    </div>
  )
}

