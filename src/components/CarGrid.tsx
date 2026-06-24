import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import CarCard from './CarCard';
import { cars } from '../data/cars';

const CarGrid = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');

  const brands = ['all', ...Array.from(new Set(cars.map((car) => car.brand)))];

  const filteredCars = cars.filter((car) => {
    const matchesSearch =
      car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBrand = selectedBrand === 'all' || car.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  return (
    <section id="unit-mobil" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-semibold text-red-600 mb-4 uppercase tracking-wider">
            Armada Mobil
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 font-display">
            Pilih Armada Rental Anda
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Kami menyediakan berbagai pilihan armada berkualitas untuk kebutuhan
            perjalanan pribadi maupun bisnis Anda.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-col md:flex-row gap-4"
        >
          {/* Search */}
          <div className="flex-1 relative">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Cari mobil berdasarkan nama atau merek..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Brand Filter */}
          <div className="relative">
            <SlidersHorizontal
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="pl-12 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none appearance-none bg-white min-w-[200px] cursor-pointer"
            >
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand === 'all' ? 'Semua Merek' : brand}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-6"
        >
          Menampilkan <span className="font-semibold">{filteredCars.length}</span>{' '}
          kendaraan tersedia
        </motion.p>

        {/* Car Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              Tidak ada mobil yang sesuai dengan pencarian Anda.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CarGrid;
