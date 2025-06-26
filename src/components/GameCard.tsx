import { Link } from 'react-router-dom'

interface Game {
  id: string
  name: string
  description: string
  image: string
}

export default function GameCard({ game }: { game: Game }) {
  return (
    <div className="bg-white/5 rounded-xl p-4 shadow-md hover:shadow-lg transition duration-300 backdrop-blur-sm border border-white/10">
      <img
        src={`/images/${game.image}`}
        alt={game.name}
        className="w-full h-40 object-contain mb-4"
      />
      <h2 className="text-lg font-semibold text-blue-300 mb-2">{game.name}</h2>
      <p className="text-sm text-gray-400 mb-4 line-clamp-2">{game.description}</p>
      <Link
        to={`/game/${game.id}`}
        className="inline-block mt-auto bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
      >
        Top Up Sekarang
      </Link>
    </div>
  )
}

