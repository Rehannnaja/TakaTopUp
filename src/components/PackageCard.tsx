interface Package {
  name: string
  price: number
  selected: boolean
  onSelect: () => void
}

export default function PackageCard({ name, price, selected, onSelect }: Package) {
  return (
    <div
      onClick={onSelect}
      className={`cursor-pointer p-4 rounded-xl border transition duration-200 ${
        selected
          ? 'bg-blue-600 border-blue-400 text-white'
          : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
      }`}
    >
      <div className="font-semibold text-base">{name}</div>
      <div className="text-sm text-gray-400">Rp{price.toLocaleString()}</div>
    </div>
  )
}
