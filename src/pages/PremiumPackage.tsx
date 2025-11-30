import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
} from 'lucide-react';

export default function PremiumPackage() {
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
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 text-white">
              Premium Construction Package
            </h1>
            <div className="text-5xl md:text-7xl font-heading font-black mb-4 text-cream">
              ₹2,499 <span className="text-2xl md:text-4xl text-gray-300">per sq ft</span>
            </div>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Comprehensive construction solution with premium materials and expert craftsmanship
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-red-inferno text-white font-semibold rounded-lg hover:bg-red-inferno/90 transition-colors"
              >
                Get Quote
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-mystic-navy transition-colors"
              >
                <Download className="mr-2" size={20} />
                Download Details
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Foundation & Structure Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
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
              <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-8">
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
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
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
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
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
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
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
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
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
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
              Material Breakdown
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive allocation of materials in your premium construction package
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-6">
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

      {/* Why Choose Us Section */}
      <section className="section-padding bg-mother-pearl">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
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
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold mb-6">
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
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-red-inferno text-white font-semibold rounded-lg hover:bg-red-inferno/90 transition-colors"
              >
                Get Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-mystic-navy font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Download className="mr-2" size={20} />
                Download Package PDF
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
