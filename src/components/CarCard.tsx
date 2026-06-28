import { Users, Car as CarIcon, ArrowRight } from 'lucide-react';
import { Car } from '../types';
import { motion } from 'framer-motion';

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);

  const handleWhatsApp = () => {
    const message = `Halo, saya tertarik sewa mobil ${car.name} (${car.year}) dengan harga ${formatPrice(car.price)}/Hari. Mohon info lebih lanjut.`;
    const phoneNumber = '6282213840415';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
      className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 group flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48 sm:h-52 flex-shrink-0">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {car.featured && (
          <div className="absolute top-3 left-3 bg-red-600 text-white px-2.5 py-1 rounded-full text-xs font-bold">
            Populer
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-gray-900">
          {car.year}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        {/* Name */}
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 font-display group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
          {car.name}
        </h3>

        {/* Specs */}
        <div className="flex items-center gap-3 mb-3 text-xs sm:text-sm">
          <div className="flex items-center gap-1.5 text-gray-600">
            <Users size={14} className="text-red-600 flex-shrink-0" />
            <span>{car.passengers} Penumpang</span>
          </div>
          <div className="w-px h-3 bg-gray-200" />
          <div className="flex items-center gap-1.5 text-gray-600">
            <CarIcon size={14} className="text-red-600 flex-shrink-0" />
            <span>{car.transmission}</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-1.5 mb-4">
          {car.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 px-2.5 py-1.5 rounded-lg"
            >
              <div className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="mt-auto mb-4 bg-red-50 p-3 rounded-xl border border-red-100">
          <p className="text-xs text-gray-500 mb-0.5">Harga Rental</p>
          <div className="flex items-baseline gap-1 flex-wrap">
            <span className="text-xl sm:text-2xl font-bold text-red-600 font-display leading-none">
              {formatPrice(car.price)}
            </span>
            <span className="text-xs text-gray-500">/Hari</span>
          </div>
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleWhatsApp}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 group/btn"
        >
          <span>Pesan Sekarang</span>
          <ArrowRight
            size={16}
            className="group-hover/btn:translate-x-1 transition-transform duration-300"
          />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CarCard;
