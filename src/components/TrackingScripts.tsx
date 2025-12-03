import { useEffect } from 'react';

/**
 * TrackingScripts Component
 * 
 * Centralized location for all tracking scripts and analytics codes.
 * Add new tracking scripts here for easy management.
 */

export default function TrackingScripts() {
  useEffect(() => {
    // Google Analytics (gtag.js)
    const googleAnalyticsId = 'G-23B45KKLF0';
    
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
    document.head.appendChild(script);

    // Initialize Google Analytics
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    (window as any).gtag = gtag;
    gtag('js', new Date());
    gtag('config', googleAnalyticsId);
  }, []);

  return null;
}
