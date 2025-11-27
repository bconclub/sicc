import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', projectType: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-mystic-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920"
            alt="Contact"
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
              Get in <span className="text-red-inferno">Touch</span>
            </h1>
            <p className="text-xl text-gray-200">
              Ready to start your project? Contact us today for a free consultation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold text-mystic-navy mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-inferno focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-inferno focus:border-transparent"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-inferno focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-inferno focus:border-transparent"
                  >
                    <option value="">Select project type</option>
                    <option value="Apartment">Apartment Project</option>
                    <option value="Bungalow">Bungalow Building</option>
                    <option value="Commercial">Commercial Building</option>
                    <option value="College">College Building</option>
                    <option value="High Rise">High Rise Project</option>
                    <option value="Hospital">Hospital Project</option>
                    <option value="Hotel">Hotel Project</option>
                    <option value="PG">PG Building</option>
                    <option value="Renovation">Renovation Work</option>
                    <option value="Residential">Residential Building</option>
                    <option value="Villa">Villa Building</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-inferno focus:border-transparent resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-colors ${
                    isSubmitted
                      ? 'bg-green-500 text-white'
                      : 'bg-red-inferno text-white hover:bg-red-inferno/90'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2" size={20} />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-heading font-bold text-mystic-navy mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  Reach out to us through any of the following channels. We're here to help bring your construction vision to life.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-inferno rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-mystic-navy mb-1">Office Address</h3>
                    <p className="text-gray-600">
                      South India Civil Contractors<br />
                      Bangalore, Karnataka<br />
                      India - 560001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-inferno rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-mystic-navy mb-1">Phone Numbers</h3>
                    <p className="text-gray-600">
                      Office: +91 XXXX XXX XXX<br />
                      Mobile: +91 XXXXX XXXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-inferno rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-mystic-navy mb-1">Email Address</h3>
                    <p className="text-gray-600">
                      info@sicc.com<br />
                      projects@sicc.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-inferno rounded-lg flex items-center justify-center">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-mystic-navy mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-mystic-navy rounded-lg p-6 text-white">
                <h3 className="text-xl font-heading font-semibold mb-4">Why Choose Us?</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold text-red-inferno">25+</div>
                    <div className="text-sm text-gray-300">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-inferno">500+</div>
                    <div className="text-sm text-gray-300">Projects Done</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-inferno">435+</div>
                    <div className="text-sm text-gray-300">Team Members</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-inferno">100%</div>
                    <div className="text-sm text-gray-300">Satisfaction</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200">
        <div className="w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.9973874144!2d77.35074421903857!3d12.953945613752363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Start Building?
            </h2>
            <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
              Get a free quote and consultation for your construction project today
            </p>
            <a
              href="tel:+91XXXXXXXXXX"
              className="inline-block px-8 py-4 bg-white text-red-inferno font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Call Us Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
