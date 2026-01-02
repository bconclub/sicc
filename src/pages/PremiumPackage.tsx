import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Download,
  CheckCircle,
  Building2,
  Wrench,
  Zap,
  Square,
  Paintbrush,
  FileText,
  Award,
  Shield,
  DollarSign,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Play,
} from 'lucide-react';
import QuoteForm from '../components/QuoteForm';
import BrandLogos from '../components/BrandLogos';
import { formatUTMForSubmission } from '../utils/utmTracking';

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

export default function PremiumPackage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [downloadFormData, setDownloadFormData] = useState({
    name: '',
    phone: '',
  });
  const [isDownloadSubmitting, setIsDownloadSubmitting] = useState(false);
  const [isDownloadSubmitted, setIsDownloadSubmitted] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Premium Package - South India Civil Contractors';
  }, []);

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextService();
    }
    if (isRightSwipe) {
      prevService();
    }
  };

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

  const handleCloseDownloadModal = () => {
    setIsDownloadModalOpen(false);
    setIsDownloadSubmitted(false);
    setDownloadFormData({ name: '', phone: '' });
  };

  const handleDownloadFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDownloadFormData({
      ...downloadFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDownloadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!downloadFormData.name.trim() || !downloadFormData.phone.trim()) {
      return;
    }

    setIsDownloadSubmitting(true);

    try {
      // Send form data to webhook
      const formDataToSend = new FormData();
      formDataToSend.append('name', downloadFormData.name);
      formDataToSend.append('phone', downloadFormData.phone);
      formDataToSend.append('source', 'Premium Package Download');
      formDataToSend.append('downloadType', 'Premium Construction Package');

      // Add UTM parameters
      const utmParams = formatUTMForSubmission();
      Object.entries(utmParams).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      // Send to webhook (non-blocking)
      fetch('https://build.goproxe.com/webhook/southindiacivilcontractors', {
        method: 'POST',
        body: formDataToSend
      }).catch(() => {
        // Silently fail if webhook is unavailable
      });

      // Trigger download
      const link = document.createElement('a');
      link.href = '/Packages/SICC Premium Construction Package.png';
      link.download = 'SICC Premium Construction Package.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setIsDownloadSubmitted(true);
      
      // Close modal after 2 seconds
      setTimeout(() => {
        handleCloseDownloadModal();
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still trigger download even if webhook fails
      const link = document.createElement('a');
      link.href = '/Packages/SICC Premium Construction Package.png';
      link.download = 'SICC Premium Construction Package.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsDownloadSubmitted(true);
      setTimeout(() => {
        handleCloseDownloadModal();
      }, 2000);
    } finally {
      setIsDownloadSubmitting(false);
    }
  };

  const foundationCards = [
    {
      icon: Building2,
      title: 'Architectural Design',
      description: 'Professional architectural planning and design services',
    },
    {
      icon: Building2,
      title: 'ACC Birla Super Cement',
      description: 'Premium grade cement for superior strength',
    },
    {
      icon: Building2,
      title: 'Jindal/Turbo Steel',
      description: 'High-quality TMT bars for structural integrity',
    },
    {
      icon: Building2,
      title: 'Quality Sand',
      description: 'M sand and P sand for optimal construction quality',
    },
  ];

  const materialBreakdown = [
    { label: 'Structure', percentage: 35, color: '#4C2828' },
    { label: 'Plumbing', percentage: 15, color: '#3B82F6' },
    { label: 'Electrical', percentage: 12, color: '#EAB308' },
    { label: 'Fixtures', percentage: 23, color: '#22C55E' },
    { label: 'Finishes', percentage: 15, color: '#A855F7' },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Premium Brands Only',
      description: 'We use only the finest branded materials for lasting quality',
    },
    {
      icon: FileText,
      title: 'Comprehensive Coverage',
      description: 'Complete end-to-end construction solution in one package',
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden costs - clear pricing at ₹2,499 per sq ft',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Guaranteed quality standards with comprehensive warranty',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-mystic-navy text-white overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 opacity-30 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"
            alt="Premium Construction"
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
            <h1 className="text-[2.7rem] md:text-[4.5rem] font-heading font-bold mb-4 text-white">
              Premium Construction Package
            </h1>
            <div className="text-5xl md:text-7xl font-heading font-black mb-4 text-cream">
              ₹2,499 <span className="text-2xl md:text-4xl text-gray-300">per sq ft</span>
            </div>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Comprehensive construction solution with premium materials and expert craftsmanship
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 bg-red-inferno text-white font-semibold rounded-lg hover:bg-red-inferno/90 transition-colors"
              >
                Get Quote
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button
                onClick={() => setIsDownloadModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-mystic-navy transition-colors"
              >
                <Download className="mr-2" size={20} />
                Download Package Details
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Types Carousel Section */}
      <section className="section-padding bg-gradient-to-br from-mother-pearl to-gray-50">
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
              <div 
                className="flex-1 relative overflow-hidden touch-pan-y"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
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
                        className="bg-white border-2 border-accent/30 rounded-lg p-6 hover:border-red-inferno hover:shadow-xl transition-all w-full max-w-full md:max-w-none"
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
                                  <CheckCircle className="w-4 h-4 text-red-inferno mr-2 flex-shrink-0" />
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
                        ? 'bg-red-inferno w-8'
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

      {/* Brand Logos Section */}
      <BrandLogos 
        title="Premium Brands We Use"
        subtitle="Only the finest branded materials for lasting quality and durability"
        backgroundColor="bg-white"
      />

      {/* Foundation & Structure Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-[36px] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
              Foundation & Structure
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built on a strong foundation with premium materials for lasting durability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {foundationCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-mother-pearl rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-red-inferno rounded-full">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-mystic-navy mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plumbing & Sanitary Section */}
      <section className="section-padding bg-mother-pearl">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[36px] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-8">
                Plumbing & Sanitary
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Wrench className="w-6 h-6 text-red-inferno" />
                    <h3 className="text-xl font-heading font-semibold text-mystic-navy">
                      Premium Plumbing
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-3">Astral/Ashirawad pipes and fittings</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-inferno mr-2 mt-0.5 flex-shrink-0" />
                      <span>Durable pipe systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-inferno mr-2 mt-0.5 flex-shrink-0" />
                      <span>Leak-proof fittings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-inferno mr-2 mt-0.5 flex-shrink-0" />
                      <span>Long-lasting quality</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Wrench className="w-6 h-6 text-red-inferno" />
                    <h3 className="text-xl font-heading font-semibold text-mystic-navy">
                      Sanitary Fittings
                    </h3>
                  </div>
                  <p className="text-gray-600">Premium brands: Hindware & Cera</p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Wrench className="w-6 h-6 text-red-inferno" />
                    <h3 className="text-xl font-heading font-semibold text-mystic-navy">
                      Bathroom Fittings
                    </h3>
                  </div>
                  <p className="text-gray-600">Jaguar & Parryware premium fixtures</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"
                alt="Plumbing"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Electrical Excellence Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[36px] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
              Electrical Excellence
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-8"
            >
              <Zap className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-2xl font-heading font-semibold text-mystic-navy mb-4">
                Havells & V-Guard Wires
              </h3>
              <p className="text-gray-600">
                Premium electrical wires ensuring safety and durability for all electrical installations
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8"
            >
              <Zap className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-heading font-semibold text-mystic-navy mb-4">
                GM or Anchor Switches
              </h3>
              <p className="text-gray-600">
                High-quality switches and sockets for reliable electrical connectivity
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doors & Windows Section */}
      <section className="section-padding bg-mother-pearl">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[36px] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
              Doors & Windows
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                number: '01',
                title: 'Premium Door Frames',
                description: 'Teak/Sal wood frames for durability and elegance',
              },
              {
                number: '02',
                title: 'Ready-Made Panel Doors',
                description: 'High-quality panel doors with premium finish',
              },
              {
                number: '03',
                title: 'Godrej Locks & Fittings',
                description: 'Secure and reliable locking systems',
              },
              {
                number: '04',
                title: '3-Track UPVC Windows',
                description: 'Modern UPVC windows for energy efficiency',
              },
            ].map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 flex gap-4 items-start hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl font-heading font-black text-red-inferno flex-shrink-0">
                  {item.number}
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-mystic-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flooring & Finishes Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[36px] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
              Flooring & Finishes
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Square,
                title: 'Premium Flooring',
                description: 'Kajaria/Somany premium tiles for elegant floors',
              },
              {
                icon: Square,
                title: 'Staircase Excellence',
                description: '20mm granite steps with premium finish',
              },
              {
                icon: Shield,
                title: 'Safety Features',
                description: 'Stainless steel railings for safety and aesthetics',
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-mother-pearl rounded-lg p-6 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-red-inferno rounded-full">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-mystic-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Painting Section */}
      <section className="section-padding bg-mother-pearl">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[36px] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
              Premium Painting
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                brand: 'Asian Paints',
                description: 'Premium interior and exterior paints',
              },
              {
                brand: 'Birla Opus',
                description: 'High-quality paint solutions',
              },
            ].map((item, index) => (
              <motion.div
                key={item.brand}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 text-center shadow-lg"
              >
                <Paintbrush className="w-12 h-12 text-red-inferno mx-auto mb-4" />
                <h3 className="text-2xl font-heading font-bold text-mystic-navy mb-2">
                  {item.brand}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 mt-8 italic"
          >
            Premium quality paints for lasting beauty and protection
          </motion.p>
        </div>
      </section>

      {/* Material Breakdown Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[36px] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
              Material Breakdown
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive allocation of materials in your premium construction package
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {materialBreakdown.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <svg className="transform -rotate-90 w-32 h-32">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="#e5e7eb"
                        strokeWidth="12"
                        fill="none"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke={item.color}
                        strokeWidth="12"
                        fill="none"
                        strokeDasharray={`${item.percentage * 3.516} 351.6`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-heading font-bold text-mystic-navy">
                        {item.percentage}%
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-mystic-navy">
                    {item.label}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="section-padding bg-mother-pearl">
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
              Explore our completed projects showcasing premium quality craftsmanship and attention to detail
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
      <section className="section-padding bg-mother-pearl">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[36px] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
              Why Choose Our Premium Package
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
                  className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-red-inferno rounded-full">
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
      <section className="section-padding bg-gradient-to-br from-mystic-navy to-red-inferno text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-[36px] md:text-[3.6rem] font-heading font-bold mb-6">
              Build Your Dream Home
            </h2>
            <div className="text-6xl md:text-8xl font-heading font-black mb-8 text-cream">
              ₹2,499 <span className="text-3xl md:text-5xl text-white">per sq ft</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="flex items-center justify-center text-lg">
                <CheckCircle className="w-6 h-6 mr-2 text-green-400" />
                <span>Premium materials & brands</span>
              </div>
              <div className="flex items-center justify-center text-lg">
                <CheckCircle className="w-6 h-6 mr-2 text-green-400" />
                <span>Expert craftsmanship</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 bg-red-inferno text-white font-semibold rounded-lg hover:bg-red-inferno/90 transition-colors"
              >
                Get Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button
                onClick={() => setIsDownloadModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-mystic-navy font-semibold rounded-lg hover:bg-gray-100 transition-colors"
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
                    Get Quote - Premium Construction Package
                  </h2>
                  <button
                    onClick={handleCloseModal}
                    className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X className="text-white" size={20} />
                  </button>
                </div>
                
                <div className="p-5 bg-gradient-to-b from-mother-pearl to-mother-pearl/98">
                  <QuoteForm 
                    onSuccess={handleCloseModal}
                    source="Premium Package Page"
                    defaultProjectType="Premium Construction Package"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Download Form Modal */}
      <AnimatePresence>
        {isDownloadModalOpen && (
          <>
            {/* Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
              onClick={handleCloseDownloadModal}
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
                    Download Premium Construction Package Details
                  </h2>
                  <button
                    onClick={handleCloseDownloadModal}
                    disabled={isDownloadSubmitting}
                    className="p-1.5 hover:bg-white/20 rounded-full transition-colors disabled:opacity-50"
                  >
                    <X className="text-white" size={20} />
                  </button>
                </div>
                
                <div className="p-5 bg-gradient-to-b from-mother-pearl to-mother-pearl/98">
                  {isDownloadSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-heading font-bold text-mystic-navy mb-2">
                        Download Started!
                      </h3>
                      <p className="text-gray-600">
                        Your download should begin shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleDownloadSubmit} className="space-y-4">
                      <p className="text-gray-700 mb-4 text-center">
                        Please provide your details to download the package
                      </p>
                      
                      <div>
                        <label htmlFor="download-name" className="block text-sm font-semibold text-mystic-navy mb-2">
                          Name <span className="text-red-inferno">*</span>
                        </label>
                        <input
                          type="text"
                          id="download-name"
                          name="name"
                          value={downloadFormData.name}
                          onChange={handleDownloadFormChange}
                          required
                          className="w-full px-4 py-3 bg-white border-2 border-mystic-navy/20 rounded-lg focus:ring-2 focus:ring-red-inferno focus:border-red-inferno focus:bg-white text-mystic-navy placeholder:text-gray-500"
                          placeholder="Enter your name"
                          disabled={isDownloadSubmitting}
                        />
                      </div>

                      <div>
                        <label htmlFor="download-phone" className="block text-sm font-semibold text-mystic-navy mb-2">
                          Phone Number <span className="text-red-inferno">*</span>
                        </label>
                        <input
                          type="tel"
                          id="download-phone"
                          name="phone"
                          value={downloadFormData.phone}
                          onChange={handleDownloadFormChange}
                          required
                          className="w-full px-4 py-3 bg-white border-2 border-mystic-navy/20 rounded-lg focus:ring-2 focus:ring-red-inferno focus:border-red-inferno focus:bg-white text-mystic-navy placeholder:text-gray-500"
                          placeholder="+91 XXXXX XXXXX"
                          disabled={isDownloadSubmitting}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isDownloadSubmitting || !downloadFormData.name.trim() || !downloadFormData.phone.trim()}
                        className="w-full flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors bg-red-inferno text-white hover:bg-red-inferno/90 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isDownloadSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <Download className="mr-2" size={20} />
                            Download Package Details
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
