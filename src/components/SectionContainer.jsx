import React from 'react';

const SectionContainer = ({ children }) => {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-">
      {children}
    </div>
  );
};

export default SectionContainer;
