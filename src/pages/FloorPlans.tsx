import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, ZoomIn, Download } from 'lucide-react';

interface Render {
  id: number;
  url: string;
  title: string;
}

const renders: Render[] = [
  { id: 1, url: '/project-photos/3D renders/Render 001.webp', title: '3D Render 001' },
  { id: 2, url: '/project-photos/3D renders/Render 002.webp', title: '3D Render 002' },
  { id: 3, url: '/project-photos/3D renders/Render 003.webp', title: '3D Render 003' },
  { id: 4, url: '/project-photos/3D renders/Render 004.webp', title: '3D Render 004' },
  { id: 5, url: '/project-photos/3D renders/Render 005.webp', title: '3D Render 005' },
  { id: 6, url: '/project-photos/3D renders/Render 006.webp', title: '3D Render 006' },
  { id: 7, url: '/project-photos/3D renders/Render 007.webp', title: '3D Render 007' },
  { id: 8, url: '/project-photos/3D renders/Render 008.webp', title: '3D Render 008' },
  { id: 9, url: '/project-photos/3D renders/Render 009.webp', title: '3D Render 009' },
  { id: 10, url: '/project-photos/3D renders/Render 010.webp', title: '3D Render 010' },
  { id: 11, url: '/project-photos/3D renders/Render 011.webp', title: '3D Render 011' },
  { id: 12, url: '/project-photos/3D renders/Render 012.webp', title: '3D Render 012' },
  { id: 13, url: '/project-photos/3D renders/Render 013.webp', title: '3D Render 013' },
  { id: 14, url: '/project-photos/3D renders/Render 014.webp', title: '3D Render 014' },
  { id: 15, url: '/project-photos/3D renders/Render 015.webp', title: '3D Render 015' },
  { id: 16, url: '/project-photos/3D renders/Render 016.webp', title: '3D Render 016' },
  { id: 17, url: '/project-photos/3D renders/Render 017.webp', title: '3D Render 017' },
  { id: 18, url: '/project-photos/3D renders/Render 018.webp', title: '3D Render 018' },
  { id: 19, url: '/project-photos/3D renders/Render 019.webp', title: '3D Render 019' },
  { id: 20, url: '/project-photos/3D renders/Render 020.webp', title: '3D Render 020' },
  { id: 21, url: '/project-photos/3D renders/Render 021.webp', title: '3D Render 021' },
  { id: 22, url: '/project-photos/3D renders/Render 022.webp', title: '3D Render 022' },
  { id: 23, url: '/project-photos/3D renders/Render 023.webp', title: '3D Render 023' },
  { id: 24, url: '/project-photos/3D renders/Render 024.webp', title: '3D Render 024' },
  { id: 25, url: '/project-photos/3D renders/Render 025.webp', title: '3D Render 025' },
  { id: 26, url: '/project-photos/3D renders/Render 026.webp', title: '3D Render 026' },
];

export default function FloorPlans() {
  useEffect(() => {
    document.title = '3D Renders - South India Civil Contractors';
  }, []);

  const [selectedRender, setSelectedRender] = useState<Render | null>(null);

  const handleDownload = (e: React.MouseEvent, render: Render) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = render.url;
    link.download = render.title.replace(/\s+/g, '-') + '.webp';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-mystic-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/project-photos/3D renders/Render 001.webp"
            alt="3D Renders"
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
              3D <span className="text-cream">Renders</span>
            </h1>
            <p className="text-xl text-gray-200">
              Explore our photorealistic 3D architectural renders and visualizations
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3D Renders Masonry Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
            {renders.map((render, index) => (
              <motion.div
                key={render.id}
                initial={{ opacity: 0, y: 20 }}
                {...(index === 0 
                  ? { animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 } }
                  : { whileInView: { opacity: 1, y: 0 }, transition: { delay: index * 0.05 }, viewport: { once: true } }
                )}
                className="group relative mb-4 break-inside-avoid overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
                onClick={() => setSelectedRender(render)}
              >
                <img
                  src={render.url}
                  alt={render.title}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedRender(render);
                    }}
                    className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors backdrop-blur-sm"
                    title="View full size"
                  >
                    <ZoomIn className="text-white" size={24} />
                  </button>
                  <button
                    onClick={(e) => handleDownload(e, render)}
                    className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors backdrop-blur-sm"
                    title="Download image"
                  >
                    <Download className="text-white" size={24} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedRender && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedRender(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            onClick={() => setSelectedRender(null)}
          >
            <X className="text-white" size={24} />
          </button>
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedRender.url}
              alt={selectedRender.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="mt-4 flex justify-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload(e, selectedRender);
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors backdrop-blur-sm"
              >
                <Download size={20} />
                Download Image
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-mystic-navy text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[36px] md:text-[3.6rem] font-heading font-bold mb-4">
              Need Custom 3D Renders?
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              We can create custom 3D visualizations tailored to your specific project requirements
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-red-inferno text-white font-semibold rounded-lg hover:bg-red-inferno/90 transition-colors"
            >
              Request Custom Render
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
