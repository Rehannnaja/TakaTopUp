export default function Footer() {
  return (
    <footer
      id="kontak"
      className="mt-20 py-8 text-center text-sm text-gray-500 border-t border-white/10 bg-black/50 backdrop-blur"
    >
      <p>
        &copy; {new Date().getFullYear()} <span className="text-blue-400 font-semibold">TakaTopUp</span>. All rights reserved.
      </p>
      <p className="mt-2">
        Made with 💙 for gamers. Contact via <a href="https://wa.me/62XXXXXXXXXX" target="_blank" className="text-blue-500 hover:underline">WhatsApp</a>.
      </p>
    </footer>
  )
}
