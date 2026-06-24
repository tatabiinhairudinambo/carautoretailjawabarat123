import { useState } from 'react';
import { Send, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { ContactForm } from '../types';

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Halo, saya ${formData.name}%0A%0ATelepon: ${formData.phone}%0A%0APesan: ${formData.message}`;
    const phoneNumber = '6281234567890';
    const url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(url, '_blank');

    // Reset form
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold text-red-600 mb-4 uppercase tracking-wider">
              Hubungi Kami
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 font-display">
              Siap Membantu Rental Mobil Anda
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base">
              Tim kami siap memberikan informasi lengkap dan membantu Anda
              memilih kendaraan yang tepat untuk kebutuhan perjalanan Anda.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telepon</h4>
                  <p className="text-gray-600">+62 812-3456-7890</p>
                  <p className="text-sm text-gray-500">Senin - Minggu, 09:00 - 21:00</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">info@carretailindonesia.com</p>
                  <p className="text-sm text-gray-500">Balasan dalam 24 jam</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Alamat Showroom</h4>
                  <p className="text-gray-600">
                    Jl. Sudirman No. 123<br />
                    Jakarta Selatan, DKI Jakarta 12190
                  </p>
                </div>
              </div>
            </div>

            {/* Map Image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2087749585404!2d106.82070731476889!3d-6.236690995480827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta!5e0!3m2!1sen!2sid!4v1234567890123"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Showroom"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-2xl"
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-6 font-display">
              Kirim Pesan
            </h4>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                  placeholder="Contoh: 081234567890"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none resize-none"
                  placeholder="Tulis pertanyaan atau kebutuhan Anda..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 hover-glow group"
              >
                <Send
                  size={20}
                  className="group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300"
                />
                <span>Hubungi Admin Sekarang</span>
              </button>
            </form>

            <p className="text-sm text-gray-500 text-center mt-6">
              Pesan Anda akan dikirim langsung via WhatsApp untuk respons yang
              lebih cepat. Booking sekarang!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
