import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4 font-display">
              Car <span className="text-red-600">Retail</span>
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Layanan rental mobil terpercaya di Indonesia. Melayani dengan
              profesional sejak 2019.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Youtube size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Menu Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('beranda')}
                  className="hover:text-red-500 transition-colors hover:translate-x-1 inline-block"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('tentang')}
                  className="hover:text-red-500 transition-colors hover:translate-x-1 inline-block"
                >
                  Tentang Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('unit-mobil')}
                  className="hover:text-red-500 transition-colors hover:translate-x-1 inline-block"
                >
                  Unit Mobil
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('harga')}
                  className="hover:text-red-500 transition-colors hover:translate-x-1 inline-block"
                >
                  Daftar Harga
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimoni')}
                  className="hover:text-red-500 transition-colors hover:translate-x-1 inline-block"
                >
                  Testimoni
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Layanan Kami</h4>
            <ul className="space-y-2 text-sm">
              <li>Rental Harian</li>
              <li>Rental Mingguan</li>
              <li>Rental Bulanan</li>
              <li>Lepas Kunci</li>
              <li>Dengan Driver</li>
              <li>Antar Jemput Bandara</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3 group">
                <Phone size={18} className="text-red-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">+62 812-3456-7890</span>
              </li>
              <li className="flex items-start space-x-3 group">
                <Mail size={18} className="text-red-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">info@carretailindonesia.com</span>
              </li>
              <li className="flex items-start space-x-3 group">
                <MapPin size={18} className="text-red-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">Jl. Sudirman No. 123, Jakarta Selatan</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm gap-4"
        >
          <p className="text-gray-500 text-center md:text-left">
            © {currentYear} Car Retail Indonesia. Developed by{' '}
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="http://portfolio-website-production-c2e6.up.railway.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 font-semibold transition-all duration-300 underline decoration-red-500/30 hover:decoration-red-400 inline-block"
            >
              Tatabiin Hairudin Ambo ✨
            </motion.a>
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-red-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-red-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
