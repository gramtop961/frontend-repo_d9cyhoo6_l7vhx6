import React, { useMemo } from 'react';

const imagesTop = [
  'https://images.unsplash.com/photo-1562158070-1aa2f85b38f1?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
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
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1600&auto=format&fit=crop',
];

const Row = ({ images, large }) => {
  const list = useMemo(() => [...images, ...images], [images]);
  return (
    <div className="group" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
      <div className={`flex gap-5 ${large ? 'h-56' : 'h-40'} items-center`}
        style={{
          animation: 'scroll 30s linear infinite',
        }}
      >
        {list.map((src, idx) => (
          <div key={idx} className="shrink-0">
            <img
              src={src}
              alt="Event"
              className={`rounded-[4px] object-cover ${large ? 'w-[360px] h-56' : 'w-[240px] h-40'} transition-transform duration-300 ease-out shadow-sm`}
              style={{
                filter: 'saturate(1.05) contrast(1.05)',
                animation: 'fadeIn 0.8s ease both',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)';
              }}
            />
          </div>
        ))}
      </div>
      <style>{`
        .group:hover > div { animation-play-state: paused; }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

const ImageCarousel = () => {
  return (
    <div className="mt-12 space-y-6">
      <Row images={imagesTop} large />
      <Row images={imagesBottom} />
    </div>
  );
};

export default ImageCarousel;
