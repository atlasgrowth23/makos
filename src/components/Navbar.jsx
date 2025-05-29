import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Emergency', path: '/emergency' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : location.pathname === '/' 
            ? 'bg-white/10 backdrop-blur-sm' 
            : 'bg-white/95 shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col"
            >
              <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                scrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white'
              }`}>
                Makos Plumbing & Gas
              </h1>
              <span className={`text-sm transition-colors duration-300 ${
                scrolled || location.pathname !== '/' ? 'text-blue-600' : 'text-blue-200'
              }`}>
                20+ Years of Excellence
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? scrolled || location.pathname !== '/'
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-white bg-white/20'
                      : scrolled || location.pathname !== '/'
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                        : 'text-white hover:text-blue-200 hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <motion.a
                href="tel:6012916057"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-emergency ml-4"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call Now
              </motion.a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                scrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <motion.a
                href="tel:6012916057"
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.95 }}
                className="btn-emergency w-full justify-center mt-4"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call (601) 291-6057
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar