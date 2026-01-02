import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Building,
  Building2,
  Hotel,
  Hospital,
  GraduationCap,
  Wrench,
  ChevronRight,
  Lock,
  CheckCircle,
} from 'lucide-react';
import { formatUTMForSubmission } from '../utils/utmTracking';

interface QuoteFormProps {
  onSuccess?: () => void;
  source?: string;
  defaultProjectType?: string;
}

interface ProjectType {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const initialProjectTypes: ProjectType[] = [
  { id: 'Residential', label: 'Residential', icon: Home },
  { id: 'Commercial', label: 'Commercial', icon: Building },
  { id: 'Villa', label: 'Villa', icon: Building2 },
];

const additionalProjectTypes: ProjectType[] = [
  { id: 'Apartment', label: 'Apartment', icon: Building },
  { id: 'Hotel', label: 'Hotel', icon: Hotel },
  { id: 'Hospital', label: 'Hospital', icon: Hospital },
  { id: 'Educational', label: 'Educational', icon: GraduationCap },
  { id: 'Renovation', label: 'Renovation', icon: Wrench },
];

export default function QuoteForm({ onSuccess, source = 'Unknown', defaultProjectType = '' }: QuoteFormProps) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showMore, setShowMore] = useState(false);
  const [selectedProjectType, setSelectedProjectType] = useState(defaultProjectType);
  
  // Update selectedProjectType when defaultProjectType changes
  useEffect(() => {
    if (defaultProjectType) {
      setSelectedProjectType(defaultProjectType);
      // If default is set, automatically expand to show more options if needed
      const isInAdditional = additionalProjectTypes.some(t => t.id === defaultProjectType);
      if (isInAdditional) {
        setShowMore(true);
      }
    }
  }, [defaultProjectType]);
  const [location, setLocation] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const locationInputRef = useRef<HTMLInputElement>(null);

  // Auto-focus location input when step 2 loads
  useEffect(() => {
    if (step === 2 && locationInputRef.current) {
      setTimeout(() => {
        locationInputRef.current?.focus();
      }, 300);
    }
  }, [step]);

  // Format phone number - store with +91 prefix, display without
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    // Store with +91 prefix for submission
    const phoneWithPrefix = value ? `+91${value}` : '';
    setFormData(prev => ({ ...prev, phone: phoneWithPrefix }));
  };

  // Get display value (without +91 prefix)
  const getPhoneDisplayValue = () => {
    return formData.phone.replace(/^\+91/, '');
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('email', formData.email || '');
      formDataToSend.append('location', location);
      formDataToSend.append('projectType', selectedProjectType);
      formDataToSend.append('source', source);

      // Add UTM parameters
      const utmParams = formatUTMForSubmission();
      Object.entries(utmParams).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://build.goproxe.com/webhook/southindiacivilcontractors', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok || response.status === 200 || response.status === 201 || response.status === 204) {
        setIsSubmitted(true);
        if (onSuccess) {
          setTimeout(() => {
            onSuccess();
          }, 500);
        }
        // Redirect to thank you page
        setTimeout(() => {
          navigate('/thank-you');
        }, 1000);
      } else {
        const errorText = await response.text().catch(() => 'Unknown error');
        console.error('Form submission failed:', errorText);
        if (response.status < 500) {
          setIsSubmitted(true);
          if (onSuccess) {
            setTimeout(() => {
              onSuccess();
            }, 500);
          }
          // Redirect to thank you page
          setTimeout(() => {
            navigate('/thank-you');
          }, 1000);
        } else {
          alert(`There was an error submitting your form. Please try again.`);
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitted(true);
      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 500);
      }
      // Redirect to thank you page even on error (better UX)
      setTimeout(() => {
        navigate('/thank-you');
      }, 1000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-heading font-bold text-mystic-navy mb-2">
          Quote Request Sent!
        </h3>
        <p className="text-gray-600">
          We'll get back to you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mb-6">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`w-2 h-2 rounded-full transition-all ${
              s <= step ? 'bg-red-inferno w-6' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Step 1: Project Type */}
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-heading font-bold text-mystic-navy mb-4">
              What are you building?
            </h3>

            {/* Initial 3 Cards */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {initialProjectTypes.map((type) => {
                const Icon = type.icon;
                const isSelected = selectedProjectType === type.id;
                return (
                  <motion.button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedProjectType(type.id)}
                    whileTap={{ scale: 0.95 }}
                    className={`aspect-square flex flex-col items-center justify-center p-2 rounded-lg border transition-all ${
                      isSelected
                        ? 'bg-red-inferno border-red-inferno text-white'
                        : 'bg-white border-gray-200 text-mystic-navy hover:border-red-inferno/50 hover:scale-[1.02] hover:shadow-md'
                    }`}
                  >
                    <Icon size={24} className={isSelected ? 'text-white' : 'text-mystic-navy'} />
                    <span className={`text-xs mt-1 font-medium text-center leading-tight ${isSelected ? 'text-white' : 'text-mystic-navy'}`}>
                      {type.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Show More Button */}
            {!showMore && (
              <motion.button
                type="button"
                onClick={() => setShowMore(true)}
                className="text-sm text-mystic-navy hover:text-red-inferno font-medium mb-4 transition-colors"
              >
                + Show More Options
              </motion.button>
            )}

            {/* Additional Cards (Expanded) */}
            <AnimatePresence>
              {showMore && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mb-4"
                >
                  <div className="grid grid-cols-3 gap-2">
                    {additionalProjectTypes.map((type) => {
                      const Icon = type.icon;
                      const isSelected = selectedProjectType === type.id;
                      return (
                        <motion.button
                          key={type.id}
                          type="button"
                          onClick={() => setSelectedProjectType(type.id)}
                          whileTap={{ scale: 0.95 }}
                          className={`aspect-square flex flex-col items-center justify-center p-2 rounded-lg border transition-all ${
                            isSelected
                              ? 'bg-red-inferno border-red-inferno text-white'
                              : 'bg-white border-gray-200 text-mystic-navy hover:border-red-inferno/50 hover:scale-[1.02] hover:shadow-md'
                          }`}
                        >
                          <Icon size={24} className={isSelected ? 'text-white' : 'text-mystic-navy'} />
                          <span className={`text-xs mt-1 font-medium text-center leading-tight ${isSelected ? 'text-white' : 'text-mystic-navy'}`}>
                            {type.label}
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Next Button */}
            <motion.button
              type="button"
              onClick={handleNext}
              disabled={!selectedProjectType}
              className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                selectedProjectType
                  ? 'bg-red-inferno text-white hover:bg-red-inferno/90'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Next
              <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        )}

        {/* Step 2: Location */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-heading font-bold text-mystic-navy mb-4">
              Where's your project?
            </h3>

            <div className="mb-6">
              <label htmlFor="location" className="block text-sm font-semibold text-mystic-navy mb-2">
                Project Location
              </label>
              <input
                ref={locationInputRef}
                type="text"
                id="location"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., Whitefield, Bangalore"
                className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-red-inferno focus:border-red-inferno focus:bg-white text-mystic-navy placeholder:text-gray-400"
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleBack}
                className="flex-1 py-3 rounded-lg font-semibold bg-white border-2 border-gray-300 text-mystic-navy hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex-1 py-3 rounded-lg font-semibold bg-red-inferno text-white hover:bg-red-inferno/90 transition-colors flex items-center justify-center gap-2"
              >
                Next
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Contact Info */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-2">
              <span className="text-sm text-gray-500 font-medium">Step 3 of 3</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-mystic-navy mb-6">
              How can we reach you?
            </h3>

            <div className="space-y-4 mb-6">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-mystic-navy mb-2">
                  Full Name <span className="text-red-inferno">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-red-inferno focus:border-red-inferno focus:bg-white text-mystic-navy placeholder:text-gray-400"
                  placeholder="Enter your name"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-mystic-navy mb-2">
                  Phone Number <span className="text-red-inferno">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">+91</span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={getPhoneDisplayValue()}
                    onChange={handlePhoneChange}
                    required
                    className="w-full pl-14 pr-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-red-inferno focus:border-red-inferno focus:bg-white text-mystic-navy placeholder:text-gray-400"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-mystic-navy mb-2">
                  Email Address <span className="text-gray-400 text-xs font-normal">(Optional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-red-inferno focus:border-red-inferno focus:bg-white text-mystic-navy placeholder:text-gray-400"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <Lock size={16} />
              <span>Your info is secure</span>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleBack}
                className="flex-1 py-3 rounded-lg font-semibold bg-white border-2 border-gray-300 text-mystic-navy hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.phone}
                className={`flex-1 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                  isSubmitting || !formData.name || !formData.phone
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-red-inferno text-white hover:bg-red-inferno/90'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Get Free Quote'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

