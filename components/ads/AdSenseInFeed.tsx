'use client';

import { useEffect, useRef } from 'react';

interface AdSenseInFeedProps {
  adSlot: string;
  className?: string;
}

export default function AdSenseInFeed({ adSlot, className = '' }: AdSenseInFeedProps) {
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
    <div className={`in-feed-ad ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-2786106242865268"
        data-ad-slot={adSlot}
      />
      <style jsx>{`
        .in-feed-ad {
          margin: 2rem 0;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 8px;
        }
        @media (max-width: 768px) {
          .in-feed-ad {
            margin: 1rem 0;
            padding: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}
