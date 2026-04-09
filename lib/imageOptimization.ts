// Image optimization utilities for GreenKids

export const imageConfig = {
  // Default quality settings
  quality: {
    thumbnail: 60,
    banner: 75,
    gallery: 80,
    hero: 85,
  },
  
  // Image dimensions for different use cases
  dimensions: {
    thumbnail: { width: 150, height: 150 },
    card: { width: 300, height: 200 },
    banner: { width: 1200, height: 630 },
    hero: { width: 1920, height: 1080 },
  },
  
  // Supported formats
  formats: ['webp', 'avif', 'jpg', 'png'],
};

export function generateBlurDataURL(src: string): string {
  // Generate a simple blur data URL for placeholder
  return `data:image/svg+xml;base64,${Buffer.from(
    `<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
    </svg>`
  ).toString('base64')}`;
}

export function optimizeImageSrc(src: string, options?: {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpg' | 'png';
}): string {
  const {
    width,
    height,
    quality = 75,
    format = 'webp'
  } = options || {};

  // If using Next.js Image optimization, just return the src
  // Next.js will handle the optimization
  return src;
}

export function getResponsiveSizes(
  type: 'thumbnail' | 'card' | 'banner' | 'hero' = 'card'
): string {
  const sizeMap = {
    thumbnail: '(max-width: 640px) 100vw, 150px',
    card: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px',
    banner: '(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px',
    hero: '(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1920px',
  };

  return sizeMap[type];
}

export function preloadCriticalImages(images: string[]) {
  if (typeof window !== 'undefined') {
    images.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }
}
