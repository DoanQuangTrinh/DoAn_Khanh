'use client';

import { useEffect, useRef } from 'react';

interface AdSenseBannerProps {
  adSlot: string;
  adFormat?: string;
  className?: string;
  fullWidthResponsive?: boolean;
}

export default function AdSenseBanner({
  adSlot,
  adFormat = 'auto',
  className = '',
  fullWidthResponsive = true,
}: AdSenseBannerProps) {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && (window as { adsbygoogle?: unknown[] }).adsbygoogle) {
        const winAdsbygoogle = (window as { adsbygoogle?: unknown[] }).adsbygoogle;
        if (winAdsbygoogle) {
          winAdsbygoogle.push = winAdsbygoogle.push || [];
          winAdsbygoogle.push({});
        }
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2786106242865268"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
      <style jsx>{`
        .ad-container {
          margin: 1rem 0;
          text-align: center;
        }
        @media (max-width: 768px) {
          .ad-container {
            margin: 0.5rem 0;
          }
        }
      `}</style>
    </div>
  );
}
