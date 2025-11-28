import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=500'
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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % expertiseData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-mystic-navy text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 opacity-30">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/SICC HEro.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative container-custom py-24 md:py-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-white">
              South India's Most Trusted Civil Contractors
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
              End-to-end civil construction solutions across South India. From planning to execution, we deliver projects across all building types and sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-red-inferno text-white font-semibold rounded-lg hover:bg-red-inferno/90 transition-colors"
              >
                Get Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/project-photos"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-mystic-navy transition-colors"
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
            <h2 className="text-4xl md:text-5xl font-heading font-black text-mystic-navy mb-4">
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
                      <h3 className={`text-xl font-heading font-semibold mb-1 ${activeFeature === index ? 'text-mystic-navy' : 'text-gray-600'
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
                            <p className="text-gray-600 mb-2">{item.description}</p>
                            {/* Timeline/Progress Bar */}
                            <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
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

              <h2 className="text-3xl md:text-4xl font-heading font-black text-mystic-navy mb-6">
                of Construction Excellence
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
              <div className="rounded-lg shadow-2xl bg-gray-200 aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-8">
                  <Building2 className="w-24 h-24 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-semibold">Construction Team Photo</p>
                  <p className="text-gray-400 text-sm">Placeholder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Types Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-mystic-navy mb-4">
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

      {/* Testimonials */}
      <section className="section-padding bg-mystic-navy text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
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
