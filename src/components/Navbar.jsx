import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <span className={`text-2xl font-bold ${scrolled ? 'text-primary-600' : 'text-white'}`}>
              Apni Prerna
            </span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className={`font-medium transition-colors ${
                scrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/80 hover:text-white'
              }`}
            >
              Features
            </a>
            <a
              href="#pricing"
              className={`font-medium transition-colors ${
                scrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/80 hover:text-white'
              }`}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className={`font-medium transition-colors ${
                scrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/80 hover:text-white'
              }`}
            >
              Contact
            </a>
            <a
              href="#contact"
              className="bg-primary-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-primary-700 transition shadow-lg"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className={`p-2 rounded-lg ${
                scrolled ? 'text-gray-600' : 'text-white'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
