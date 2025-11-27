import { motion } from 'framer-motion';
import { Shield, Award, BookOpen, Zap, Layers, HardHat, FileCheck, Users } from 'lucide-react';

const qualityStandards = [
  {
    icon: Shield,
    title: 'ISO 9001:2015 Certified',
    description: 'Quality management system ensuring consistent, high-quality service delivery.'
  },
  {
    icon: Award,
    title: 'National Building Code',
    description: 'Full compliance with NBC standards for structural safety and construction practices.'
  },
  {
    icon: FileCheck,
    title: 'Quality Assurance Protocol',
    description: 'Multi-stage inspection and testing at every phase of construction.'
  },
  {
    icon: HardHat,
    title: 'Safety Standards',
    description: 'OSHA-compliant safety measures and regular safety audits.'
  },
];

const materials = [
  { category: 'Concrete', specs: ['M20, M25, M30 Grade', 'Ready-mix concrete', 'Tested for strength'] },
  { category: 'Steel', specs: ['Fe 415/Fe 500 TMT bars', 'IS certified', 'Corrosion resistant'] },
  { category: 'Cement', specs: ['OPC 43 & 53 Grade', 'Premium brands', 'Quality tested'] },
  { category: 'Bricks', specs: ['First class bricks', 'High compressive strength', 'Uniform size'] },
  { category: 'Tiles', specs: ['Vitrified & ceramic', 'Premium brands', 'Variety of finishes'] },
  { category: 'Paints', specs: ['Weatherproof', 'Lead-free', 'Long-lasting'] },
];

const methodologies = [
  {
    title: 'Site Survey & Planning',
    description: 'Comprehensive site analysis, soil testing, and detailed project planning before commencement.'
  },
  {
    title: 'Foundation Engineering',
    description: 'Advanced foundation techniques including pile foundation, raft foundation based on soil conditions.'
  },
  {
    title: 'Structural Construction',
    description: 'Modern formwork systems, precision in reinforcement, and quality concrete pouring methods.'
  },
  {
    title: 'MEP Integration',
    description: 'Coordinated Mechanical, Electrical, and Plumbing systems integration during construction.'
  },
  {
    title: 'Finishing Works',
    description: 'Precision in flooring, painting, and all finishing touches with attention to detail.'
  },
  {
    title: 'Quality Control',
    description: 'Regular testing, inspections, and documentation at every construction stage.'
  },
];

const safetyProtocols = [
  'Personal Protective Equipment (PPE) mandatory for all workers',
  'Regular safety training and toolbox talks',
  'Scaffolding inspection and maintenance protocols',
  'Emergency response and first-aid provisions',
  'Fire safety measures and equipment',
  'Proper signage and barricading',
  'Electrical safety compliance',
  'Material handling and storage safety'
];

const compliance = [
  { name: 'Building Regulations', description: 'Local building authority approvals and regulations' },
  { name: 'Environmental Norms', description: 'Eco-friendly construction practices and waste management' },
  { name: 'Labor Laws', description: 'Compliance with labor welfare and safety regulations' },
  { name: 'Fire Safety Code', description: 'Fire NOC and safety system installations' },
  { name: 'Structural Safety', description: 'Structural stability certificates and load calculations' },
  { name: 'Occupancy Certificate', description: 'Final OC procurement from authorities' },
];

export default function TechnicalSpecifications() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-mystic-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=1920"
            alt="Technical"
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
              Technical <span className="text-cream">Specifications</span>
            </h1>
            <p className="text-xl text-gray-200">
              Our commitment to quality through rigorous standards and best practices
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-mystic-navy mb-4">
              Quality Standards
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry-leading certifications and quality benchmarks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityStandards.map((standard, index) => (
              <motion.div
                key={standard.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-inferno transition-colors text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-inferno/10 rounded-full mb-4">
                  <standard.icon className="w-8 h-8 text-red-inferno" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-mystic-navy mb-2">
                  {standard.title}
                </h3>
                <p className="text-gray-600 text-sm">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Used */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-mystic-navy mb-4">
              Materials Used
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium quality materials sourced from trusted suppliers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <motion.div
                key={material.category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <Layers className="text-red-inferno mr-3" size={24} />
                  <h3 className="text-xl font-heading font-semibold text-mystic-navy">
                    {material.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {material.specs.map((spec) => (
                    <li key={spec} className="flex items-start text-gray-600 text-sm">
                      <span className="text-red-inferno mr-2">•</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Methodologies */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-mystic-navy mb-4">
              Construction Methodologies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Modern techniques and systematic approach to construction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodologies.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-mother-pearl rounded-lg p-6"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-inferno text-white rounded-full flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-mystic-navy mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{method.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Protocols */}
      <section className="section-padding bg-mystic-navy text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Safety Protocols
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Safety first - Our comprehensive safety measures for every project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {safetyProtocols.map((protocol, index) => (
              <motion.div
                key={protocol}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start bg-white/10 backdrop-blur-sm rounded-lg p-4"
              >
                <HardHat className="text-red-inferno mr-3 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-200">{protocol}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="section-padding bg-mother-pearl">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-mystic-navy mb-4">
              Compliance & Industry Standards
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We ensure full compliance with all regulatory and industry requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {compliance.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-3">
                  <BookOpen className="text-red-inferno mr-3" size={24} />
                  <h3 className="text-lg font-heading font-semibold text-mystic-navy">
                    {item.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
