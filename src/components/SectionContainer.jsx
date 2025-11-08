import React from 'react';

const SectionContainer = ({ children }) => {
  return (
    <section className="w-full overflow-hidden" style={{ backgroundColor: '#f7f4f0' }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
