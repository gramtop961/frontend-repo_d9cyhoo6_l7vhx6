import React from 'react';

const SectionHeader = () => {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <h2
        className="text-[48px] leading-tight tracking-tight mb-4 text-[#1a1a1a]"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        Our Wall of Fame
      </h2>
      <p className="text-[20px] text-gray-500 leading-relaxed">
        Great work happens with great people. Meet the visionaries, partners, and moments that shape CB Consulting & Media.
      </p>
    </div>
  );
};

export default SectionHeader;
