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

    // Meta Pixel (Facebook Pixel)
    const metaPixelId = '1534114824512026';
    const metaPixelScript = document.createElement('script');
    metaPixelScript.innerHTML = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${metaPixelId}');
fbq('track', 'PageView');`;
    document.head.appendChild(metaPixelScript);

    // Meta Pixel noscript - Add to body
    const metaPixelNoscript = document.createElement('noscript');
    const metaPixelImg = document.createElement('img');
    metaPixelImg.height = 1;
    metaPixelImg.width = 1;
    metaPixelImg.style.display = 'none';
    metaPixelImg.src = `https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`;
    metaPixelNoscript.appendChild(metaPixelImg);
    document.body.insertBefore(metaPixelNoscript, document.body.firstChild);
  }, []);

  return null;
}
