import { motion } from 'framer-motion';
import { cars } from '../data/cars';

const PriceTable = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleWhatsApp = (carName: string, price: number) => {
    const message = `Halo, saya tertarik rental mobil ${carName} seharga ${formatPrice(price)}/Hari. Mohon info lebih lanjut tentang syarat dan ketentuan rental.`;
    const phoneNumber = '6281234567890';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="harga" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-semibold text-red-500 mb-4 uppercase tracking-wider">
            Daftar Harga
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-6 font-display">
            Harga Rental Per Hari
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Daftar lengkap harga rental seluruh armada. Hubungi kami untuk paket
            mingguan dan bulanan dengan harga lebih hemat.
          </p>
        </motion.div>

        {/* Desktop Table - Hidden on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="hidden lg:block overflow-x-auto rounded-xl border border-gray-800"
        >
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                  Nama Mobil
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                  Tahun
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                  Transmisi
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                  Kapasitas
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold uppercase tracking-wider">
                  Harga/Hari
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-900/50 divide-y divide-gray-800">
              {cars.map((car, index) => (
                <motion.tr
                  key={car.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="hover:bg-gray-800/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-16 h-12 object-cover rounded"
                      />
                      <div>
                        <p className="font-semibold">{car.name}</p>
                        <p className="text-sm text-gray-400">{car.brand}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{car.year}</td>
                  <td className="px-6 py-4 text-gray-300">{car.transmission}</td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold">
                      {car.passengers} Penumpang
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-bold font-display text-lg">
                    {formatPrice(car.price)}<span className="text-sm font-normal text-gray-400">/Hari</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => handleWhatsApp(car.name, car.price)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                    >
                      Sewa
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Cards - Visible on Mobile & Tablet */}
        <div className="lg:hidden space-y-4">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700"
            >
              <div className="flex gap-4 p-4">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-24 h-20 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-white mb-1 truncate">{car.name}</h4>
                  <p className="text-sm text-gray-400 mb-2">{car.brand}</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-gray-700 px-2 py-1 rounded">{car.year}</span>
                    <span className="bg-gray-700 px-2 py-1 rounded">{car.transmission}</span>
                    <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded font-semibold">
                      {car.passengers} Penumpang
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-900/50 flex items-center justify-between border-t border-gray-700">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Harga/Hari</p>
                  <p className="text-lg font-bold text-white font-display">
                    {formatPrice(car.price)}<span className="text-xs font-normal text-gray-400">/Hari</span>
                  </p>
                </div>
                <button
                  onClick={() => handleWhatsApp(car.name, car.price)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                >
                  Sewa
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 bg-red-600/10 border border-red-600/20 rounded-lg p-6 text-center"
        >
          <p className="text-gray-300">
            💡 <span className="font-semibold">Harga dapat berubah saat high season.</span>{' '}
            Hubungi admin untuk paket mingguan, bulanan, dan promo spesial.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceTable;
