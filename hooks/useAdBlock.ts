'use client';

import { useState, useEffect } from 'react';

export function useAdBlock() {
  const [hasAdBlock, setHasAdBlock] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAdBlock = () => {
      // Check for common ad-blocker patterns
      const adBlockDetected = 
        // Check for blocked AdSense script
        !!(window as any).adsbygoogle === false ||
        // Check for blocked elements
        (document.querySelector('.adsbygoogle') as HTMLElement)?.style.display === 'none' ||
        // Check for common ad-blocker classes
        document.body.classList.contains('adblock-enabled') ||
        // Check for blocked requests (simplified)
        typeof (window as any).google_ad_client === 'undefined';

      setHasAdBlock(adBlockDetected);
      setIsLoading(false);
    };

    // Delay check to allow scripts to load
    const timer = setTimeout(checkAdBlock, 1000);

    return () => clearTimeout(timer);
  }, []);

  return { hasAdBlock, isLoading };
}
