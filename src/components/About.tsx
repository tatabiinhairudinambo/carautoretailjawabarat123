import { Shield, Award, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      icon: CheckCircle2,
      title: 'Unit Terawat',
      description: 'Semua mobil rutin diservis dan dalam kondisi prima',
    },
    {
      icon: Award,
      title: 'Harga Bersaing',
      description: 'Tarif rental kompetitif dengan promo menarik',
    },
    {
      icon: Users,
      title: 'Layanan 24/7',
      description: 'Customer support siap membantu kapan saja',
    },
    {
      icon: TrendingUp,
      title: 'Proses Mudah',
      description: 'Booking cepat via WhatsApp tanpa ribet',
    },
  ];

  const stats = [
    { number: '500+', label: 'Pelanggan Puas' },
    { number: '50+', label: 'Unit Kendaraan' },
    { number: '24/7', label: 'Customer Support' },
    { number: '5+', label: 'Tahun Pengalaman' },
  ];

  return (
    <section id="tentang" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-red-600 mb-4 uppercase tracking-wider">
            Tentang Kami
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 font-display">
            Rental Mobil Terpercaya di Indonesia
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Car Retail Indonesia adalah penyedia layanan rental mobil yang telah
            melayani ribuan pelanggan di seluruh Indonesia sejak 2019. Kami
            berkomitmen memberikan pengalaman terbaik untuk kebutuhan transportasi Anda.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image with Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80"
                alt="Rental Mobil + Driver"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              
              {/* Badge Overlay - Top */}
              <div className="absolute top-6 left-6 bg-red-600 text-white px-5 py-3 rounded-xl shadow-xl animate-float">
                <p className="text-3xl font-bold font-display leading-none">5+</p>
                <p className="text-xs mt-1">Tahun Pengalaman</p>
              </div>

              {/* Text Overlay - Bottom */}
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-display text-shadow">
                  RENTAL MOBIL + DRIVER
                </h4>
                <p className="text-white/90 text-sm sm:text-base text-shadow">
                  Melayani Perjalanan Keluarga, Wisata dan Corporate
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <p className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base">
              Dengan armada terawat dan sistem booking yang mudah, kami memastikan
              setiap perjalanan Anda nyaman dan aman. Kepuasan pelanggan adalah
              prioritas utama kami.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 group hover-lift"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <feature.icon className="text-red-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-6 md:p-8 rounded-2xl shadow-lg"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group cursor-default"
            >
              <p className="text-3xl md:text-4xl font-bold text-red-600 mb-2 font-display group-hover:scale-110 transition-transform">
                {stat.number}
              </p>
              <p className="text-gray-600 text-xs md:text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
