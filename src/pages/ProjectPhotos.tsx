import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface Photo {
  id: number;
  url: string;
  title: string;
  category: string;
  status: 'Completed' | 'Construction';
}

const photos: Photo[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800', title: 'Luxury Apartment Complex', category: 'Apartment', status: 'Completed' },
  { id: 2, url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800', title: 'High Rise Tower', category: 'High Rise', status: 'Completed' },
  { id: 3, url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800', title: 'Modern Villa', category: 'Villa', status: 'Completed' },
  { id: 4, url: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800', title: 'Commercial Complex', category: 'Commercial', status: 'Completed' },
  { id: 5, url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800', title: 'Construction Progress', category: 'Apartment', status: 'Construction' },
  { id: 6, url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800', title: 'Team at Work', category: 'Commercial', status: 'Construction' },
  { id: 7, url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800', title: 'Hotel Project', category: 'Hotel', status: 'Completed' },
  { id: 8, url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800', title: 'Hospital Building', category: 'Hospital', status: 'Completed' },
  { id: 9, url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800', title: 'Villa Interior', category: 'Villa', status: 'Completed' },
  { id: 10, url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800', title: 'Foundation Work', category: 'Apartment', status: 'Construction' },
  { id: 11, url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800', title: 'Finishing Touches', category: 'Commercial', status: 'Construction' },
  { id: 12, url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800', title: 'College Building', category: 'Educational', status: 'Completed' },
];

const categories = ['All', 'Completed', 'Construction'];

export default function ProjectPhotos() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const filteredPhotos = selectedCategory === 'All'
    ? photos
    : photos.filter(photo => photo.status === selectedCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-mystic-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920"
            alt="Projects"
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
              Project <span className="text-cream">Photos</span>
            </h1>
            <p className="text-xl text-gray-200">
              Explore our portfolio of completed projects across various categories
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 z-40 bg-white shadow-md py-6">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-red-inferno text-white'
                    : 'bg-accent/15 text-gray-700 hover:bg-accent/25'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-4 text-center text-sm text-gray-600">
            Showing {filteredPhotos.length} of {photos.length} photos
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold mb-1">{photo.title}</h3>
                    <span className="text-xs text-gray-300">{photo.category}</span>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <ZoomIn className="text-white" size={32} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <X className="text-white" size={24} />
          </button>
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-heading font-bold text-white mb-2">
                {selectedPhoto.title}
              </h3>
              <span className="text-gray-300">{selectedPhoto.category}</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
