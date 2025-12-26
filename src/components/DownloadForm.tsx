import { useState, useEffect } from 'react';
import { Send, CheckCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFormData } from '../contexts/FormDataContext';
import { formatUTMForSubmission } from '../utils/utmTracking';

interface DownloadFormProps {
  isOpen: boolean;
  onClose: () => void;
  downloadUrl: string;
  fileName: string;
  title?: string;
}

export default function DownloadForm({ 
  isOpen, 
  onClose, 
  downloadUrl, 
  fileName,
  title = 'Download Package'
}: DownloadFormProps) {
  const { formData: sharedFormData, updateFormData } = useFormData();
  const [formData, setFormData] = useState({
    name: sharedFormData.name || '',
    phone: sharedFormData.phone || ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync with shared form data when modal opens or shared data changes
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: sharedFormData.name || '',
        phone: sharedFormData.phone || ''
      });
    }
  }, [isOpen, sharedFormData.name, sharedFormData.phone]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updated = {
      ...formData,
      [e.target.name]: e.target.value
    };
    setFormData(updated);
    // Update shared form data
    updateFormData({ [e.target.name]: e.target.value });
  };

  const downloadFile = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Send form data to webhook (optional - for tracking)
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('source', 'Civil Contractor Package Download');
      formDataToSend.append('downloadType', 'Civil Contractor Package');

      // Add UTM parameters
      const utmParams = formatUTMForSubmission();
      Object.entries(utmParams).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      // Send to webhook (non-blocking)
      fetch('https://build.goproxe.com/webhook/southindiacivilcontractors', {
        method: 'POST',
        body: formDataToSend
      }).catch(() => {
        // Silently fail if webhook is unavailable
      });

      // Trigger download
      downloadFile();
      
      setIsSubmitted(true);
      
      // Close modal after 2 seconds
      // Don't clear shared form data - keep it for other forms
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({ name: '', phone: '' });
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still trigger download even if webhook fails
      downloadFile();
      setIsSubmitted(true);
      // Don't clear shared form data - keep it for other forms
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({ name: '', phone: '' });
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      setIsSubmitted(false);
      // Don't clear shared form data - keep it for other forms
      // Just reset local form state
      setFormData({ name: '', phone: '' });
    }
  };

  if (!isOpen) return null;

  return (
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
                  {title}
                </h2>
                <button
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="p-1.5 hover:bg-white/20 rounded-full transition-colors disabled:opacity-50"
                >
                  <X className="text-white" size={20} />
                </button>
              </div>
              
              <div className="p-5 bg-gradient-to-b from-mother-pearl to-mother-pearl/98">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-heading font-bold text-mystic-navy mb-2">
                      Download Started!
                    </h3>
                    <p className="text-gray-600">
                      Your download should begin shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <p className="text-gray-700 mb-4 text-center">
                      Please provide your details to download the package
                    </p>
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-mystic-navy mb-2">
                        Name <span className="text-red-inferno">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-red-inferno focus:outline-none transition-colors"
                        placeholder="Enter your name"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-mystic-navy mb-2">
                        Phone Number <span className="text-red-inferno">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-red-inferno focus:outline-none transition-colors"
                        placeholder="Enter your phone number"
                        disabled={isSubmitting}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.name.trim() || !formData.phone.trim()}
                      className="w-full py-3 bg-red-inferno text-white font-semibold rounded-lg hover:bg-red-inferno/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Download Package
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

