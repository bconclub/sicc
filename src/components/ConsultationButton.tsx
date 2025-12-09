import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare } from 'lucide-react';
import ContactForm from './ContactForm';

export default function ConsultationButton() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Get the page name for source tracking
  const getPageName = () => {
    const path = location.pathname;
    if (path === '/') return 'Home';
    return path.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Unknown';
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 sm:bottom-22 md:bottom-24 right-4 sm:right-6 z-50 bg-red-inferno text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-red-inferno/90 transition-colors"
        aria-label="Get Free Consultation"
        title="Get Free Consultation"
      >
        <MessageSquare className="w-5 h-5 sm:w-7 sm:h-7" />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
              onClick={handleClose}
            />
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto">
                <div className="sticky top-0 bg-white border-b border-accent/20 px-5 py-3 flex items-center justify-between">
                  <h2 className="text-xl font-heading font-bold text-mystic-navy">
                    Get Free Consultation
                  </h2>
                  <button
                    onClick={handleClose}
                    className="p-1.5 hover:bg-accent/10 rounded-full transition-colors"
                  >
                    <X className="text-mystic-navy" size={20} />
                  </button>
                </div>
                
                <div className="p-5">
                  <ContactForm 
                    compact={true} 
                    onSuccess={handleClose}
                    source={`Floating Button - ${getPageName()} Page`}
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

