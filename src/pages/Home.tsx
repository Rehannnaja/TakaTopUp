import BlackHoleCanvas from '../effects/BlackHoleCanvas'
import GameCard from '../components/GameCard'
import games from '../data/games'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Black Hole Background */}
      <BlackHoleCanvas />

      {/* Overlay Konten */}
      <div className="relative z-10 px-4 pt-24 pb-12 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-blue-400 drop-shadow-lg mb-12">
          TakaTopUp
        </h1>
        <p className="text-center text-lg md:text-xl text-gray-300 mb-10">
          Top up game favoritmu dengan gaya interaktif futuristik!
        </p>

        {/* Grid Game List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  )
}

