import { motion } from 'framer-motion';
import { useEffect } from 'react';
import {
  Users,
  Briefcase,
  HardHat,
  TrendingUp,
  Truck,
  Boxes,
  Wrench,
  Hammer,
  Construction,
  Package,
  Forklift,
  Tractor
} from 'lucide-react';

const professionalTeam = [
  { icon: Briefcase, title: 'Architects', count: '7', description: 'Certified Architects' },
  { icon: HardHat, title: 'Structural Engineers', count: '5', description: 'Expert Engineers' },
  { icon: Users, title: 'Technical Team', count: '48', description: 'Engineers & Technical Staff' },
  { icon: TrendingUp, title: 'Total Workforce', count: '435+', description: 'Skilled Professionals' },
];

const equipment = [
  { icon: Truck, name: 'Concrete Mixer Machines', quantity: '14', unit: 'Units' },
  { icon: Package, name: 'Centering Material', quantity: '2,85,000', unit: 'sqft' },
  { icon: Construction, name: 'Scaffolding', quantity: '1,25,000', unit: 'sqft' },
  { icon: Wrench, name: 'Bar Bending Machines', quantity: '11', unit: 'Units' },
  { icon: Hammer, name: 'Bar Cutting Machines', quantity: '15', unit: 'Units' },
  { icon: Construction, name: 'Chipping Hammering Machines', quantity: '18', unit: 'Units' },
  { icon: Forklift, name: 'Material Shifting Lifts', quantity: '7', unit: 'Units' },
  { icon: Boxes, name: 'Centering Machines', quantity: '130', unit: 'Units' },
  { icon: Truck, name: 'Commercial Transport Vehicles', quantity: '5', unit: 'Units' },
  { icon: Construction, name: 'JCB', quantity: '2', unit: 'Units' },
  { icon: Tractor, name: 'Tractors', quantity: '5', unit: 'Units' },
];

const capabilities = [
  {
    title: 'Workforce Excellence',
    description: 'Our 435+ strong workforce is the backbone of our success. Each member is trained, certified, and committed to delivering excellence.',
    icon: Users
  },
  {
    title: 'Modern Equipment',
    description: 'State-of-the-art machinery and equipment ensure efficient project execution with highest quality standards.',
    icon: Construction
  },
  {
    title: 'Resource Management',
    description: 'Systematic planning and allocation of resources to ensure timely project completion without compromises.',
    icon: TrendingUp
  },
  {
    title: 'Safety First',
    description: 'All equipment and personnel follow strict safety protocols to maintain accident-free work environments.',
    icon: HardHat
  },
];

const stats = [
  { label: 'Daily Workforce Capacity', value: '400+', suffix: 'Workers' },
  { label: 'Concrete Mixing Capacity', value: '500+', suffix: 'Cu.M/Day' },
  { label: 'Material Storage', value: '50,000+', suffix: 'Sqft' },
  { label: 'Equipment Maintenance', value: '99%', suffix: 'Uptime' },
];

export default function AssetsManpower() {
  useEffect(() => {
    document.title = 'Assets & Manpower - South India Civil Contractors';
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-mystic-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920"
            alt="Assets"
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
              Assets & <span className="text-red-inferno">Manpower</span>
            </h1>
            <p className="text-xl text-gray-200">
              Our strength lies in our people and resources - 435+ professionals and modern equipment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Professional Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-[36px] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
              Professional Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced professionals across all specializations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {professionalTeam.map((member, index) => (
              <motion.div
                key={member.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-mystic-navy to-mystic-navy/80 rounded-lg p-8 text-white text-center hover:shadow-2xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-inferno rounded-full mb-4">
                  <member.icon className="w-10 h-10" />
                </div>
                <div className="text-5xl font-bold mb-2">{member.count}</div>
                <div className="text-xl font-heading font-semibold mb-1">{member.title}</div>
                <div className="text-gray-300 text-sm">{member.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Assets Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[36px] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
              Equipment & Assets
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Modern machinery and equipment for efficient project execution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {equipment.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-red-inferno/10 rounded-lg">
                      <item.icon className="w-6 h-6 text-red-inferno" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-mystic-navy mb-2 text-sm">
                      {item.name}
                    </h3>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-2xl font-bold text-red-inferno">{item.quantity}</span>
                      <span className="text-sm text-gray-500">{item.unit}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-padding bg-mystic-navy text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[36px] md:text-[3.6rem] font-heading font-bold mb-4">
              Our Capabilities
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              How our assets and manpower deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors"
              >
                <capability.icon className="w-12 h-12 text-red-inferno mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">{capability.title}</h3>
                <p className="text-gray-300 text-sm">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-mother-pearl">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[36px] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
              Capacity & Performance
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our operational capabilities in numbers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg text-center"
              >
                <div className="text-4xl font-bold text-red-inferno mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 mb-1">{stat.suffix}</div>
                <div className="text-mystic-navy font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[36px] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-6">
                Why Our Team Stands Out
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-inferno rounded-full flex items-center justify-center text-white font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-mystic-navy mb-1">Certified Professionals</h3>
                    <p className="text-gray-600 text-sm">All team members are certified and regularly trained in latest construction techniques and safety protocols.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-inferno rounded-full flex items-center justify-center text-white font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-mystic-navy mb-1">Experience Matters</h3>
                    <p className="text-gray-600 text-sm">Average team experience of 10+ years in civil construction ensures quality and efficiency.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-inferno rounded-full flex items-center justify-center text-white font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-mystic-navy mb-1">Modern Training</h3>
                    <p className="text-gray-600 text-sm">Regular training programs on new technologies, tools, and construction methodologies.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-inferno rounded-full flex items-center justify-center text-white font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-mystic-navy mb-1">Safety Culture</h3>
                    <p className="text-gray-600 text-sm">Zero-accident focus with comprehensive safety training and equipment for all personnel.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800"
                alt="Team at work"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
