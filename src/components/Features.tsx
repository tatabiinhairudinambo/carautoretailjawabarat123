import {
  ShieldCheck,
  Search,
  DollarSign,
  CreditCard,
  MessageCircle,
  ClipboardCheck,
} from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Armada Bersih & Terawat',
      description:
        'Semua mobil rutin diservis dan dalam kondisi prima untuk kenyamanan perjalanan Anda.',
    },
    {
      icon: DollarSign,
      title: 'Harga Transparan',
      description:
        'Tidak ada biaya tersembunyi. Harga yang tertera adalah harga final untuk rental.',
    },
    {
      icon: ClipboardCheck,
      title: 'Driver Profesional',
      description:
        'Tersedia layanan dengan driver berpengalaman dan bersertifikat untuk perjalanan aman.',
    },
    {
      icon: MessageCircle,
      title: 'Customer Support 24 Jam',
      description:
        'Tim kami siap membantu Anda kapan saja selama masa rental, 24/7.',
    },
    {
      icon: Search,
      title: 'Booking Mudah via WhatsApp',
      description:
        'Pesan mobil dengan cepat dan mudah melalui WhatsApp tanpa ribet.',
    },
    {
      icon: CreditCard,
      title: 'Unit Terjamin Siap Jalan',
      description:
        'Setiap unit sudah dicek kelayakan dan dijamin siap untuk perjalanan jauh maupun dekat.',
    },
  ];

  return (
    <section className="py-20 bg-white">
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
            Keunggulan Kami
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 font-display">
            Mengapa Memilih Rental Kami?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Komitmen kami adalah memberikan pelayanan rental mobil terbaik
            dengan harga bersaing dan kendaraan yang selalu prima.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 group hover-lift"
            >
              <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <feature.icon className="text-white" size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 font-display">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
