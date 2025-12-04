import React, { useState, useRef, useEffect } from 'react';

interface LazyYouTubeProps {
  videoId: string;
  title: string;
  className?: string;
}

const LazyYouTube: React.FC<LazyYouTubeProps> = ({ videoId, title, className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const iframeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={iframeRef} className={`relative ${className}`}>
      {!isVisible && (
        <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white">Carregando vídeo...</p>
          </div>
        </div>
      )}
      
      {isVisible && (
        <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-10">
              <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
            onLoad={handleLoad}
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
};

export default LazyYouTube;
