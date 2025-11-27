import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Building2,
  Home,
  Building,
  School,
  Hospital,
  Hotel,
  Store,
  Users,
  Wrench,
  HomeIcon,
  Castle,
  ChevronDown,
  ChevronUp,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Apartment Project Civil Contractor',
    description: 'Comprehensive civil contracting services for residential apartment complexes, from foundation to finishing.',
    features: ['Multi-story construction', 'Modern amenities installation', 'Quality assurance']
  },
  {
    icon: Castle,
    title: 'Bungalow Building Civil Contractor',
    description: 'Specialized services for luxury bungalow construction with attention to architectural details.',
    features: ['Custom design execution', 'Premium materials', 'Landscape integration']
  },
  {
    icon: Building,
    title: 'Commercial Building Civil Contractor',
    description: 'Professional commercial construction services for offices, retail spaces, and business complexes.',
    features: ['Code compliance', 'Modern infrastructure', 'Energy efficiency']
  },
  {
    icon: School,
    title: 'College Building Civil Contractor',
    description: 'Educational facility construction with focus on functionality and student safety.',
    features: ['Large-scale projects', 'Safety standards', 'Sustainable design']
  },
  {
    icon: Building2,
    title: 'High Rise Project Civil Contractors',
    description: 'Expert high-rise construction services with advanced engineering and safety protocols.',
    features: ['Structural engineering', 'Advanced safety systems', 'Vertical construction']
  },
  {
    icon: Hospital,
    title: 'Hospital Project Civil Contractor',
    description: 'Healthcare facility construction meeting stringent medical and safety requirements.',
    features: ['Medical standards', 'Specialized infrastructure', 'Infection control']
  },
  {
    icon: Hotel,
    title: 'Hotel Project Civil Contractor',
    description: 'Hospitality construction services for hotels and resorts with premium finishes.',
    features: ['Guest comfort focus', 'Luxury finishes', 'Amenity installation']
  },
  {
    icon: Users,
    title: 'PG Building Civil Contractor',
    description: 'Paying guest accommodation construction optimized for comfort and efficiency.',
    features: ['Space optimization', 'Multiple units', 'Cost-effective design']
  },
  {
    icon: Wrench,
    title: 'Renovation Work Civil Contractor',
    description: 'Expert renovation and remodeling services for existing structures.',
    features: ['Minimal disruption', 'Modern upgrades', 'Structural repairs']
  },
  {
    icon: Home,
    title: 'Residential Building Civil Contractor',
    description: 'Complete residential construction services for homes and housing projects.',
    features: ['Custom homes', 'Quality construction', 'Timely delivery']
  },
  {
    icon: HomeIcon,
    title: 'Villa Building Civil Contractor',
    description: 'Luxury villa construction with premium materials and exclusive designs.',
    features: ['Luxury finishes', 'Landscape design', 'Smart home integration']
  },
];

const laborContractServices = [
  'Site Preparation and Excavation',
  'Foundation Work and Footings',
  'Structural Column and Beam Construction',
  'Slab Casting and Reinforcement',
  'Brick and Block Masonry Work',
  'Plastering (Internal and External)',
  'Flooring and Tiling Installation',
  'Electrical Conduit and Wiring',
  'Plumbing and Drainage Systems',
  'Door and Window Frame Installation',
  'Painting (Internal and External)',
  'False Ceiling Work',
  'Waterproofing Services',
  'Carpentry and Woodwork',
  'Fabrication and Welding',
  'Scaffolding and Safety Setup',
  'Material Handling and Transportation',
  'Quality Testing and Inspection',
  'Site Cleaning and Waste Management',
  'Final Finishing and Handover'
];

export default function Services() {
  const [isExpanded, setIsExpanded] = useState(false);

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

      {/* Introduction Section */}
      <section className="section-padding bg-mother-pearl">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-mystic-navy mb-6">
              Adapting to Your Project-Specific Requirements
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We're highly specialized professionals adapting to project-specific requirements across various sectors. Whether it's apartment complexes, bungalows and villas, commercial buildings, educational institutions, high-rise projects, hospitals and healthcare facilities, hotels and hospitality projects, PG accommodations, renovation and refurbishment projects, or residential buildings - we deliver exceptional results tailored to each project's unique needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-mystic-navy mb-4">
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
                className="group bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-inferno hover:shadow-xl transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-red-inferno/10 rounded-lg group-hover:bg-red-inferno group-hover:text-white transition-colors">
                      <service.icon className="w-7 h-7 text-red-inferno group-hover:text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-semibold text-mystic-navy mb-2 group-hover:text-red-inferno transition-colors">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Civil Labor Contract Package */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-mystic-navy mb-4">
                Civil Labor Contract Package
              </h2>
              <p className="text-gray-600 mb-2">
                Available at competitive rates, includes comprehensive 20-point service coverage
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-red-inferno text-white p-6">
                <h3 className="text-2xl font-heading font-bold mb-2">Complete Package</h3>
                <p className="text-red-100">
                  End-to-end civil labor services for your construction project
                </p>
              </div>

              <div className="p-6">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="w-full flex items-center justify-between text-left mb-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-mystic-navy">
                    View All 20 Services Included
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="text-red-inferno" size={24} />
                  ) : (
                    <ChevronDown className="text-red-inferno" size={24} />
                  )}
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isExpanded ? 'auto' : 0 }}
                  className="overflow-hidden"
                >
                  <div className="grid md:grid-cols-2 gap-3 pt-4">
                    {laborContractServices.map((service, index) => (
                      <motion.div
                        key={service}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -10 }}
                        transition={{ delay: index * 0.03 }}
                        className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <CheckCircle className="w-5 h-5 text-red-inferno flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{service}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <div className="mt-6 p-4 bg-mystic-navy/5 rounded-lg">
                  <h4 className="font-semibold text-mystic-navy mb-2">Package Benefits:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-inferno mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Competitive pricing with no hidden costs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-inferno mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Skilled and experienced workforce</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-inferno mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Quality assurance at every stage</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-inferno mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Timely project completion</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 text-center">
                  <a
                    href="/contact"
                    className="inline-block px-8 py-3 bg-red-inferno text-white font-semibold rounded-lg hover:bg-red-inferno/90 transition-colors"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
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
    </div>
  );
}
