import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BrandLogos from '../components/BrandLogos';
import {
  Building2,
  ArrowRight,
  CheckCircle,
  Home as HomeIcon,
  Building,
  Hotel,
  School,
  Hospital,
  Grid3x3,
  Shield,
  X,
  Send,
  Wrench,
  Zap,
  Paintbrush,
  Play,
} from 'lucide-react';
// Option 1: All SOLID icons from Font Awesome
import { FaStar, FaBuilding, FaUsers, FaAward } from 'react-icons/fa';
// Option 2: All STROKE icons from Bootstrap (commented out - uncomment to use)
// import { BsStar, BsBuilding, BsPeople, BsAward } from 'react-icons/bs';
// Option 3: All SOLID icons from Bootstrap (commented out - uncomment to use)
// import { BsStarFill, BsBuildingFill, BsPeopleFill, BsAwardFill } from 'react-icons/bs';

// Currently using: Option 1 - All SOLID Font Awesome icons
const trustIndicators = [
  { label: 'Since 1952', value: '1952', icon: FaStar },
  { label: 'Projects Completed', value: '117', icon: FaBuilding },
  { label: 'Workforce', value: '435+', icon: FaUsers },
  { label: 'Years of Experience', value: '70+', icon: FaAward },
];

const expertiseData = [
  {
    icon: Building2,
    title: 'Comprehensive Project Management',
    description: 'From conception to completion, we manage every aspect of your construction project with precision and care, ensuring timelines and budgets are met without compromise.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800'
  },
  {
    icon: Grid3x3,
    title: 'Diverse Project Portfolio',
    description: 'Our expertise spans across residential complexes, luxury villas, commercial hubs, hospitals, and educational institutions, demonstrating our versatility and adaptability.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'
  },
  {
    icon: Shield,
    title: 'Quality & Safety First',
    description: 'We adhere to the strictest quality standards and safety protocols. Our ISO-certified processes ensure that every structure is built to last and safe for its occupants.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800'
  }
];

const projectTypes = [
  {
    icon: Building,
    title: 'High Rise Projects',
    description: 'Modern high-rise construction with advanced engineering',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500'
  },
  {
    icon: HomeIcon,
    title: 'Residential Buildings',
    description: 'Quality homes built with precision and care',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500'
  },
  {
    icon: Building2,
    title: 'Commercial Buildings',
    description: 'State-of-the-art commercial infrastructure',
    image: '/Commercial card.webp'
  },
  {
    icon: Hotel,
    title: 'Hotel Projects',
    description: 'Luxury hospitality construction services',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500'
  },
  {
    icon: Hospital,
    title: 'Hospital Projects',
    description: 'Healthcare facilities built to highest standards',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500'
  },
  {
    icon: School,
    title: 'Educational Buildings',
    description: 'Schools and colleges for the future',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=500'
  },
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Property Developer',
    content: 'SICC has been our go-to contractor for over 5 years. Their professionalism and quality of work is unmatched.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'Homeowner',
    content: 'They built our dream home exactly as we envisioned. The attention to detail was exceptional.',
    rating: 5
  },
  {
    name: 'Amit Patel',
    role: 'Commercial Client',
    content: 'Timely delivery and excellent quality. Highly recommend SICC for any construction project.',
    rating: 5
  },
];

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % expertiseData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', projectType: '', message: '' });
      setIsConsultationOpen(false);
    }, 3000);
  };

  return (
    <div className={`bg-white ${isConsultationOpen ? 'overflow-hidden' : ''}`}>
      {/* Consultation Popup Modal */}
      <AnimatePresence>
        {isConsultationOpen && (
          <>
            {/* Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsConsultationOpen(false)}
            />
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none"
            >
            <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto">
              <div className="sticky top-0 bg-white border-b border-accent/20 px-5 py-3 flex items-center justify-between">
                <h2 className="text-xl font-heading font-bold text-mystic-navy">
                  Get Free Consultation
                </h2>
                <button
                  onClick={() => setIsConsultationOpen(false)}
                  className="p-1.5 hover:bg-accent/10 rounded-full transition-colors"
                >
                  <X className="text-mystic-navy" size={20} />
                </button>
              </div>
              
              <form onSubmit={handleFormSubmit} className="p-5 space-y-4">
                <div>
                  <label htmlFor="consult-name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="consult-name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-3 py-2 border border-accent/40 rounded-lg focus:ring-2 focus:ring-red-inferno focus:border-transparent text-sm"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="consult-phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="consult-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      className="w-full px-3 py-2 border border-accent/40 rounded-lg focus:ring-2 focus:ring-red-inferno focus:border-transparent text-sm"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="consult-email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="consult-email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full px-3 py-2 border border-accent/40 rounded-lg focus:ring-2 focus:ring-red-inferno focus:border-transparent text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="consult-project" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Project Type *
                  </label>
                  <select
                    id="consult-project"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleFormChange}
                    required
                    className="w-full px-3 py-2 border border-accent/40 rounded-lg focus:ring-2 focus:ring-red-inferno focus:border-transparent text-sm"
                  >
                    <option value="">Select project type</option>
                    <option value="Apartment">Apartment Project</option>
                    <option value="Bungalow">Bungalow Building</option>
                    <option value="Commercial">Commercial Building</option>
                    <option value="College">College Building</option>
                    <option value="High Rise">High Rise Project</option>
                    <option value="Hospital">Hospital Project</option>
                    <option value="Hotel">Hotel Project</option>
                    <option value="PG">PG Building</option>
                    <option value="Renovation">Renovation Work</option>
                    <option value="Residential">Residential Building</option>
                    <option value="Villa">Villa Building</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="consult-message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Project Details *
                  </label>
                  <textarea
                    id="consult-message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 border border-accent/40 rounded-lg focus:ring-2 focus:ring-red-inferno focus:border-transparent resize-none text-sm"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-colors ${
                    isSubmitted
                      ? 'bg-green-500 text-white'
                      : 'bg-red-inferno text-white hover:bg-red-inferno/90'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2" size={18} />
                      Request Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      Submit Request
                    </>
                  )}
                </button>
              </form>
            </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* Hero Section */}
      <section className="relative bg-mystic-navy text-white overflow-hidden min-h-screen flex items-center -mt-20">
        <div className="absolute inset-0 opacity-30 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/Hero Video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative container-custom pt-24 md:pt-40 pb-24 md:pb-32 w-full z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-[2.6rem] md:text-6xl font-heading font-bold mb-6 text-white leading-tight">
              South India's Most Trusted Civil Contractors
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
              End-to-end civil construction solutions across South India. From planning to execution, we deliver projects across all building types and sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-red-inferno text-white font-semibold rounded-lg hover:bg-red-inferno/90 transition-colors"
              >
                Get Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </button>
              <Link
                to="/project-photos"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-mystic-navy transition-colors"
              >
                View Our Projects
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={indicator.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0">
                    <indicator.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-3xl md:text-4xl font-heading font-bold text-white">
                      {indicator.value}
                    </div>
                    <div className="text-sm md:text-base text-gray-300">
                      {indicator.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="section-padding bg-mother-pearl">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-black text-mystic-navy mb-4">
              Building Spaces for Life
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our expertise includes translating architectural and engineering designs into tangible, functional structures.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch min-h-[500px]">
            {/* Left Column: Image Slider */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-auto">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeFeature}
                  src={expertiseData[activeFeature].image}
                  alt={expertiseData[activeFeature].title}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-mystic-navy/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-sm font-semibold tracking-wider uppercase mb-2 text-red-inferno">Featured Expertise</p>
                <h3 className="text-2xl font-heading font-bold">{expertiseData[activeFeature].title}</h3>
              </div>
            </div>

            {/* Right Column: Interactive Content */}
            <div className="flex flex-col justify-center space-y-4">
              {expertiseData.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`cursor-pointer rounded-xl p-6 transition-all duration-300 border-2 ${activeFeature === index
                    ? 'bg-white border-red-inferno shadow-lg scale-105'
                    : 'bg-white/50 border-transparent hover:bg-white hover:shadow'
                    }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 p-3 rounded-lg transition-colors ${activeFeature === index ? 'bg-red-inferno text-white' : 'bg-mystic-navy/10 text-mystic-navy'
                      }`}>
                      <item.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-heading font-semibold mb-1 ${activeFeature === index ? 'text-mystic-navy' : 'text-accent'
                        }`}>
                        {item.title}
                      </h3>
                      <AnimatePresence>
                        {activeFeature === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="text-accent mb-2">{item.description}</p>
                            {/* Timeline/Progress Bar */}
                            <div className="h-1 w-full bg-accent/20 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 5, ease: 'linear' }}
                                className="h-full bg-red-inferno"
                              />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Types Grid */}
      <section className="section-padding bg-accent/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
              Our Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From residential to commercial, we handle all types of construction projects with excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-mystic-navy/60 flex items-center justify-center">
                    <type.icon className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-mystic-navy mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-red-inferno font-semibold hover:text-mystic-navy transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Logos Section */}
      <BrandLogos />

      {/* Company Overview */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        {/* Opaque "70" Background Watermark */}
        <div className="absolute top-1/2 left-4 md:left-1/2 md:-translate-x-[600px] -translate-y-1/2 pointer-events-none select-none z-0">
          <span className="text-[28rem] md:text-[40rem] font-heading font-black text-gray-300/30 md:text-gray-300/20 leading-none">
            70
          </span>
        </div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="pl-4 md:pl-0"
            >
              <div className="inline-block px-4 py-2 bg-red-inferno/10 text-red-inferno rounded-full text-sm font-semibold mb-4">
                Since 1952
              </div>

              {/* Prominent "70+" Display */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-[8rem] md:text-[10rem] font-heading font-black text-red-inferno leading-none">
                  70
                </span>
                <div className="flex flex-col justify-end pb-4">
                  <span className="text-5xl md:text-6xl font-heading font-bold text-mystic-navy">+</span>
                  <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Years</span>
                </div>
              </div>

              <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-black text-mystic-navy mb-6">
                Years of Excellence
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                South India Civil Contractors (SICC) has been at the forefront of construction innovation
                since 1952. With a strong workforce of over 435 professionals and state-of-the-art equipment,
                we deliver projects that stand the test of time.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-red-inferno mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Certified and experienced team of professionals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-inferno mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Advanced equipment and modern construction techniques</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-inferno mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Timely delivery and quality assurance</span>
                </li>
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center text-red-inferno font-semibold hover:text-mystic-navy transition-colors"
              >
                Learn More About Us
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-lg shadow-2xl overflow-hidden">
                <img
                  src="/Team.webp"
                  alt="SICC Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
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
              <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold mb-4 leading-tight">
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
              <Link
                to="/premium-package"
                className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                Explore Package Details
                <ArrowRight className="ml-2" size={20} />
              </Link>
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

      {/* Work Section - Project Photos Gallery Teaser */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
              Our <span className="text-red-inferno">Work</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of completed projects across residential, commercial, and construction categories
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              '/project-photos/residential/Residential 001.webp',
              '/project-photos/residential/Residential 003.webp',
              '/project-photos/residential/Residential 004.webp',
              '/project-photos/residential/Residential 005.webp',
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
              >
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/project-photos"
              className="inline-flex items-center px-8 py-4 bg-mystic-navy text-white font-semibold rounded-lg hover:bg-mystic-navy/90 transition-colors"
            >
              View All Projects
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Project Videos Section */}
      <section className="section-padding bg-mother-pearl">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
              Project <span className="text-red-inferno">Videos</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch our construction journey through detailed project videos and testimonials
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { vimeoId: '1141959737', title: 'SICC Project Video' },
              { vimeoId: '1141962178', title: 'SICC Project Video 2' },
              { vimeoId: '1141962617', title: 'SICC Project Video 3' },
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-video overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
              >
                <img
                  src={`https://vumbnail.com/${video.vimeoId}.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-cream rounded-full flex items-center justify-center">
                    <Play className="text-cream ml-1" size={28} fill="currentColor" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/project-videos"
              className="inline-flex items-center px-8 py-4 bg-red-inferno text-white font-semibold rounded-lg hover:bg-red-inferno/90 transition-colors"
            >
              View All Videos
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3D Renders Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
              3D <span className="text-red-inferno">Renders</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our photorealistic 3D architectural renders and visualizations
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              '/project-photos/3D renders/Render 001.webp',
              '/project-photos/3D renders/Render 002.webp',
              '/project-photos/3D renders/Render 003.webp',
              '/project-photos/3D renders/Render 004.webp',
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
              >
                <img
                  src={image}
                  alt={`3D Render ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/floor-plans"
              className="inline-flex items-center px-8 py-4 bg-mystic-navy text-white font-semibold rounded-lg hover:bg-mystic-navy/90 transition-colors"
            >
              View All 3D Renders
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-mystic-navy text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-200 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-300">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-red-inferno text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold mb-4 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
              Get in touch with us today for a free consultation and quote
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-red-inferno font-semibold rounded-lg hover:bg-cream transition-colors"
            >
              Contact Us Now
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
