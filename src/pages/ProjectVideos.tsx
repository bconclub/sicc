import { motion } from 'framer-motion';
import { useState } from 'react';
import { Play, Clock, Eye } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  duration: string;
  views: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: 'High Rise Construction Time-lapse',
    description: 'Watch the complete construction of our 20-story luxury apartment tower',
    category: 'Construction Process',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    duration: '5:30',
    views: '12.5K'
  },
  {
    id: 2,
    title: 'Luxury Villa Project Walkthrough',
    description: 'Complete walkthrough of our premium villa project in Bangalore',
    category: 'Completed Projects',
    thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    duration: '8:15',
    views: '8.2K'
  },
  {
    id: 3,
    title: 'Client Testimonial - Residential Project',
    description: 'Hear from our satisfied client about their dream home',
    category: 'Client Testimonials',
    thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800',
    duration: '3:45',
    views: '5.6K'
  },
  {
    id: 4,
    title: 'Commercial Complex Construction',
    description: 'Behind the scenes of our latest commercial project',
    category: 'Construction Process',
    thumbnail: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800',
    duration: '6:20',
    views: '9.1K'
  },
  {
    id: 5,
    title: 'Modern Foundation Techniques',
    description: 'Learn about our advanced foundation laying methods',
    category: 'Construction Process',
    thumbnail: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    duration: '4:50',
    views: '7.3K'
  },
  {
    id: 6,
    title: 'Hospital Building Project',
    description: 'Complete overview of our multi-specialty hospital project',
    category: 'Completed Projects',
    thumbnail: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800',
    duration: '7:10',
    views: '6.8K'
  },
  {
    id: 7,
    title: 'Client Success Story - Commercial',
    description: 'Business owner shares experience with SICC',
    category: 'Client Testimonials',
    thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
    duration: '4:30',
    views: '4.9K'
  },
  {
    id: 8,
    title: 'Hotel Construction Journey',
    description: 'From groundbreaking to grand opening',
    category: 'Completed Projects',
    thumbnail: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    duration: '9:00',
    views: '11.2K'
  },
  {
    id: 9,
    title: 'Safety Protocols on Site',
    description: 'Our commitment to worker safety and site management',
    category: 'Construction Process',
    thumbnail: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
    duration: '5:15',
    views: '6.4K'
  },
];

const categories = ['All', 'Construction Process', 'Completed Projects', 'Client Testimonials'];

export default function ProjectVideos() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredVideos = selectedCategory === 'All'
    ? videos
    : videos.filter(video => video.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-mystic-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1920"
            alt="Videos"
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
              Project <span className="text-red-inferno">Videos</span>
            </h1>
            <p className="text-xl text-gray-200">
              Watch our construction journey through detailed project videos and testimonials
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
            Showing {filteredVideos.length} of {videos.length} videos
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-inferno rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="text-white ml-1" size={28} fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-white text-xs font-semibold flex items-center">
                    <Clock size={12} className="mr-1" />
                    {video.duration}
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-red-inferno text-white text-xs font-semibold rounded-full">
                      {video.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-heading font-semibold text-mystic-navy mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Eye size={16} className="mr-1" />
                    <span>{video.views} views</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="section-padding bg-accent/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-mystic-navy mb-4">
              Featured Project
            </h2>
            <p className="text-gray-600">
              Watch our most recent and impressive construction project
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200"
                alt="Featured"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="w-24 h-24 bg-red-inferno rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <Play className="text-white ml-2" size={40} fill="white" />
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-heading font-bold text-mystic-navy mb-2">
                Our Latest High-Rise Project - Complete Journey
              </h3>
              <p className="text-gray-600">
                Follow the complete construction process of our 25-story luxury residential tower
              </p>
            </div>
          </div>
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
              Want to See Your Project Here?
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Let's discuss your construction needs and bring your vision to life
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-red-inferno text-white font-semibold rounded-lg hover:bg-red-inferno/90 transition-colors"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
