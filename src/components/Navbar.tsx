import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <h1 className="text-2xl font-bold text-white font-display">
              Car <span className="text-red-600">Retail</span>
            </h1>
            <p className="text-[10px] text-gray-400 -mt-1">INDONESIA</p>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, color: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('beranda')}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Beranda
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, color: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('tentang')}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Tentang
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, color: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('unit-mobil')}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Armada
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, color: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('harga')}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Harga
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, color: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('testimoni')}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Testimoni
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('kontak')}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold hover-glow"
            >
              Hubungi Kami
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/98 backdrop-blur-md border-t border-gray-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-3">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                onClick={() => scrollToSection('beranda')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                Beranda
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                onClick={() => scrollToSection('tentang')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                Tentang
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => scrollToSection('unit-mobil')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                Armada
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                onClick={() => scrollToSection('harga')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                Harga
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => scrollToSection('testimoni')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                Testimoni
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
                onClick={() => scrollToSection('kontak')}
                className="block w-full text-left bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Hubungi Kami
              </motion.button>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-3 border-t border-gray-800 space-y-2"
              >
                <a
                  href="tel:+6281234567890"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors px-3 py-2"
                >
                  <Phone size={16} />
                  <span className="text-sm">+62 812-3456-7890</span>
                </a>
                <a
                  href="mailto:info@carretailindonesia.com"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors px-3 py-2"
                >
                  <Mail size={16} />
                  <span className="text-sm">info@carretailindonesia.com</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
