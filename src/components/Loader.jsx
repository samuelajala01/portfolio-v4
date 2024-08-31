import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="w-16 h-16 border-4 border-blue-600 border-solid rounded-full animate-spin border-t-transparent"></div>
    </div>
  );
};

export default Loader;