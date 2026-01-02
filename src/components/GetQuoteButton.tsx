import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText } from 'lucide-react';
import QuoteForm from './QuoteForm';

export default function GetQuoteButton() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Get the page name for source tracking
  const getPageName = () => {
    const path = location.pathname;
    if (path === '/') return 'Home';
    return path.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Unknown';
  };

  // Get package name if on a package page
  const getPackageName = () => {
    const path = location.pathname;
    if (path === '/premium-package') return 'Premium Package';
    if (path === '/civil-labor-package') return 'Civil Labor Contract Package';
    return null;
  };

  const packageName = getPackageName();
  const modalHeading = packageName ? `Get Quote - ${packageName}` : 'Get Quote';

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button - Bottom Center */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-red-inferno text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-inferno/90 transition-colors flex items-center gap-2 font-semibold"
        aria-label="Get Quote"
        title="Get Quote"
      >
        <FileText className="w-4 h-4" />
        <span>Get Quote</span>
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
                    {modalHeading}
                  </h2>
                  <button
                    onClick={handleClose}
                    className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X className="text-white" size={20} />
                  </button>
                </div>
                
                <div className="p-5 bg-gradient-to-b from-mother-pearl to-mother-pearl/98">
                  <QuoteForm 
                    onSuccess={handleClose}
                    source={`Get Quote Button - ${getPageName()} Page`}
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

