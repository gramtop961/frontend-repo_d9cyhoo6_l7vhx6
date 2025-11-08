import React from 'react';

const ActionButtons = () => {
  return (
    <div className="mt-8 flex items-center justify-center gap-4">
      <a
        href="#start"
        className="h-[50px] inline-flex items-center justify-center px-6 bg-black text-white rounded-md text-sm tracking-wide uppercase transition-colors"
      >
        START PROJECT
      </a>
      <a
        href="#gallery"
        className="h-[50px] inline-flex items-center justify-center px-6 border border-black text-black rounded-md text-sm tracking-wide uppercase transition-colors duration-300 hover:bg-black hover:text-white"
      >
        VIEW GALLERY
      </a>
    </div>
  );
};

export default ActionButtons;
