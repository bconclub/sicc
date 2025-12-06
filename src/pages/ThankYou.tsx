import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, Phone, Mail } from 'lucide-react';

export default function ThankYou() {
  useEffect(() => {
    document.title = 'Thank You - South India Civil Contractors';
  }, []);

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="container-custom py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-8 flex justify-center"
          >
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="text-white" size={48} />
            </div>
          </motion.div>

          {/* Thank You Message */}
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-mystic-navy mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Your inquiry has been submitted successfully.
          </p>
          <p className="text-lg text-gray-500 mb-8">
            Our team will get back to you within 24 hours.
          </p>

          {/* Contact Information */}
          <div className="bg-accent/5 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-heading font-semibold text-mystic-navy mb-4">
              Need Immediate Assistance?
            </h2>
            <div className="space-y-3">
              <a
                href="tel:+918881117337"
                className="flex items-center justify-center gap-3 text-gray-700 hover:text-red-inferno transition-colors"
              >
                <Phone size={20} />
                <span>+91 888 111 7337</span>
              </a>
              <a
                href="mailto:build@southindiacivilcontractor.com"
                className="flex items-center justify-center gap-3 text-gray-700 hover:text-red-inferno transition-colors"
              >
                <Mail size={20} />
                <span>build@southindiacivilcontractor.com</span>
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-red-inferno text-white font-semibold rounded-lg hover:bg-red-inferno/90 transition-colors"
            >
              <Home className="mr-2" size={20} />
              Back to Home
            </Link>
          </div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <p className="text-sm text-gray-500">
              While you wait, explore our{' '}
              <Link to="/project-photos" className="text-red-inferno hover:underline">
                project gallery
              </Link>
              {' '}or learn more about our{' '}
              <Link to="/services" className="text-red-inferno hover:underline">
                services
              </Link>
              .
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

