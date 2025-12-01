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
  // Residential Projects
  { id: 1, url: '/project-photos/residential/Residential 001.webp', title: 'Residential Project 001', category: 'Residential', status: 'Completed' },
  { id: 3, url: '/project-photos/residential/Residential 003.webp', title: 'Residential Project 003', category: 'Residential', status: 'Completed' },
  { id: 4, url: '/project-photos/residential/Residential 004.webp', title: 'Residential Project 004', category: 'Residential', status: 'Completed' },
  { id: 5, url: '/project-photos/residential/Residential 005.webp', title: 'Residential Project 005', category: 'Residential', status: 'Completed' },
  { id: 6, url: '/project-photos/residential/Residential 006.webp', title: 'Residential Project 006', category: 'Residential', status: 'Completed' },
  { id: 7, url: '/project-photos/residential/Residential 007.webp', title: 'Residential Project 007', category: 'Residential', status: 'Completed' },
  { id: 2, url: '/project-photos/residential/Residential 002.webp', title: 'Residential Project 002', category: 'Residential', status: 'Completed' },
  { id: 8, url: '/project-photos/residential/Residential 008.jpg', title: 'Residential Project 008', category: 'Residential', status: 'Completed' },
  { id: 9, url: '/project-photos/residential/Residential 009.webp', title: 'Residential Project 009', category: 'Residential', status: 'Completed' },
  { id: 10, url: '/project-photos/residential/Residential 010.webp', title: 'Residential Project 010', category: 'Residential', status: 'Completed' },
  { id: 11, url: '/project-photos/residential/Residential 011.webp', title: 'Residential Project 011', category: 'Residential', status: 'Completed' },
  { id: 12, url: '/project-photos/residential/Residential 012.webp', title: 'Residential Project 012', category: 'Residential', status: 'Completed' },
  // Commercial Projects
  { id: 13, url: '/project-photos/commercial/Commercial 001.jpg', title: 'Commercial Project 001', category: 'Commercial', status: 'Completed' },
  { id: 14, url: '/project-photos/commercial/commercial 002.jpg', title: 'Commercial Project 002', category: 'Commercial', status: 'Completed' },
  { id: 15, url: '/project-photos/commercial/commercial 003.jpg', title: 'Commercial Project 003', category: 'Commercial', status: 'Completed' },
  { id: 16, url: '/project-photos/commercial/commercial 004.jpg', title: 'Commercial Project 004', category: 'Commercial', status: 'Completed' },
  { id: 17, url: '/project-photos/commercial/commercial 005.jpg', title: 'Commercial Project 005', category: 'Commercial', status: 'Completed' },
  { id: 18, url: '/project-photos/commercial/commercial 006.jpg', title: 'Commercial Project 006', category: 'Commercial', status: 'Completed' },
  { id: 19, url: '/project-photos/commercial/commercial 007.jpg', title: 'Commercial Project 007', category: 'Commercial', status: 'Completed' },
  { id: 20, url: '/project-photos/commercial/commercial 008.jpg', title: 'Commercial Project 008', category: 'Commercial', status: 'Completed' },
  { id: 21, url: '/project-photos/commercial/commercial 009.jpg', title: 'Commercial Project 009', category: 'Commercial', status: 'Completed' },
  // Hospital Projects
  { id: 22, url: '/project-photos/commercial/Hospital 001.jpg', title: 'Hospital Project 001', category: 'Hospital', status: 'Completed' },
  // Under Construction Projects
  { id: 23, url: '/project-photos/under-construction/Under Construction 002.webp', title: 'Under Construction 002', category: 'Under Construction', status: 'Construction' },
  { id: 24, url: '/project-photos/under-construction/Under Construction 003.webp', title: 'Under Construction 003', category: 'Under Construction', status: 'Construction' },
  { id: 25, url: '/project-photos/under-construction/Under Construction 004.webp', title: 'Under Construction 004', category: 'Under Construction', status: 'Construction' },
  { id: 26, url: '/project-photos/under-construction/Under Construction 005.webp', title: 'Under Construction 005', category: 'Under Construction', status: 'Construction' },
  { id: 27, url: '/project-photos/under-construction/Under Construction 006.webp', title: 'Under Construction 006', category: 'Under Construction', status: 'Construction' },
  { id: 28, url: '/project-photos/under-construction/Under Construction 007.webp', title: 'Under Construction 007', category: 'Under Construction', status: 'Construction' },
  { id: 29, url: '/project-photos/under-construction/Under Construction 008.webp', title: 'Under Construction 008', category: 'Under Construction', status: 'Construction' },
  { id: 30, url: '/project-photos/under-construction/Under Construction 009.webp', title: 'Under Construction 009', category: 'Under Construction', status: 'Construction' },
  { id: 31, url: '/project-photos/under-construction/Under Construction 010.webp', title: 'Under Construction 010', category: 'Under Construction', status: 'Construction' },
  { id: 32, url: '/project-photos/under-construction/Under Construction 011.webp', title: 'Under Construction 011', category: 'Under Construction', status: 'Construction' },
  { id: 33, url: '/project-photos/under-construction/Under Construction 012.webp', title: 'Under Construction 012', category: 'Under Construction', status: 'Construction' },
  { id: 34, url: '/project-photos/under-construction/Under Construction 013.webp', title: 'Under Construction 013', category: 'Under Construction', status: 'Construction' },
  { id: 35, url: '/project-photos/under-construction/Under Construction 014.webp', title: 'Under Construction 014', category: 'Under Construction', status: 'Construction' },
];

const categories = ['All', 'Residential', 'Commercial', 'Under Construction'];

export default function ProjectPhotos() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const filteredPhotos = selectedCategory === 'All'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-mystic-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/project-photos/residential/Residential 001.webp"
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
          <div className="flex gap-3 overflow-x-auto scrollbar-hide md:flex-wrap md:justify-center pb-2 md:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === category
                    ? 'bg-red-inferno text-white'
                    : 'bg-accent/15 text-gray-700 hover:bg-accent/25'
                }`}
              >
                {category}
              </button>
            ))}
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
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="text-white" size={32} />
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
          </div>
        </motion.div>
      )}
    </div>
  );
}
