import { motion } from 'framer-motion';
import { useEffect } from 'react';
import {
  Award,
  Target,
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  Briefcase,
  Heart,
  Calendar,
  FileText,
  DollarSign,
  Clock
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
  { year: '1952', event: 'Company Founded', description: 'Started with a vision to transform construction' },
  { year: '2005', event: '100+ Projects', description: 'Reached significant milestone in project delivery' },
  { year: '2010', event: 'Regional Expansion', description: 'Extended services across South India' },
  { year: '2015', event: 'Industry Recognition', description: 'Received multiple awards for excellence' },
  { year: '2020', event: '117 Projects', description: 'Continued growth despite challenges' },
  { year: '2025', event: 'Innovation Leader', description: 'Leading with modern construction techniques' },
];

export default function About() {
  useEffect(() => {
    document.title = 'About Us - South India Civil Contractors';
  }, []);

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
              About <span className="text-cream">SICC</span>
            </h1>
            <p className="text-xl text-gray-200">
              Building spaces for life since 1952 - Your trusted partner in construction excellence
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
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 1952, South India Civil Contractors (SICC) began with a simple vision: to deliver
                construction projects that combine quality, innovation, and reliability. Over the past 70+ years,
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
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="/Old Construction.webp"
                alt="Old Construction"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
              <img
                src="/Bangalore high rise.webp"
                alt="Bangalore High Rise"
                className="rounded-lg shadow-lg mt-8 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-accent/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
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
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key milestones that shaped our path to excellence
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-inferno/20"></div>
            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`w-full md:flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-lg p-5 md:p-6 shadow-lg">
                      <div className="text-2xl font-bold text-red-inferno mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-heading font-semibold text-mystic-navy mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="flex md:hidden items-center justify-center w-8 h-8 bg-red-inferno rounded-full border-2 border-white shadow-md z-10"></div>
                  <div className="hidden md:block w-4 h-4 bg-red-inferno rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="hidden md:block flex-1"></div>
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
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold mb-4">
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

      {/* Our Core Responsibilities */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
              Our Core Responsibilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering exceptional results through our comprehensive approach
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 border border-accent/30 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-chocolate-cremoso/10 rounded-lg mb-4">
                <Calendar className="w-7 h-7 text-chocolate-cremoso" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-mystic-navy mb-2">
                Project Planning & Management
              </h3>
              <p className="text-gray-600">
                Strategic planning and seamless management from start to finish
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 border border-accent/30 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-chocolate-cremoso/10 rounded-lg mb-4">
                <FileText className="w-7 h-7 text-chocolate-cremoso" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-mystic-navy mb-2">
                Design Interpretation & Implementation
              </h3>
              <p className="text-gray-600">
                Translating architectural visions into functional, beautiful structures
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 border border-accent/30 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-chocolate-cremoso/10 rounded-lg mb-4">
                <DollarSign className="w-7 h-7 text-chocolate-cremoso" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-mystic-navy mb-2">
                Budgeting & Cost Management
              </h3>
              <p className="text-gray-600">
                Transparent budgeting with strict adherence to financial parameters
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 border border-accent/30 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-chocolate-cremoso/10 rounded-lg mb-4">
                <CheckCircle className="w-7 h-7 text-chocolate-cremoso" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-mystic-navy mb-2">
                Quality Control & Assurance
              </h3>
              <p className="text-gray-600">
                Rigorous quality checks at every stage of construction
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 border border-accent/30 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-chocolate-cremoso/10 rounded-lg mb-4">
                <Shield className="w-7 h-7 text-chocolate-cremoso" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-mystic-navy mb-2">
                Safety & Risk Management
              </h3>
              <p className="text-gray-600">
                Comprehensive safety protocols and proactive risk mitigation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 border border-accent/30 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-chocolate-cremoso/10 rounded-lg mb-4">
                <Clock className="w-7 h-7 text-chocolate-cremoso" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-mystic-navy mb-2">
                Timely Execution & Delivery
              </h3>
              <p className="text-gray-600">
                On-time project completion without compromising on quality
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* South India Focus Section */}
      <section className="section-padding bg-mother-pearl">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-6">
                Serving South India with Excellence
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                As South India civil contractors, we focus on diverse building types across South India. Our deep understanding of local regulations, climate considerations, and regional requirements ensures projects that are perfectly suited to the South India landscape.
              </p>
              
              {/* Stats Bar */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-heading font-bold text-mystic-navy mb-1">70+</div>
                  <div className="text-sm text-gray-600">Years in South India</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-lg font-heading font-bold text-mystic-navy mb-1">Major Cities</div>
                  <div className="text-xs text-gray-600">Bangalore, Mysore, Mangalore, Hubli</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-lg font-heading font-bold text-mystic-navy mb-1">Local Expertise</div>
                  <div className="text-xs text-gray-600">Global Standards</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-lg p-8 shadow-xl border-2 border-mystic-navy/20">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/South India.webp"
                    alt="South India - Our Service Area"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
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
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-4">
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
