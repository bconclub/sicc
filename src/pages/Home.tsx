import { motion } from 'framer-motion';
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

const trustIndicators = [
  { label: 'Since 1998', value: '1998' },
  { label: 'Projects Completed', value: '500+' },
  { label: 'Workforce', value: '435+' },
  { label: '25+ Years of Experience', value: '25+' },
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
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-mystic-navy text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920"
            alt="Construction"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container-custom py-24 md:py-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white">
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
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">
                    {indicator.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-300">{indicator.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="section-padding bg-mother-pearl">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-mystic-navy mb-4">
              Building Spaces for Life
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our expertise includes translating architectural and engineering designs into tangible, functional structures, ensuring timely completion, budget adherence, and the highest quality and safety standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 border-2 border-mystic-navy/20 hover:border-mystic-navy transition-colors shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-mystic-navy/10 rounded-lg mb-4">
                <Building2 className="w-8 h-8 text-mystic-navy" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-mystic-navy mb-3">
                Comprehensive Project Management
              </h3>
              <p className="text-gray-600">
                From conception to completion, we manage every aspect of your construction project with precision and care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 border-2 border-mystic-navy/20 hover:border-mystic-navy transition-colors shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-mystic-navy/10 rounded-lg mb-4">
                <Grid3x3 className="w-8 h-8 text-mystic-navy" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-mystic-navy mb-3">
                Diverse Project Portfolio
              </h3>
              <p className="text-gray-600">
                Specialized in apartments, villas, commercial buildings, hospitals, hotels, educational institutions, and more across Karnataka.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 border-2 border-mystic-navy/20 hover:border-mystic-navy transition-colors shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-mystic-navy/10 rounded-lg mb-4">
                <Shield className="w-8 h-8 text-mystic-navy" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-mystic-navy mb-3">
                Quality & Safety First
              </h3>
              <p className="text-gray-600">
                Unwavering commitment to the highest quality standards and safety protocols on every project.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-red-inferno/10 text-red-inferno rounded-full text-sm font-semibold mb-4">
                Since 1998
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-mystic-navy mb-6">
                25+ Years of Construction Excellence
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                South India Civil Contractors (SICC) has been at the forefront of construction innovation
                since 1998. With a strong workforce of over 435 professionals and state-of-the-art equipment,
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
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800"
                alt="Construction team"
                className="rounded-lg shadow-2xl"
              />
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
