import { motion } from 'framer-motion';
import { useState } from 'react';
import { Building2, Home, Hospital, Hotel, School, Store, Calendar, MapPin } from 'lucide-react';

const timelineData = [
  {
    year: 1998,
    title: 'Company Founded',
    type: 'Milestone',
    location: 'Bangalore',
    description: 'Started with a vision to transform construction industry in South India',
    details: 'First residential project completed successfully',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400',
    icon: Building2
  },
  {
    year: 2000,
    title: 'First Apartment Complex',
    type: 'Residential',
    location: 'Bangalore',
    description: 'Completed first multi-unit apartment complex',
    details: '50 units, 3-month ahead of schedule',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400',
    icon: Home
  },
  {
    year: 2003,
    title: 'Commercial Breakthrough',
    type: 'Commercial',
    location: 'Bangalore',
    description: 'First commercial building project completed',
    details: '5-story office complex with modern amenities',
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400',
    icon: Store
  },
  {
    year: 2005,
    title: 'Healthcare Expansion',
    type: 'Hospital',
    location: 'Mysore',
    description: 'Expanded to hospital construction sector',
    details: '100-bed multi-specialty hospital',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400',
    icon: Hospital
  },
  {
    year: 2007,
    title: 'Educational Infrastructure',
    type: 'Educational',
    location: 'Hubli',
    description: 'First college building project',
    details: 'Engineering college with state-of-the-art facilities',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400',
    icon: School
  },
  {
    year: 2008,
    title: 'High-Rise Achievement',
    type: 'Residential',
    location: 'Bangalore',
    description: 'Major high-rise project completion',
    details: '20-story luxury apartment tower',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
    icon: Building2
  },
  {
    year: 2010,
    title: '100+ Projects Milestone',
    type: 'Milestone',
    location: 'Pan South India',
    description: 'Reached significant milestone in project delivery',
    details: 'Completed 100th project with excellence',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400',
    icon: Building2
  },
  {
    year: 2012,
    title: 'Luxury Villa Projects',
    type: 'Residential',
    location: 'Bangalore',
    description: 'Entered luxury villa construction',
    details: 'High-end villa community with premium finishes',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400',
    icon: Home
  },
  {
    year: 2015,
    title: 'Regional Expansion',
    type: 'Milestone',
    location: 'Multi-city',
    description: 'Expanded operations to multiple cities',
    details: 'Offices in Bangalore, Mysore, Mangalore, and Hubli',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400',
    icon: Building2
  },
  {
    year: 2017,
    title: 'Hospitality Sector Entry',
    type: 'Hotel',
    location: 'Coorg',
    description: 'First hotel construction project',
    details: '4-star resort with 80 rooms',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400',
    icon: Hotel
  },
  {
    year: 2018,
    title: 'Technology Integration',
    type: 'Milestone',
    location: 'Bangalore',
    description: 'Adopted advanced construction technologies',
    details: 'BIM and modern project management tools',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400',
    icon: Building2
  },
  {
    year: 2020,
    title: 'Pandemic Resilience',
    type: 'Milestone',
    location: 'Pan India',
    description: 'Successfully completed 15 projects during pandemic',
    details: 'Maintained quality and safety despite challenges',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400',
    icon: Building2
  },
  {
    year: 2022,
    title: 'Smart City Projects',
    type: 'Commercial',
    location: 'Bangalore',
    description: 'Part of smart city development initiatives',
    details: 'Sustainable commercial complexes',
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400',
    icon: Store
  },
  {
    year: 2023,
    title: '500+ Projects Completed',
    type: 'Milestone',
    location: 'Pan South India',
    description: 'Crossed 500 successful project completions',
    details: '25 years of construction excellence',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400',
    icon: Building2
  },
  {
    year: 2024,
    title: 'Green Building Initiative',
    type: 'Milestone',
    location: 'Multiple Locations',
    description: 'Focus on sustainable construction practices',
    details: 'All new projects following green building norms',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400',
    icon: Building2
  },
  {
    year: 2025,
    title: 'Current Projects',
    type: 'Milestone',
    location: 'Multiple Cities',
    description: 'Multiple ongoing premium projects',
    details: 'High-rise, villa, and commercial developments',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400',
    icon: Building2
  },
];

const projectTypes = ['All', 'Residential', 'Commercial', 'Hospital', 'Hotel', 'Educational', 'Milestone'];

export default function WorkTimeline() {
  const [filter, setFilter] = useState('All');

  const filteredData = filter === 'All'
    ? timelineData
    : timelineData.filter(item => item.type === filter);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-mystic-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920"
            alt="Timeline"
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
              Work <span className="text-red-inferno">Timeline</span>
            </h1>
            <p className="text-xl text-gray-200">
              25+ years of construction excellence - Our journey from 1998 to present
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 z-40 bg-white shadow-md py-4">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {projectTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === type
                    ? 'bg-red-inferno text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <div className="relative">
            {/* Center Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-inferno/30"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {filteredData.map((item, index) => (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-red-inferno text-white px-4 py-2 rounded-full font-bold text-lg">
                          {item.year}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            item.type === 'Milestone' ? 'bg-red-inferno text-white' :
                            item.type === 'Residential' ? 'bg-blue-100 text-blue-700' :
                            item.type === 'Commercial' ? 'bg-green-100 text-green-700' :
                            item.type === 'Hospital' ? 'bg-purple-100 text-purple-700' :
                            item.type === 'Hotel' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-orange-100 text-orange-700'
                          }`}>
                            {item.type}
                          </span>
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-mystic-navy mb-2">
                          {item.title}
                        </h3>
                        <div className="flex items-center text-gray-500 text-sm mb-3 gap-4">
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-1" />
                            {item.location}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-2">{item.description}</p>
                        <p className="text-sm text-gray-500 italic">{item.details}</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Icon */}
                  <div className="hidden md:flex items-center justify-center flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="w-16 h-16 bg-red-inferno rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10"
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-mystic-navy rounded-lg p-8 text-white"
          >
            <h3 className="text-2xl font-heading font-bold mb-6 text-center">
              Our Journey in Numbers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-red-inferno mb-2">25+</div>
                <div className="text-gray-300">Years of Excellence</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-inferno mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-inferno mb-2">435+</div>
                <div className="text-gray-300">Skilled Workforce</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-inferno mb-2">100%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
