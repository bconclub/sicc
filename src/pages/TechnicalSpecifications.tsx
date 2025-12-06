import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, BookOpen, HardHat, FileCheck, ChevronDown } from 'lucide-react';
import BrandLogos from '../components/BrandLogos';

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

const technicalSpecs = [
  {
    title: 'TYPES OF FOOTINGS',
    items: [
      'Combined Footings',
      'Spread Footings',
      'Raft Mat Foundation',
      'Isolated Footings',
      'Strapped Footings',
      'Pile Foundation',
      'Stepped Footings',
      'Shallow Foundations',
      'Strip Footings',
      'Individual Footings',
      'Deep Foundation'
    ]
  },
  {
    title: 'TYPES OF COLUMNS',
    items: [
      'L and T shaped Column',
      'Square or Rectangular Column',
      'Spiral Column',
      'Tied Column',
      'Circular Column',
      'Composite Column',
      'Reinforced Concrete Column',
      'Axially Loaded Column',
      'Uniaxial Eccentrically Loaded Column'
    ]
  },
  {
    title: 'RETAINING WALL',
    items: [
      'Gravity Retaining Wall',
      'Cantilever Retaining Wall',
      'Piled Retaining Wall',
      'Counter-Fort/Buttressed Retaining Wall',
      'Crib Retaining Wall',
      'Mechanically Stabilized Earth (MSE) Retaining Wall'
    ]
  },
  {
    title: 'PARTITION WALL',
    items: [
      'Load Bearing Wall',
      'Shear Wall',
      'Brick Masonry Wall',
      'Course Rubble Stone Masonry Walls',
      'Parapet Walls',
      'Curtain Walls',
      'Boundary Wall or Compound Walls'
    ]
  },
  {
    title: 'BEAMS',
    items: [
      'Fixed beam',
      'Overhanging beam',
      'T-beam',
      'L-beam',
      'I-beams',
      'H-beams',
      'Truss beam',
      'Steel beam',
      'Curved beam',
      'Deep beam',
      'Simply Supported Beam',
      'Continuous Beam',
      'Cantilever Beam',
      'HIP Beam',
      'Trussed Beam',
      'Lattice Beam',
      'Composite Beam',
      'Beam Bridge',
      'Tie Beam'
    ]
  },
  {
    title: 'STAIRCASE',
    items: [
      'Chain Stairs',
      'Straight Stairs',
      'Quarter Turn Stairs (L Shaped Stairs)',
      'Switchback Stairs (U-Shaped Stairs)',
      'Alternating Tread Stairs',
      'Crossover Stairs',
      'Ladder Stairs (Ship Stairs)',
      'Circular Stairs',
      'Floating Stairs (Cantilever Stairs)',
      'Spiral Stairs'
    ]
  },
  {
    title: 'SLABS',
    items: [
      'One Way Slab',
      'Two-Way Slab',
      'Flat Plate',
      'Waffle Slab',
      'Grid Slab',
      'Ribbed Slab',
      'Hardy Slab',
      'Dome Slab',
      'Post-tensioned Slabs',
      'Prefabricated Slabs',
      'Arched Slab',
      'Cantilever Slab',
      'Low Roof Slab',
      'Sunken Slab',
      'Composite Slab'
    ]
  },
  {
    title: 'BRICKS WALL',
    items: [
      'Hollow concrete blocks',
      'Solid concrete blocks',
      'ACC blocks',
      'Stone Wall',
      'Concrete Wall',
      'Curtain Wall',
      'Retaining Wall',
      'Non-retaining Wall'
    ]
  },
  {
    title: 'CONCRETE',
    items: [
      'Normal Strength Concrete',
      'Plain or Ordinary Concrete',
      'Reinforced Concrete',
      'Prestressed Concrete',
      'Precast Concrete',
      'High-Density Concrete',
      'Ready Mix Concrete',
      'High Strength Concrete',
      'High-Performance Concrete',
      'Shotcrete Concrete',
      'Pervious Concrete',
      'Rapid Strength Concrete',
      'Screed Concrete'
    ]
  }
];

const premiumMaterials = [
  {
    title: 'STEEL',
    subtitle: 'Trusted Steel Brands:',
    brands: ['Tata Tiscon', 'JSW Neosteel', 'Indus', 'Jindal Panther', 'SK Super', 'Kamdhenu'],
    subtitle2: 'Steel Grades:',
    grades: ['Fe 415', 'Fe 500', 'Fe 550', 'Fe 600']
  },
  {
    title: 'CEMENT',
    subtitle: 'Premium Cement Brands:',
    brands: ['ACC', 'Birla Super', 'Ultra Tech', 'Ramco', 'Zuari']
  },
  {
    title: 'WOOD',
    subtitle: 'Quality Wood Types:',
    brands: ['Karnataka Teak Wood', 'Gujarat Neem Wood', 'Assam Redsal & Gumsal Wood', 'Malaysia Honne Wood']
  },
  {
    title: 'ELECTRICAL',
    subtitle: 'Electrical Systems:',
    brands: ['Havells', 'V Guard']
  },
  {
    title: 'PAINTING',
    subtitle: 'Premium Paint Brands:',
    brands: ['Asian Paint', 'Berger Paint']
  },
  {
    title: 'PLUMBING',
    subtitle: 'Plumbing Systems:',
    brands: ['Astral', 'Ashirvad', 'Supreme']
  },
  {
    title: 'FLOORING VITRIFIED TILES',
    subtitle: 'Premium Tile Brands:',
    brands: ['Kajaria', 'Somany', 'Nitco']
  },
  {
    title: 'BATHROOM & SANITARY FITTINGS',
    subtitle: 'Luxury Bathroom Fittings:',
    brands: ['Jaguar', 'Hindware', 'Parryware', 'Cera', 'Huda']
  },
  {
    title: 'DOORS & FITTINGS',
    subtitle: 'Door Solutions:',
    brands: ['Flush & Panel Doors', 'Godrej', 'Europa']
  }
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
  useEffect(() => {
    document.title = 'Technical Specifications - South India Civil Contractors';
  }, []);

  const [openSpecs, setOpenSpecs] = useState<{ [key: string]: boolean }>({});
  const [openMaterials, setOpenMaterials] = useState<{ [key: string]: boolean }>({});

  const toggleSpec = (title: string) => {
    setOpenSpecs((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const toggleMaterial = (title: string) => {
    setOpenMaterials((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

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

      {/* Brand Logos Section */}
      <BrandLogos 
        backgroundColor="bg-white"
        subtitle="Premium brands and materials we use in all our construction projects"
      />

      {/* Quality Standards */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
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
                className="bg-white border-2 border-accent/30 rounded-lg p-6 hover:border-red-inferno transition-colors text-center"
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

      {/* Technical Specifications */}
      <section className="section-padding bg-accent/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
              Technical Specifications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive range of construction elements and structural components
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {technicalSpecs.map((spec, index) => {
              const isOpen = openSpecs[spec.title] || false;
              return (
                <motion.div
                  key={spec.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleSpec(spec.title)}
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-accent/5 transition-colors"
                  >
                    <h3 className="text-lg font-heading font-semibold text-mystic-navy pr-4">
                      {spec.title}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-red-inferno flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <ul className="space-y-2">
                          {spec.items.map((item) => (
                            <li key={item} className="flex items-start text-gray-600 text-sm">
                              <span className="text-red-inferno mr-2 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-[2.2rem] md:text-[2.8rem] font-heading font-bold text-mystic-navy mb-4">
              Premium Materials & Brands
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumMaterials.map((material, index) => {
              const isOpen = openMaterials[material.title] || false;
              return (
                <motion.div
                  key={material.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleMaterial(material.title)}
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-accent/5 transition-colors"
                  >
                    <h3 className="text-lg font-heading font-semibold text-mystic-navy pr-4">
                      {material.title}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-red-inferno flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        {material.subtitle && (
                          <p className="text-sm font-semibold text-gray-700 mb-2 mt-3">
                            {material.subtitle}
                          </p>
                        )}
                        <ul className="space-y-1.5 mb-3">
                          {material.brands.map((brand) => (
                            <li key={brand} className="flex items-start text-gray-600 text-sm">
                              <span className="text-red-inferno mr-2 mt-1">•</span>
                              <span>{brand}</span>
                            </li>
                          ))}
                        </ul>
                        {material.subtitle2 && (
                          <>
                            <p className="text-sm font-semibold text-gray-700 mb-2 mt-3">
                              {material.subtitle2}
                            </p>
                            <ul className="space-y-1.5">
                              {material.grades?.map((grade) => (
                                <li key={grade} className="flex items-start text-gray-600 text-sm">
                                  <span className="text-red-inferno mr-2 mt-1">•</span>
                                  <span>{grade}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
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
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
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
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold mb-4">
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
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
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
