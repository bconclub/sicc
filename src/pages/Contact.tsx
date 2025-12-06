import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us - South India Civil Contractors';
  }, []);

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
              Get in <span className="text-cream">Touch</span>
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
              animate={{ opacity: 1, x: 0 }}
            >
              <ContactForm showTitle={true} />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  Reach out to us through any of the following channels. We're here to help bring your construction vision to life.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-accent/10 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-inferno rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-mystic-navy mb-1">Office Address</h3>
                    <p className="text-gray-600">
                      South India Civil Contractor<br />
                      No 35, 1st Floor, 1st Stage, 2nd Phase<br />
                      Chandra Layout, Bangalore-560040
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-accent/10 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-inferno rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-mystic-navy mb-1">Phone Number</h3>
                    <p className="text-gray-600">
                      Mobile: +91 888 111 7337
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-accent/10 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-inferno rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-mystic-navy mb-1">Email Address</h3>
                    <p className="text-gray-600">
                      build@southindiacivilcontractor.com<br />
                      projects@sicc.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-accent/10 rounded-lg">
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
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold mb-4">
              Ready to Start Building?
            </h2>
            <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
              Get a free quote and consultation for your construction project today
            </p>
            <a
              href="tel:+918881117337"
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
