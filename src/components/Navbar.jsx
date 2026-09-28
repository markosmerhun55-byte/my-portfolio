import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex gap-6 justify-center py-6 bg-gray-900">
      <Link to="/" className="text-white hover:text-sky-400 text-lg">Home</Link>
      <Link to="/about" className="text-white hover:text-sky-400 text-lg">About</Link>
      <Link to="/projects" className="text-white hover:text-sky-400 text-lg">Projects</Link>
    </nav>
  )
}   