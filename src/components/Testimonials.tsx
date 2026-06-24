import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  return (
    <section id="testimoni" className="py-20 bg-gray-50">
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
            Testimoni Pelanggan
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 font-display">
            Apa Kata Pelanggan Kami
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Ribuan pelanggan puas telah menemukan mobil impian mereka bersama
            kami. Baca pengalaman mereka di sini.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover-lift"
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                "{testimonial.comment}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h5>
                  <p className="text-xs text-gray-500">{testimonial.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">
            Bergabunglah dengan ribuan pelanggan yang puas rental mobil bersama kami
          </p>
          <a
            href="#kontak"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover-glow hover-scale"
          >
            Sewa Mobil Sekarang
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
