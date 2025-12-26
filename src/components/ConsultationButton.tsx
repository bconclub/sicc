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
        className="fixed bottom-20 sm:bottom-24 md:bottom-24 right-4 sm:right-6 z-50 bg-red-inferno text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-red-inferno/90 transition-colors"
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
              <div className="bg-gradient-to-br from-mother-pearl via-mother-pearl/98 to-mother-pearl/95 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto pointer-events-auto border-2 border-mystic-navy/20 ring-2 ring-red-inferno/10">
                <div className="sticky top-0 bg-gradient-to-r from-mystic-navy to-mystic-navy/95 border-b-2 border-red-inferno/30 px-5 py-4 flex items-center justify-between rounded-t-2xl z-10">
                  <h2 className="text-xl font-heading font-bold text-white">
                    Get Free Consultation
                  </h2>
                  <button
                    onClick={handleClose}
                    className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X className="text-white" size={20} />
                  </button>
                </div>
                
                <div className="p-5 bg-gradient-to-b from-mother-pearl to-mother-pearl/98">
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

