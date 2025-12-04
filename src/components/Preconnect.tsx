import { useEffect } from 'react';

const Preconnect = () => {
  useEffect(() => {
    // Adicionar preconnects dinamicamente
    const preconnectLinks = [
      { href: 'https://www.youtube.com', rel: 'preconnect' },
      { href: 'https://fonts.gstatic.com', rel: 'preconnect' },
      { href: 'https://www.google.com', rel: 'preconnect' },
      { href: 'https://static.doubleclick.net', rel: 'preconnect' },
      { href: 'https://jnn-pa.googleapis.com', rel: 'preconnect' }
    ];

    preconnectLinks.forEach(linkConfig => {
      const link = document.createElement('link');
      link.href = linkConfig.href;
      link.rel = linkConfig.rel;
      document.head.appendChild(link);
    });

    return () => {
      // Cleanup se necessário
      preconnectLinks.forEach(linkConfig => {
        const link = document.querySelector(`link[href="${linkConfig.href}"][rel="${linkConfig.rel}"]`);
        if (link) {
          document.head.removeChild(link);
        }
      });
    };
  }, []);

  return null;
};

export default Preconnect;
