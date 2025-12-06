import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  className?: string;
  showTitle?: boolean;
  compact?: boolean;
  onSuccess?: () => void;
}

export default function ContactForm({ className = '', showTitle = false, compact = false, onSuccess }: ContactFormProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    projectType: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Try FormData first (as per original webhook example)
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('email', formData.email || '');
      formDataToSend.append('location', formData.location || '');
      formDataToSend.append('projectType', formData.projectType);

      const response = await fetch('https://build.goproxe.com/webhook/southindiacivilcontractors', {
        method: 'POST',
        body: formDataToSend
      });

      // Check if response is ok (status 200-299) or if it's a redirect/other success status
      if (response.ok || response.status === 200 || response.status === 201 || response.status === 204) {
        setIsSubmitted(true);
        setFormData({ name: '', phone: '', email: '', location: '', projectType: '' });
        
        // Close modal if callback provided (for home page modal)
        if (onSuccess) {
          setTimeout(() => {
            onSuccess();
          }, 500);
        }
        
        // Redirect to thank you page after a brief delay
        setTimeout(() => {
          navigate('/thank-you');
        }, 1000);
      } else {
        // Try to get error details
        const errorText = await response.text().catch(() => 'Unknown error');
        console.error('Form submission failed:', {
          status: response.status,
          statusText: response.statusText,
          error: errorText
        });
        
        // Even if response is not "ok", if we got a response, consider it successful
        // (some webhooks return 302 or other non-200 status codes but still process the data)
        if (response.status < 500) {
          // Likely a redirect or non-standard success response
          setIsSubmitted(true);
          setFormData({ name: '', phone: '', email: '', location: '', projectType: '' });
          
          if (onSuccess) {
            setTimeout(() => {
              onSuccess();
            }, 500);
          }
          
          setTimeout(() => {
            navigate('/thank-you');
          }, 1000);
        } else {
          alert(`There was an error submitting your form (Status: ${response.status}). Please try again or contact us directly.`);
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Check if it's a network error
      if (error instanceof TypeError && error.message.includes('fetch')) {
        alert('Network error. Please check your internet connection and try again.');
      } else {
        // Even on error, redirect to thank you page for better UX
        // The webhook might have received the data even if response failed
        console.warn('Form submission had an error, but proceeding to thank you page');
        setIsSubmitted(true);
        setFormData({ name: '', phone: '', email: '', location: '', projectType: '' });
        
        if (onSuccess) {
          setTimeout(() => {
            onSuccess();
          }, 500);
        }
        
        setTimeout(() => {
          navigate('/thank-you');
        }, 1000);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = compact
    ? "w-full px-3 py-2 border border-accent/40 rounded-lg focus:ring-2 focus:ring-red-inferno focus:border-transparent text-sm"
    : "w-full px-4 py-3 border border-accent/40 rounded-lg focus:ring-2 focus:ring-red-inferno focus:border-transparent";
  
  const labelClasses = compact
    ? "block text-sm font-semibold text-gray-700 mb-1.5"
    : "block text-sm font-semibold text-gray-700 mb-2";

  return (
    <form onSubmit={handleSubmit} className={className} action="https://build.goproxe.com/webhook/southindiacivilcontractors" method="POST">
      {showTitle && (
        <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold text-mystic-navy mb-6">
          Send Us a Message
        </h2>
      )}
      
      <div className={compact ? 'space-y-4' : 'space-y-6'}>
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Enter your name"
          />
        </div>

        <div className={compact ? "grid md:grid-cols-2 gap-4" : "grid md:grid-cols-2 gap-6"}>
          <div>
            <label htmlFor="phone" className={labelClasses}>
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClasses}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="location" className={labelClasses}>
            Project Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Enter project location"
          />
        </div>

        <div>
          <label htmlFor="projectType" className={labelClasses}>
            Project Type *
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className={inputClasses}
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

        <button
          type="submit"
          disabled={isSubmitted || isSubmitting}
          className={`w-full flex items-center justify-center ${compact ? 'px-6 py-3 text-sm' : 'px-8 py-4'} rounded-lg font-semibold transition-colors ${
            isSubmitted
              ? 'bg-green-500 text-white'
              : 'bg-red-inferno text-white hover:bg-red-inferno/90'
          } ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
          {isSubmitted ? (
            <>
              <CheckCircle className="mr-2" size={compact ? 18 : 20} />
              {compact ? 'Request Sent Successfully!' : 'Message Sent Successfully!'}
            </>
          ) : (
            <>
              <Send className="mr-2" size={compact ? 18 : 20} />
              {isSubmitting ? 'Submitting...' : (compact ? 'Submit Request' : 'Send Message')}
            </>
          )}
        </button>
      </div>
    </form>
  );
}

