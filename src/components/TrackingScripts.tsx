import { useEffect } from 'react';

/**
 * TrackingScripts Component
 * 
 * Centralized location for all tracking scripts and analytics codes.
 * Add new tracking scripts here for easy management.
 */

export default function TrackingScripts() {
  useEffect(() => {
    // Google Tag Manager - Add to head as high as possible
    const gtmId = 'GTM-5XKGDSPD';
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`;
    document.head.insertBefore(gtmScript, document.head.firstChild);

    // Google Tag Manager noscript - Add to body immediately after opening tag
    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);

    // Microsoft Clarity
    const clarityId = 'ufmvxb7e9r';
    const clarityScript = document.createElement('script');
    clarityScript.type = 'text/javascript';
    clarityScript.innerHTML = `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${clarityId}");`;
    document.head.appendChild(clarityScript);
  }, []);

  return null;
}
