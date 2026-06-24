import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToUnits = () => {
    const element = document.getElementById('unit-mobil');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('kontak');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="beranda"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=80"
          alt="Showroom Mobil Premium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/50 rounded-full text-red-500 text-sm font-semibold mb-6"
          >
            🚗 Rental Mobil Terpercaya Indonesia
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight font-display px-4 sm:px-0"
          >
            Rental Mobil Terpercaya <br className="hidden sm:block" />
            <span className="text-red-600 gradient-text">untuk Perjalanan Anda</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto px-4 sm:px-0"
          >
            Sewa mobil dengan armada terbaik, harga terjangkau, dan pelayanan
            profesional untuk kebutuhan perjalanan pribadi maupun bisnis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0"
          >
            <button
              onClick={scrollToUnits}
              className="group bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-red-600/50 hover-glow w-full sm:w-auto justify-center"
            >
              <span>Lihat Armada</span>
              <ArrowRight
                className="group-hover:translate-x-2 transition-transform duration-300"
                size={20}
              />
            </button>

            <button
              onClick={scrollToContact}
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg flex items-center space-x-2 transition-all duration-300 hover-scale w-full sm:w-auto justify-center"
            >
              <Play size={20} className="group-hover:scale-110 transition-transform duration-300" />
              <span>Hubungi Admin</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-16 sm:mt-20 max-w-4xl mx-auto px-4 sm:px-0"
        >
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display">
              500+
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-1">
              Pelanggan Puas
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display">
              50+
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-1">
              Unit Kendaraan
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display">
              24/7
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-1">
              Customer Support
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display">
              5+
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-1">
              Tahun Pengalaman
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
