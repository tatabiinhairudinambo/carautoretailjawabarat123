import { Users, Car as CarIcon, ArrowRight } from 'lucide-react';
import { Car } from '../types';
import { motion } from 'framer-motion';

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleWhatsApp = () => {
    const message = `Halo, saya tertarik sewa mobil ${car.name} (${car.year}) dengan harga ${formatPrice(car.price)}/Hari. Mohon info lebih lanjut.`;
    const phoneNumber = '6281234567890';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover-lift transition-all duration-300 group h-full flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-56 flex-shrink-0">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {car.featured && (
          <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse-slow">
            Populer
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900">
          {car.year}
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3 font-display group-hover:text-red-600 transition-colors min-h-[56px] line-clamp-2">
          {car.name}
        </h3>

        {/* Specs */}
        <div className="flex items-center gap-4 mb-4 text-sm">
          <div className="flex items-center space-x-2 text-gray-600">
            <Users size={16} className="text-red-600" />
            <span>{car.passengers} Penumpang</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <CarIcon size={16} className="text-red-600" />
            <span>{car.transmission}</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-1.5 mb-4 min-h-[72px]">
          {car.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-xs text-gray-700 bg-gray-50 px-2.5 py-1.5 rounded-lg"
            >
              <div className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0"></div>
              <span className="flex-1">{feature}</span>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="mb-4 bg-red-50 p-3 rounded-lg mt-auto">
          <p className="text-xs text-gray-600 mb-1">Harga Rental</p>
          <p className="text-2xl font-bold text-red-600 font-display">
            {formatPrice(car.price)}<span className="text-sm font-normal text-gray-600">/Hari</span>
          </p>
        </div>

        {/* Button */}
        <button
          onClick={handleWhatsApp}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 hover-glow group/btn"
        >
          <span>Sewa Sekarang</span>
          <ArrowRight
            size={18}
            className="group-hover/btn:translate-x-2 transition-transform duration-300"
          />
        </button>
      </div>
    </motion.div>
  );
};

export default CarCard;
