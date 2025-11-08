import React, { useMemo } from 'react';

// Example images. Replace with brand-specific assets if desired.
const imagesTop = [
  'https://images.unsplash.com/photo-1562158070-1aa2f85b38f1?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975954732-35dd22299652?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975594081-8a1c84b90df6?q=80&w=1600&auto=format&fit=crop',
];

const imagesBottom = [
  'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520974735194-5a6f3d51f0d3?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop',
];

const Row = ({ images, direction = 'left', large = false }) => {
  const list = useMemo(() => [...images, ...images], [images]); // duplicate for seamless loop
  return (
    <div className="relative group select-none" style={{ maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)' }}>
      {/* gradient masks for subtle edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#f8f5f2] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#f8f5f2] to-transparent" />

      <div
        className={`flex gap-5 items-center ${large ? 'h-[320px]' : 'h-[220px]'} will-change-transform`}
        style={{
          animation: `${direction === 'left' ? 'marqueeLeft' : 'marqueeRight'} 30s linear infinite`,
        }}
      >
        {list.map((src, idx) => (
          <div key={idx} className="shrink-0">
            <img
              src={src}
              alt="Gallery item"
              className={`rounded-[8px] object-cover transition-transform duration-300 ease-out shadow-sm ${large ? 'h-[320px] w-[480px]' : 'h-[220px] w-[330px]'}`}
              style={{
                filter: 'saturate(1.03) contrast(1.04)',
                animation: 'fadeIn 0.8s ease both',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
              }}
            />
          </div>
        ))}
      </div>

      <style>{`
        .group:hover > div { animation-play-state: paused; }
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

const ImageCarousel = () => {
  return (
    <div className="mt-12 space-y-6">
      <Row images={imagesTop} direction="left" large />
      <Row images={imagesBottom} direction="right" />
    </div>
  );
};

export default ImageCarousel;
