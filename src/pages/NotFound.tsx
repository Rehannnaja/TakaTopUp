import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold text-blue-500 drop-shadow-lg">404</h1>
      <p className="text-xl text-gray-300 mt-2">Halaman tidak ditemukan</p>
      <p className="text-gray-500 mb-6">Mungkin kamu tersesat di lubang hitam semesta ini 🌀</p>

      <Link
        to="/"
        className="px-5 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-semibold"
      >
        Kembali ke Beranda
      </Link>
    </div>
  )
}
