import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Play, X } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  duration: string;
  views: string;
  vimeoId?: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: 'SICC Project Video',
    description: 'Watch our construction projects and company overview',
    category: 'Construction Process',
    thumbnail: `https://vumbnail.com/1141959737.jpg`,
    duration: '5:30',
    views: '12.5K',
    vimeoId: '1141959737'
  },
  {
    id: 2,
    title: 'SICC Project Video 2',
    description: 'Watch our construction projects and company overview',
    category: 'Construction Process',
    thumbnail: `https://vumbnail.com/1141962178.jpg`,
    duration: '5:30',
    views: '12.5K',
    vimeoId: '1141962178'
  },
  {
    id: 3,
    title: 'SICC Project Video 3',
    description: 'Watch our construction projects and company overview',
    category: 'Construction Process',
    thumbnail: `https://vumbnail.com/1141962617.jpg`,
    duration: '5:30',
    views: '12.5K',
    vimeoId: '1141962617'
  },
];

export default function ProjectVideos() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

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
              Project <span className="text-cream">Videos</span>
            </h1>
            <p className="text-xl text-gray-200">
              Watch our construction journey through detailed project videos and testimonials
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                {...(index === 0 
                  ? { animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 } }
                  : { whileInView: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, viewport: { once: true } }
                )}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.vimeoId ? `https://vumbnail.com/${video.vimeoId}.jpg` : video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-cream rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="text-cream ml-1" size={28} fill="currentColor" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && selectedVideo.vimeoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="text-white" size={24} />
            </button>
            <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src={`https://player.vimeo.com/video/${selectedVideo.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={selectedVideo.title}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="section-padding bg-mystic-navy text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold mb-4">
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
