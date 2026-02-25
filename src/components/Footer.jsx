const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Apni Prerna</h3>
            <p className="text-gray-400 text-sm mt-1">
              Learning safety system for India's PODs and schools
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a 
              href="https://apnipathshala.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Apnipathshala
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Apni Prerna. A product of{' '}
            <a 
              href="https://apnipathshala.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300"
            >
              Apnipathshala
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
