import { motion } from 'framer-motion';
import {
  Award,
  Target,
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  Briefcase,
  Heart
} from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Quality First',
    description: 'We never compromise on quality, using only the best materials and techniques'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our certified professionals bring decades of combined experience'
  },
  {
    icon: Target,
    title: 'Timely Delivery',
    description: 'We respect deadlines and deliver projects on time, every time'
  },
  {
    icon: Heart,
    title: 'Client Satisfaction',
    description: 'Your satisfaction is our priority, and we go above and beyond'
  },
];

const certifications = [
  'ISO 9001:2015 Certified',
  'Government Approved Contractor',
  'Safety Compliance Certified',
  'Green Building Council Member',
  'National Building Code Compliant',
  'Quality Management System'
];

const milestones = [
  { year: '1998', event: 'Company Founded', description: 'Started with a vision to transform construction' },
  { year: '2005', event: '100+ Projects', description: 'Reached significant milestone in project delivery' },
  { year: '2010', event: 'Regional Expansion', description: 'Extended services across South India' },
  { year: '2015', event: 'Industry Recognition', description: 'Received multiple awards for excellence' },
  { year: '2020', event: '500+ Projects', description: 'Continued growth despite challenges' },
  { year: '2025', event: 'Innovation Leader', description: 'Leading with modern construction techniques' },
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-mystic-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920"
            alt="About Us"
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
              About <span className="text-red-inferno">SICC</span>
            </h1>
            <p className="text-xl text-gray-200">
              Building spaces for life since 1998 - Your trusted partner in construction excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-mystic-navy mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 1998, South India Civil Contractors (SICC) began with a simple vision: to deliver
                construction projects that combine quality, innovation, and reliability. Over the past 25+ years,
                we've grown from a small team to one of the most trusted names in civil construction across South India.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our journey has been marked by continuous growth, learning, and adaptation to new technologies
                and methodologies. Today, we stand proud with a workforce of over 435 professionals, state-of-the-art
                equipment, and a portfolio of successful projects spanning residential, commercial, and institutional
                sectors.
              </p>
              <p className="text-gray-600 leading-relaxed">
                What sets us apart is not just our technical expertise, but our commitment to understanding and
                exceeding our clients' expectations. Every project we undertake is treated as a partnership,
                where your vision becomes our mission.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400"
                alt="Construction site"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400"
                alt="Team work"
                className="rounded-lg shadow-lg mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-mystic-navy mb-4">
              Why Choose SICC
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We bring together experience, expertise, and dedication to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-inferno/10 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-red-inferno" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-mystic-navy mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-mystic-navy mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key milestones that shaped our path to excellence
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-inferno/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <div className="text-2xl font-bold text-red-inferno mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-heading font-semibold text-mystic-navy mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-4 h-4 bg-red-inferno rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="section-padding bg-mystic-navy text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Professional Team
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Experienced professionals dedicated to bringing your vision to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-inferno rounded-full mb-4">
                <Award className="w-10 h-10" />
              </div>
              <div className="text-3xl font-bold mb-2">7</div>
              <div className="text-gray-300">Certified Architects</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-inferno rounded-full mb-4">
                <Briefcase className="w-10 h-10" />
              </div>
              <div className="text-3xl font-bold mb-2">5</div>
              <div className="text-gray-300">Structural Engineers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-inferno rounded-full mb-4">
                <Users className="w-10 h-10" />
              </div>
              <div className="text-3xl font-bold mb-2">48</div>
              <div className="text-gray-300">Technical Team</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-inferno rounded-full mb-4">
                <TrendingUp className="w-10 h-10" />
              </div>
              <div className="text-3xl font-bold mb-2">435+</div>
              <div className="text-gray-300">Total Workforce</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-mother-pearl">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-mystic-navy mb-4">
              Certifications & Credentials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence is validated by industry-recognized certifications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow"
              >
                <CheckCircle className="text-red-inferno flex-shrink-0" size={24} />
                <span className="text-gray-700 font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
