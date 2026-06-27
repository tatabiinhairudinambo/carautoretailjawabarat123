import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// SVG icons untuk sosial media (lucide deprecated)
const SocialIcons = {
  Facebook: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
    </svg>
  ),
  Twitter: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  Youtube: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.96-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
    </svg>
  ),
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuLinks = [
    { label: 'Beranda', id: 'beranda' },
    { label: 'Tentang Kami', id: 'tentang' },
    { label: 'Unit Mobil', id: 'unit-mobil' },
    { label: 'Daftar Harga', id: 'harga' },
    { label: 'Testimoni', id: 'testimoni' },
  ];

  const services = [
    'Rental Harian', 'Rental Mingguan', 'Rental Bulanan',
    'Lepas Kunci', 'Dengan Driver', 'Antar Jemput Bandara',
  ];

  const socials = [
    { Icon: SocialIcons.Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { Icon: SocialIcons.Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { Icon: SocialIcons.Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { Icon: SocialIcons.Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400 relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-600/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-3 font-display leading-tight">
              Car Auto <span className="text-red-600">Garage</span>
            </h3>
            <p className="text-xs text-gray-600 mb-4 -mt-1 uppercase tracking-widest">Retail Indonesia</p>
            <p className="text-sm text-gray-500 mb-5 leading-relaxed">
              Layanan rental mobil terpercaya di Indonesia. Melayani dengan profesional sejak 2019.
            </p>
            <div className="flex gap-2">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <s.Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Menu Cepat</h4>
            <ul className="space-y-2.5">
              {menuLinks.map((link, i) => (
                <li key={i}>
                  <motion.button
                    whileHover={{ x: 4, color: '#f87171' }}
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-gray-500 hover:text-red-400 transition-all duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-red-600/40 rounded-full group-hover:bg-red-500 transition-colors" />
                    {link.label}
                  </motion.button>
                </li>
              ))}
              <li>
                <Link
                  to="/verifikasi-akun"
                  className="text-sm text-gray-500 hover:text-red-400 transition-all duration-200 flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 bg-red-600/40 rounded-full group-hover:bg-red-500 transition-colors" />
                  Verifikasi Akun
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Layanan Kami</h4>
            <ul className="space-y-2.5">
              {services.map((s, i) => (
                <li key={i} className="flex items-center gap-1.5 text-sm text-gray-500">
                  <span className="w-1 h-1 bg-gray-700 rounded-full" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Hubungi Kami</h4>
            <ul className="space-y-4">
              {[
                { icon: Phone, text: '+62 822-1384-0415' },
                { icon: Mail, text: 'info@carautogarageretail.com' },
                { icon: MapPin, text: 'Perumahan Grand Mutiara 2, Blok B1 No.1, Cileungsi, Kab. Bogor 16820' },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 3 }}
                  className="flex items-start gap-3 group cursor-default"
                >
                  <item.icon size={16} className="text-red-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors leading-relaxed">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
        >
          <p className="text-gray-600 text-center md:text-left flex items-center gap-1.5 flex-wrap justify-center">
            © {currentYear} Car Auto Garage Retail Indonesia. Made with
            <Heart size={12} className="text-red-600 fill-red-600 inline" />
            by{' '}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="http://portfolio-website-production-c2e6.up.railway.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 font-bold transition-colors underline decoration-red-600/30"
            >
              Tatabiin Hairudin Ambo
            </motion.a>
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
