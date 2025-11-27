import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, Download, Eye } from 'lucide-react';

interface FloorPlan {
  id: number;
  title: string;
  bedrooms: string;
  builtUpArea: string;
  plotSize: string;
  type: string;
  image: string;
  dimensions: string;
}

const floorPlansData: FloorPlan[] = [
  { id: 1, title: '1BHK Compact', bedrooms: '1BHK', builtUpArea: '650', plotSize: '30x40', type: 'Residential', image: 'https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=400', dimensions: '25x26 ft' },
  { id: 2, title: '2BHK Modern', bedrooms: '2BHK', builtUpArea: '1100', plotSize: '30x50', type: 'Residential', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400', dimensions: '30x37 ft' },
  { id: 3, title: '2BHK Premium', bedrooms: '2BHK', builtUpArea: '1250', plotSize: '40x50', type: 'Residential', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400', dimensions: '35x36 ft' },
  { id: 4, title: '3BHK Deluxe', bedrooms: '3BHK', builtUpArea: '1650', plotSize: '40x60', type: 'Residential', image: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=400', dimensions: '40x41 ft' },
  { id: 5, title: '3BHK Luxury', bedrooms: '3BHK', builtUpArea: '1850', plotSize: '50x60', type: 'Residential', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400', dimensions: '45x41 ft' },
  { id: 6, title: '4BHK Villa', bedrooms: '4BHK', builtUpArea: '2500', plotSize: '60x80', type: 'Villa', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400', dimensions: '50x50 ft' },
  { id: 7, title: 'Duplex Villa', bedrooms: '4BHK', builtUpArea: '3200', plotSize: '60x90', type: 'Villa', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400', dimensions: '55x58 ft' },
  { id: 8, title: 'Office Space', bedrooms: 'N/A', builtUpArea: '2000', plotSize: '50x70', type: 'Commercial', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400', dimensions: '45x45 ft' },
  { id: 9, title: 'Retail Space', bedrooms: 'N/A', builtUpArea: '1500', plotSize: '40x60', type: 'Commercial', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400', dimensions: '40x38 ft' },
  { id: 10, title: '1BHK Studio', bedrooms: '1BHK', builtUpArea: '550', plotSize: '25x30', type: 'Residential', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400', dimensions: '22x25 ft' },
  { id: 11, title: '2BHK Economy', bedrooms: '2BHK', builtUpArea: '950', plotSize: '30x40', type: 'Residential', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400', dimensions: '28x34 ft' },
  { id: 12, title: 'Penthouse', bedrooms: '4BHK', builtUpArea: '3500', plotSize: '70x90', type: 'Villa', image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400', dimensions: '60x58 ft' },
];

export default function FloorPlans() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBedrooms, setSelectedBedrooms] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [areaRange, setAreaRange] = useState('All');

  const bedroomOptions = ['All', '1BHK', '2BHK', '3BHK', '4BHK', 'N/A'];
  const typeOptions = ['All', 'Residential', 'Commercial', 'Villa'];
  const areaOptions = ['All', 'Below 1000', '1000-1500', '1500-2500', 'Above 2500'];

  const filteredPlans = floorPlansData.filter(plan => {
    const matchesSearch = plan.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBedrooms = selectedBedrooms === 'All' || plan.bedrooms === selectedBedrooms;
    const matchesType = selectedType === 'All' || plan.type === selectedType;

    let matchesArea = true;
    if (areaRange !== 'All') {
      const area = parseInt(plan.builtUpArea);
      if (areaRange === 'Below 1000') matchesArea = area < 1000;
      else if (areaRange === '1000-1500') matchesArea = area >= 1000 && area <= 1500;
      else if (areaRange === '1500-2500') matchesArea = area >= 1500 && area <= 2500;
      else if (areaRange === 'Above 2500') matchesArea = area > 2500;
    }

    return matchesSearch && matchesBedrooms && matchesType && matchesArea;
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-mystic-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=1920"
            alt="Floor Plans"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container-custom py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Floor <span className="text-red-inferno">Plans</span>
            </h1>
            <p className="text-xl text-gray-200">
              Explore our diverse range of floor plans for every need and budget
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="bg-gray-50 py-8 sticky top-20 z-40 shadow-md">
        <div className="container-custom">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Search */}
              <div className="relative lg:col-span-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search floor plans..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-inferno focus:border-transparent"
                />
              </div>

              {/* Bedrooms Filter */}
              <select
                value={selectedBedrooms}
                onChange={(e) => setSelectedBedrooms(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-inferno focus:border-transparent"
              >
                {bedroomOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>

              {/* Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-inferno focus:border-transparent"
              >
                {typeOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>

              {/* Area Range Filter */}
              <select
                value={areaRange}
                onChange={(e) => setAreaRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-inferno focus:border-transparent"
              >
                {areaOptions.map(option => (
                  <option key={option} value={option}>
                    {option === 'All' ? 'All Areas' : `${option} sqft`}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredPlans.length} of {floorPlansData.length} floor plans
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plans Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredPlans.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No floor plans match your criteria. Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden group">
                    <img
                      src={plan.image}
                      alt={plan.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                      <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                        <Eye className="text-mystic-navy" size={20} />
                      </button>
                      <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                        <Download className="text-mystic-navy" size={20} />
                      </button>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-red-inferno text-white text-xs font-semibold rounded-full">
                        {plan.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-heading font-semibold text-mystic-navy mb-3">
                      {plan.title}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Bedrooms:</span>
                        <span className="font-semibold text-mystic-navy">{plan.bedrooms}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Built-up Area:</span>
                        <span className="font-semibold text-mystic-navy">{plan.builtUpArea} sqft</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Dimensions:</span>
                        <span className="font-semibold text-mystic-navy">{plan.dimensions}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Plot Size:</span>
                        <span className="font-semibold text-mystic-navy">{plan.plotSize}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <button className="flex-1 px-4 py-2 bg-mystic-navy text-white text-sm font-semibold rounded-lg hover:bg-mystic-navy/90 transition-colors">
                        View Details
                      </button>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                        <Download size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-mystic-navy text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              We can create custom floor plans tailored to your specific requirements
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-red-inferno text-white font-semibold rounded-lg hover:bg-red-inferno/90 transition-colors"
            >
              Request Custom Plan
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
