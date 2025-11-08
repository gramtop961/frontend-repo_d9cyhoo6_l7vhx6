import React from 'react';

const SectionHeader = () => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2
        className="text-[40px] sm:text-[44px] md:text-[48px] leading-tight tracking-tight mb-4 text-[#111]"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        Our Wall of Fame
      </h2>
      <p className="text-[18px] sm:text-[19px] md:text-[20px] text-gray-500 leading-relaxed">
        Great work happens with great people…
      </p>
    </div>
  );
};

export default SectionHeader;
