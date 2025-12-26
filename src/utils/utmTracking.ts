/**
 * UTM Tracking Utility
 * Captures UTM parameters from URL and persists them across page navigation
 */

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

const UTM_STORAGE_KEY = 'sicc_utm_params';
const UTM_EXPIRY_DAYS = 30; // UTM parameters expire after 30 days

/**
 * Get UTM parameters from current URL
 */
export function getUTMFromURL(): UTMParams {
  const params = new URLSearchParams(window.location.search);
  const utmParams: UTMParams = {};

  const utmKeys: (keyof UTMParams)[] = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content'
  ];

  utmKeys.forEach(key => {
    const value = params.get(key);
    if (value) {
      utmParams[key] = value;
    }
  });

  return utmParams;
}

/**
 * Get stored UTM parameters from localStorage
 */
export function getStoredUTM(): UTMParams | null {
  try {
    const stored = localStorage.getItem(UTM_STORAGE_KEY);
    if (!stored) return null;

    const data = JSON.parse(stored);
    
    // Check if expired
    if (data.expiry && new Date().getTime() > data.expiry) {
      localStorage.removeItem(UTM_STORAGE_KEY);
      return null;
    }

    return data.params || null;
  } catch (error) {
    console.error('Error reading stored UTM parameters:', error);
    return null;
  }
}

/**
 * Store UTM parameters in localStorage with expiry
 */
export function storeUTM(params: UTMParams): void {
  try {
    if (Object.keys(params).length === 0) return;

    const expiry = new Date().getTime() + (UTM_EXPIRY_DAYS * 24 * 60 * 60 * 1000);
    const data = {
      params,
      expiry,
      firstSeen: new Date().toISOString()
    };

    localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error storing UTM parameters:', error);
  }
}

/**
 * Get all UTM parameters (from URL or stored)
 * Priority: URL parameters > Stored parameters
 */
export function getAllUTMParams(): UTMParams {
  const urlParams = getUTMFromURL();
  const storedParams = getStoredUTM() || {};

  // If URL has UTM parameters, use them and update storage
  if (Object.keys(urlParams).length > 0) {
    storeUTM(urlParams);
    return urlParams;
  }

  // Otherwise, return stored parameters
  return storedParams;
}

/**
 * Initialize UTM tracking - should be called on app load
 */
export function initializeUTMTracking(): void {
  const urlParams = getUTMFromURL();
  
  // If URL has UTM parameters, store them
  if (Object.keys(urlParams).length > 0) {
    storeUTM(urlParams);
  }

  // Also check on URL changes (for SPA navigation)
  // This will be handled by the hook/component that uses this
}

/**
 * Clear stored UTM parameters
 */
export function clearUTM(): void {
  try {
    localStorage.removeItem(UTM_STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing UTM parameters:', error);
  }
}

/**
 * Format UTM parameters for form submission
 * Returns an object with all UTM parameters that can be appended to FormData
 */
export function formatUTMForSubmission(): Record<string, string> {
  const params = getAllUTMParams();
  const formatted: Record<string, string> = {};

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      formatted[key] = value;
    }
  });

  return formatted;
}

