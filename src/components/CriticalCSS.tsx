import { useEffect } from 'react';

const CriticalCSS = () => {
  useEffect(() => {
    // CSS crítico inline para above-the-fold
    const criticalCSS = `
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        background-color: #000;
        color: #fff;
      }
      .min-h-screen {
        min-height: 100vh;
      }
      .relative {
        position: relative;
      }
      .absolute {
        position: absolute;
      }
      .inset-0 {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
      .w-full {
        width: 100%;
      }
      .h-full {
        height: 100%;
      }
      .object-cover {
        object-fit: cover;
      }
      .z-10 {
        z-index: 10;
      }
      .flex {
        display: flex;
      }
      .items-center {
        align-items: center;
      }
      .container {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-left: 1rem;
        padding-right: 1rem;
      }
      @media (min-width: 768px) {
        .container {
          max-width: 768px;
        }
        .md\\:block {
          display: block;
        }
        .md\\:hidden {
          display: none;
        }
        .md\\:min-h-\\[700px\\] {
          min-height: 700px;
        }
        .md\\:w-2\\/3 {
          width: 66.666667%;
        }
        .md\\:ml-8 {
          margin-left: 2rem;
        }
      }
      .text-4xl {
        font-size: 2.25rem;
        line-height: 2.5rem;
      }
      .font-bold {
        font-weight: 700;
      }
      .text-white {
        color: #fff;
      }
      .mb-6 {
        margin-bottom: 1.5rem;
      }
      .text-lg {
        font-size: 1.125rem;
        line-height: 1.75rem;
      }
      .gap-3 {
        gap: 0.75rem;
      }
      .px-8 {
        padding-left: 2rem;
        padding-right: 2rem;
      }
      .shadow-lg {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }
      .border-2 {
        border-width: 2px;
      }
      .border-white {
        border-color: #fff;
      }
      .hover\\:bg-white:hover {
        background-color: #fff;
      }
      .hover\\:text-black:hover {
        color: #000;
      }
      .rounded-full {
        border-radius: 9999px;
      }
      .transition-all {
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
      }
    `;

    // Adicionar CSS crítico ao head
    const styleElement = document.createElement('style');
    styleElement.textContent = criticalCSS;
    styleElement.setAttribute('data-critical', 'true');
    document.head.appendChild(styleElement);

    // Carregar CSS completo de forma assíncrona
    const linkElement = document.createElement('link') as HTMLLinkElement;
    linkElement.rel = 'preload';
    (linkElement as any).as = 'style';
    linkElement.onload = function() {
      this.rel = 'stylesheet';
    };
    linkElement.href = '/assets/index-DJpgLB-c.css';
    document.head.appendChild(linkElement);

    return () => {
      // Cleanup se necessário
      const criticalStyle = document.querySelector('style[data-critical="true"]');
      if (criticalStyle) {
        document.head.removeChild(criticalStyle);
      }
    };
  }, []);

  return null;
};

export default CriticalCSS;
