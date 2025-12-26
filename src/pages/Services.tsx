import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  ChevronUp,
  CheckCircle,
  ArrowRight,
  Building2,
  Wrench,
  Zap,
  Paintbrush,
  HardHat,
  X
} from 'lucide-react';
import ContactForm from '../components/ContactForm';

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

export default function Services() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'Services - South India Civil Contractors';
  }, []);

  // Map service title to project type value
  const getProjectTypeFromService = (serviceTitle: string): string => {
    const mapping: { [key: string]: string } = {
      'Apartment Project': 'Apartment',
      'Bungalow Building': 'Bungalow',
      'Commercial Building': 'Commercial',
      'College Building': 'College',
      'High Rise Project': 'High Rise',
      'Hospital Project': 'Hospital',
      'Hotel Project': 'Hotel',
      'PG Building': 'PG',
      'Renovation Work': 'Renovation',
      'Residential Building': 'Residential',
      'Villa Building': 'Villa'
    };
    return mapping[serviceTitle] || '';
  };

  const handleEnquireNow = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-mystic-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920"
            alt="Services"
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
              Our <span className="text-cream">Services</span>
            </h1>
            <p className="text-xl text-gray-200">
              Comprehensive civil contracting services tailored to your project needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-[36px] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
              Civil Contractor Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert construction services across all project types
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group bg-white border-2 border-accent/30 rounded-lg p-6 hover:border-red-inferno hover:shadow-xl transition-all"
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
                    <h3 className="text-lg font-heading font-semibold text-mystic-navy mb-2 group-hover:text-red-inferno transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <ul className="space-y-1 mb-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-red-inferno mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => handleEnquireNow(service.title)}
                      className="w-full mt-4 px-4 py-2 bg-red-inferno text-white font-semibold rounded-lg hover:bg-red-inferno/90 transition-colors flex items-center justify-center"
                    >
                      Enquire Now
                      <ArrowRight className="ml-2" size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Construction Package Section */}
      <section className="section-padding bg-gradient-to-br from-mystic-navy via-red-inferno to-mystic-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"
            alt="Premium Construction"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-cream/30 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 text-cream border border-cream/40">
                Premium Solution
              </div>
              <h2 className="text-[36px] md:text-[3.6rem] font-heading font-bold mb-4 leading-tight">
                Premium Construction Package
              </h2>
              <div className="text-5xl md:text-6xl font-heading font-black mb-6 text-cream leading-tight">
                ₹2,499 <span className="text-2xl md:text-3xl text-white">per sq ft</span>
              </div>
              <p className="text-lg md:text-xl mb-6 text-gray-200 leading-relaxed">
                Comprehensive construction solution with premium materials and expert craftsmanship. 
                Everything you need for your dream home in one complete package.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-200">Premium branded materials only</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-200">Complete end-to-end construction solution</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-200">Transparent pricing with no hidden costs</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleEnquireNow('Premium Construction Package')}
                  className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Get Quote
                  <ArrowRight className="ml-2" size={20} />
                </button>
                <Link
                  to="/premium-package"
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/30"
                >
                  Explore Package Details
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <Building2 className="w-8 h-8 text-accent mb-3" />
                    <h3 className="text-lg font-heading font-semibold mb-3 text-accent">Premium Materials</h3>
                    <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:items-center">
                      <img src="/brand-logos/acc.png" alt="ACC" className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                      <img src="/brand-logos/birlasuper.png" alt="Birla Super" className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                      <img src="/brand-logos/jindalsteel.png" alt="Jindal Steel" className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <Wrench className="w-8 h-8 text-accent mb-3" />
                    <h3 className="text-lg font-heading font-semibold mb-3 text-accent">Branded Fixtures</h3>
                    <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:items-center">
                      <img src="/brand-logos/hindware.png" alt="Hindware" className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                      <img src="/brand-logos/cera.png" alt="Cera" className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                      <img src="/brand-logos/jaguar.png" alt="Jaguar" className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <Zap className="w-8 h-8 text-accent mb-3" />
                    <h3 className="text-lg font-heading font-semibold mb-3 text-accent">Electrical</h3>
                    <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:items-center">
                      <img src="/brand-logos/havels.png" alt="Havells" className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                      <img src="/brand-logos/anchor.png" alt="Anchor" className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <Paintbrush className="w-8 h-8 text-accent mb-3" />
                    <h3 className="text-lg font-heading font-semibold mb-3 text-accent">Painting</h3>
                    <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:items-center">
                      <img src="/brand-logos/asianpaints.png" alt="Asian Paints" className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                      <img src="/brand-logos/berger.png" alt="Berger" className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Civil Labor Contract Package Section */}
      <section className="section-padding bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920"
            alt="Construction Site"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-orange-500/30 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 text-white border border-orange-300/40">
                Labor Solution
              </div>
              <h2 className="text-[36px] md:text-[3.6rem] font-heading font-bold mb-4 leading-tight">
                Civil Labor Contract Package
              </h2>
              <div className="text-5xl md:text-6xl font-heading font-black mb-6 text-orange-100 leading-tight">
                ₹999 <span className="text-2xl md:text-3xl text-white">per sq ft</span>
              </div>
              <p className="text-lg md:text-xl mb-6 text-orange-50 leading-relaxed">
                Comprehensive civil labor services with skilled workforce and expert craftsmanship. 
                Complete end-to-end labor solutions for your construction project.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-orange-200 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-orange-50">20-point comprehensive service coverage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-200 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-orange-50">Skilled and experienced workforce</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-200 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-orange-50">Competitive pricing with no hidden costs</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleEnquireNow('Civil Labor Contract Package')}
                  className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
                >
                  Get a Quote
                  <ArrowRight className="ml-2" size={20} />
                </button>
                <Link
                  to="/civil-labor-package"
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/30"
                >
                  Explore Package Details
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <HardHat className="w-8 h-8 text-orange-600 mb-3" />
                    <h3 className="text-lg font-heading font-semibold mb-3 text-orange-600">Foundation & Structure</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0" />
                        <span>Earth Work & Foundation</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0" />
                        <span>Masonry & Bar Bending</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0" />
                        <span>Concrete & Centering</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <Wrench className="w-8 h-8 text-orange-600 mb-3" />
                    <h3 className="text-lg font-heading font-semibold mb-3 text-orange-600">Finishing Works</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0" />
                        <span>Plastering & Tiles</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0" />
                        <span>Plumbing & Electrical</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0" />
                        <span>Painting & Fittings</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 md:pt-8">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <Building2 className="w-8 h-8 text-orange-600 mb-3" />
                    <h3 className="text-lg font-heading font-semibold mb-3 text-orange-600">Complete Coverage</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0" />
                        <span>20 Services Included</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0" />
                        <span>Quality Assurance</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0" />
                        <span>Timely Completion</span>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-lg p-4 md:p-6 shadow-lg cursor-pointer border-2 border-orange-200 hover:border-orange-400 transition-all w-full"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-heading font-semibold mb-2 text-orange-600">View All Services</h3>
                        <p className="text-sm text-gray-600">20-point comprehensive coverage</p>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="text-orange-600" size={24} />
                      ) : (
                        <ChevronDown className="text-orange-600" size={24} />
                      )}
                    </div>
                    <motion.div
                      initial={false}
                      animate={{ height: isExpanded ? 'auto' : 0 }}
                      className="overflow-hidden mt-4"
                    >
                      <div className="grid grid-cols-1 gap-2 pt-4">
                        {laborContractServices.map((service, index) => (
                          <motion.div
                            key={service}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -10 }}
                            transition={{ delay: index * 0.02 }}
                            className="flex items-start space-x-2 p-2 bg-orange-50 rounded"
                          >
                            <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-xs">{service}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-[36px] md:text-[3.6rem] font-heading font-bold mb-4">
              Ready to Discuss Your Project?
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Contact us today to learn more about our services and get a customized quote
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-red-inferno text-white font-semibold rounded-lg hover:bg-red-inferno/90 transition-colors"
            >
              Contact Us Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
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
                    {selectedService === 'Premium Construction Package' 
                      ? 'Premium Construction Consultation' 
                      : selectedService === 'Civil Labor Contract Package'
                      ? 'Civil Labor Contract Consultation'
                      : `${selectedService} Consultation`}
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
                    source={`Services Page - ${selectedService}`}
                    defaultProjectType={selectedService === 'Premium Construction Package' || selectedService === 'Civil Labor Contract Package' ? '' : getProjectTypeFromService(selectedService)}
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
