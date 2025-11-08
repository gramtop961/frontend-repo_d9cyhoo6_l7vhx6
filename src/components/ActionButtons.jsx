import React from 'react';

const ActionButtons = () => {
  return (
    <div className="mt-8 flex items-center justify-center gap-4">
      <button
        className="h-[50px] px-6 bg-[#1a1a1a] text-white rounded-md text-sm tracking-wide uppercase"
      >
        START PROJECT
      </button>
      <button
        className="h-[50px] px-6 border border-[#1a1a1a] text-[#1a1a1a] rounded-md text-sm tracking-wide uppercase transition-colors duration-300 hover:bg-[#1a1a1a] hover:text-white"
      >
        VIEW GALLERY
      </button>
    </div>
  );
};

export default ActionButtons;
