import { type ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ConsultationButton from '../components/ConsultationButton';
import GetQuoteButton from '../components/GetQuoteButton';
import TrackingScripts from '../components/TrackingScripts';
import { initializeUTMTracking } from '../utils/utmTracking';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Initialize UTM tracking on every route change
    initializeUTMTracking();
  }, [location.pathname, location.search]);

  // Check if current page is a Package page
  const isPackagePage = location.pathname === '/premium-package' || location.pathname === '/civil-labor-package';

  return (
    <div className="min-h-screen flex flex-col">
      <TrackingScripts />
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <ConsultationButton />
      {isPackagePage && <GetQuoteButton />}
    </div>
  );
}
