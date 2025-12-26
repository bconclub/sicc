import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Download,
  CheckCircle,
  Building2,
  Wrench,
  HardHat,
  FileText,
  Award,
  Shield,
  DollarSign,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Play,
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import DownloadForm from '../components/DownloadForm';

const laborContractServices = [
  'Earth Work for Footing, Foundation & Sump tank',
  'Back filling soil till plinth level',
  'Footing and foundation work',
  'Masonry work',
  'Bar bending works',
  'Centering works',
  'Ground floor flooring concrete works',
  'Sump Tank work',
  'Column centering box work',
  'Wall Partition Work',
  'Concrete work for columns lintel loft and chejjas',
  'Staircase work',
  'Plastering work for internal and external walls',
  'Scaffolding for plastering work',
  'Plumbing works',
  'Electric works',
  'Floor and wall tiles work',
  'Doors and windows work',
  'Raling, Grills, and gate work',
  'Painting works for internal and external works'
];

const galleryItems = [
  { type: 'image', url: '/project-photos/residential/Residential 001.webp' },
  { type: 'video', vimeoId: '1141959737', thumbnail: 'https://vumbnail.com/1141959737.jpg' },
  { type: 'image', url: '/project-photos/residential/Residential 002.webp' },
  { type: 'video', vimeoId: '1141962178', thumbnail: 'https://vumbnail.com/1141962178.jpg' },
  { type: 'image', url: '/project-photos/residential/Residential 003.webp' },
  { type: 'image', url: '/project-photos/commercial/Commercial 001.jpg' },
  { type: 'video', vimeoId: '1141962617', thumbnail: 'https://vumbnail.com/1141962617.jpg' },
  { type: 'image', url: '/project-photos/3D renders/Render 001.webp' },
  { type: 'image', url: '/project-photos/residential/Residential 004.webp' },
  { type: 'video', vimeoId: '1141978917', thumbnail: 'https://vumbnail.com/1141978917.jpg' },
  { type: 'image', url: '/project-photos/under-construction/Under Construction 002.webp' },
  { type: 'image', url: '/project-photos/residential/Residential 005.webp' },
  { type: 'image', url: '/project-photos/residential/Residential 006.webp' },
  { type: 'image', url: '/project-photos/commercial/commercial 002.jpg' },
  { type: 'video', vimeoId: '1141979398', thumbnail: 'https://vumbnail.com/1141979398.jpg' },
  { type: 'image', url: '/project-photos/3D renders/Render 002.webp' },
  { type: 'image', url: '/project-photos/residential/Residential 007.webp' },
  { type: 'image', url: '/project-photos/under-construction/Under Construction 003.webp' },
  { type: 'video', vimeoId: '1141980834', thumbnail: 'https://vumbnail.com/1141980834.jpg' },
  { type: 'image', url: '/project-photos/3D renders/Render 003.webp' },
  { type: 'image', url: '/project-photos/commercial/commercial 003.jpg' },
  { type: 'image', url: '/project-photos/residential/Residential 009.webp' },
  { type: 'image', url: '/project-photos/under-construction/Under Construction 004.webp' },
  { type: 'video', vimeoId: '1145561752', thumbnail: 'https://vumbnail.com/1145561752.jpg' },
];

export default function CivilLaborPackage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Civil Labor Contract Package - South India Civil Contractors';
  }, []);

  const services = [
    {
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
      title: 'Apartment Project',
      description: 'Comprehensive civil contracting services for residential apartment complexes, from foundation to finishing.',
      features: ['Multi-story construction', 'Modern amenities installation', 'Quality assurance']
    },
    {
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
      title: 'Bungalow Building',
      description: 'Specialized services for luxury bungalow construction with attention to architectural details.',
      features: ['Custom design execution', 'Premium materials', 'Landscape integration']
    },
    {
      image: '/Commercial card.webp',
      title: 'Commercial Building',
      description: 'Professional commercial construction services for offices, retail spaces, and business complexes.',
      features: ['Code compliance', 'Modern infrastructure', 'Energy efficiency']
    },
    {
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop',
      title: 'College Building',
      description: 'Educational facility construction with focus on functionality and student safety.',
      features: ['Large-scale projects', 'Safety standards', 'Sustainable design']
    },
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
      title: 'High Rise Project',
      description: 'Expert high-rise construction services with advanced engineering and safety protocols.',
      features: ['Structural engineering', 'Advanced safety systems', 'Vertical construction']
    },
    {
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop',
      title: 'Hospital Project',
      description: 'Healthcare facility construction meeting stringent medical and safety requirements.',
      features: ['Medical standards', 'Specialized infrastructure', 'Infection control']
    },
    {
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
      title: 'Hotel Project',
      description: 'Hospitality construction services for hotels and resorts with premium finishes.',
      features: ['Guest comfort focus', 'Luxury finishes', 'Amenity installation']
    },
    {
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
      title: 'PG Building',
      description: 'Paying guest accommodation construction optimized for comfort and efficiency.',
      features: ['Space optimization', 'Multiple units', 'Cost-effective design']
    },
    {
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop',
      title: 'Renovation Work',
      description: 'Expert renovation and remodeling services for existing structures.',
      features: ['Minimal disruption', 'Modern upgrades', 'Structural repairs']
    },
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
      title: 'Residential Building',
      description: 'Complete residential construction services for homes and housing projects.',
      features: ['Custom homes', 'Quality construction', 'Timely delivery']
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
      title: 'Villa Building',
      description: 'Luxury villa construction with premium materials and exclusive designs.',
      features: ['Luxury finishes', 'Landscape design', 'Smart home integration']
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextService = () => {
    setCurrentServiceIndex((prev) => {
      const step = isMobile ? 1 : 3;
      const next = prev + step;
      if (next >= services.length) {
        return isMobile ? 0 : Math.max(0, services.length - 3);
      }
      return next;
    });
  };

  const prevService = () => {
    setCurrentServiceIndex((prev) => {
      const step = isMobile ? 1 : 3;
      const next = prev - step;
      if (next < 0) {
        return isMobile ? services.length - 1 : 0;
      }
      return next;
    });
  };

  // Get visible services (3 for desktop, 1 for mobile)
  const getVisibleServices = () => {
    if (isMobile) {
      return [services[currentServiceIndex]];
    }
    // Desktop: show 3 cards
    const visible = [];
    const maxIndex = Math.min(currentServiceIndex + 3, services.length);
    for (let i = currentServiceIndex; i < maxIndex; i++) {
      visible.push(services[i]);
    }
    // If we're near the end, show the last 3
    if (visible.length < 3 && services.length >= 3) {
      return services.slice(-3);
    }
    return visible;
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const serviceCategories = [
    {
      icon: HardHat,
      title: 'Foundation & Structure',
      services: [
        'Earth Work & Foundation',
        'Masonry & Bar Bending',
        'Concrete & Centering',
        'Column & Beam Work'
      ]
    },
    {
      icon: Wrench,
      title: 'Finishing Works',
      services: [
        'Plastering & Tiles',
        'Plumbing & Electrical',
        'Painting & Fittings',
        'Doors & Windows'
      ]
    },
    {
      icon: Building2,
      title: 'Complete Coverage',
      services: [
        '20 Services Included',
        'Quality Assurance',
        'Timely Completion',
        'Skilled Workforce'
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: '20-Point Coverage',
      description: 'Comprehensive service coverage from foundation to finishing',
    },
    {
      icon: FileText,
      title: 'Skilled Workforce',
      description: 'Experienced and trained professionals for quality work',
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Transparent pricing at ₹999 per sq ft with no hidden costs',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Guaranteed quality standards and timely project completion',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 text-white overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 opacity-10 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920"
            alt="Construction Site"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container-custom pt-24 md:pt-40 pb-16 w-full z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-center mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 text-white">
              Civil Labor Contract Package
            </h1>
            <div className="text-5xl md:text-7xl font-heading font-black mb-4 text-orange-100">
              ₹999 <span className="text-2xl md:text-4xl text-white">per sq ft</span>
            </div>
            <p className="text-lg md:text-xl mb-8 text-orange-50 max-w-3xl mx-auto">
              Comprehensive civil labor services with skilled workforce and expert craftsmanship
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
              >
                Get Quote
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button
                onClick={() => setIsDownloadModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                <Download className="mr-2" size={20} />
                Download Package Details
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Types Carousel Section */}
      <section className="section-padding bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[36px] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
              Project Types We Undertake
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction services across diverse project types
            </p>
          </motion.div>

          <div className="relative max-w-7xl mx-auto">
            {/* Navigation Buttons - Outside on mobile, outside on desktop */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Left Arrow - Accordion style on mobile, button on desktop */}
              <button
                onClick={prevService}
                className="flex items-center justify-center md:w-12 md:h-12 md:bg-white md:hover:bg-gray-50 md:rounded-full md:shadow-lg transition-all md:hover:scale-110 flex-shrink-0"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-6 h-6 md:w-6 md:h-6 text-mystic-navy" />
              </button>

              {/* Carousel Container */}
              <div className="flex-1 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentServiceIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  >
                    {getVisibleServices().map((service, idx) => (
                      <div
                        key={`${currentServiceIndex}-${idx}`}
                        className="bg-white border-2 border-accent/30 rounded-lg p-6 hover:border-orange-600 hover:shadow-xl transition-all w-full max-w-full md:max-w-none"
                      >
                        <div className="flex flex-col">
                          <div className="mb-4">
                            <img 
                              src={service.image} 
                              alt={service.title}
                              className="w-full h-48 object-cover rounded-lg"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-heading font-semibold text-mystic-navy mb-2">
                              {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                            <ul className="space-y-1">
                              {service.features.map((feature) => (
                                <li key={feature} className="flex items-center text-sm text-gray-500">
                                  <CheckCircle className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Arrow - Accordion style on mobile, button on desktop */}
              <button
                onClick={nextService}
                className="flex items-center justify-center md:w-12 md:h-12 md:bg-white md:hover:bg-gray-50 md:rounded-full md:shadow-lg transition-all md:hover:scale-110 flex-shrink-0"
                aria-label="Next service"
              >
                <ChevronRight className="w-6 h-6 md:w-6 md:h-6 text-mystic-navy" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {services.map((_, index) => {
                // On desktop, highlight if current index is in the visible range
                const isVisible = !isMobile
                  ? index >= currentServiceIndex && index < currentServiceIndex + 3
                  : index === currentServiceIndex;
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentServiceIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      isVisible
                        ? 'bg-orange-600 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to service ${index + 1}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[36px] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
              Comprehensive Service Coverage
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete end-to-end labor solutions for your construction project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {serviceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-orange-600 rounded-full">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-mystic-navy mb-4 text-center">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.services.map((service) => (
                      <li key={service} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section className="section-padding bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[36px] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
              Complete Service List
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              20 comprehensive services included in your labor contract package
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-lg p-6 shadow-lg border-2 border-orange-200 hover:border-orange-400 transition-all max-w-4xl mx-auto"
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div>
                <h3 className="text-2xl font-heading font-semibold mb-2 text-orange-600">View All 20 Services</h3>
                <p className="text-gray-600">Complete list of services included in the package</p>
              </div>
              {isExpanded ? (
                <ChevronUp className="text-orange-600" size={28} />
              ) : (
                <ChevronDown className="text-orange-600" size={28} />
              )}
            </div>
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? 'auto' : 0 }}
              className="overflow-hidden mt-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                {laborContractServices.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -10 }}
                    transition={{ delay: index * 0.02 }}
                    className="flex items-start space-x-2 p-3 bg-orange-50 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[36px] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
              Our Project Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our completed projects showcasing quality craftsmanship and attention to detail
            </p>
          </motion.div>

          {/* Horizontally Scrollable Gallery */}
          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-4 min-w-max">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group relative w-64 md:w-80 aspect-square flex-shrink-0 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
                >
                  {item.type === 'image' ? (
                    <>
                      <img
                        src={item.url}
                        alt={`Project ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onClick={() => setSelectedImage(item.url || null)}
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <ZoomIn className="text-white" size={32} />
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        src={item.thumbnail}
                        alt={`Video ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div 
                        className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer"
                        onClick={() => setPlayingVideoId(item.vimeoId || null)}
                      >
                        <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center bg-black/50 backdrop-blur-sm group-hover:scale-110 transition-transform">
                          <Play className="text-white ml-1" size={28} fill="currentColor" />
                        </div>
                      </div>
                      {playingVideoId === item.vimeoId && (
                        <div className="absolute inset-0 z-10 bg-black">
                          <iframe
                            src={`https://player.vimeo.com/video/${item.vimeoId}?autoplay=1&title=0&byline=0&portrait=0&controls=1`}
                            className="w-full h-full"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="Project Video"
                          />
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setPlayingVideoId(null);
                            }}
                            className="absolute top-2 right-2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors z-20"
                          >
                            <X className="text-white" size={20} />
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[80] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="text-white" size={24} />
            </button>
            <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={selectedImage}
                alt="Gallery Image"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[36px] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
              Why Choose Our Labor Contract Package
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-orange-600 rounded-full">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-mystic-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-[36px] md:text-[3.6rem] font-heading font-bold mb-6">
              Get Started Today
            </h2>
            <div className="text-6xl md:text-8xl font-heading font-black mb-8 text-orange-100">
              ₹999 <span className="text-3xl md:text-5xl text-white">per sq ft</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="flex items-center justify-center text-lg">
                <CheckCircle className="w-6 h-6 mr-2 text-orange-200" />
                <span>20 comprehensive services</span>
              </div>
              <div className="flex items-center justify-center text-lg">
                <CheckCircle className="w-6 h-6 mr-2 text-orange-200" />
                <span>Skilled workforce</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
              >
                Get Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button
                onClick={() => setIsDownloadModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                <Download className="mr-2" size={20} />
                Download Package Details
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
              onClick={handleCloseModal}
            />
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-gradient-to-br from-mother-pearl via-mother-pearl/98 to-mother-pearl/95 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto pointer-events-auto border-2 border-mystic-navy/20 ring-2 ring-red-inferno/10">
                <div className="sticky top-0 bg-gradient-to-r from-mystic-navy to-mystic-navy/95 border-b-2 border-red-inferno/30 px-5 py-4 flex items-center justify-between rounded-t-2xl z-10">
                  <h2 className="text-xl font-heading font-bold text-white">
                    Get Quote - Civil Labor Contract Package
                  </h2>
                  <button
                    onClick={handleCloseModal}
                    className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X className="text-white" size={20} />
                  </button>
                </div>
                
                <div className="p-5 bg-gradient-to-b from-mother-pearl to-mother-pearl/98">
                  <ContactForm 
                    compact={true} 
                    onSuccess={handleCloseModal}
                    source="Civil Labor Package Page"
                    defaultProjectType=""
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
          </AnimatePresence>

      {/* Download Modal */}
      <DownloadForm
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        downloadUrl="/Packages/Civil Contractor Package Webiste.png"
        fileName="Civil Contractor Package Details.png"
        title="Download Civil Contractor Package Details"
      />
    </div>
  );
}

