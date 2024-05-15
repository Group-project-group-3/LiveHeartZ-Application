import React from 'react';

const LoadingSpinner = () => {
  const spinnerStyle = {
    borderTopColor: 'blue',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  };

  return (
    <div className="flex justify-center items-center h-screen" aria-label="Loading">
      <div
        className="animate-spin rounded-full h-32 w-32 border-2"
        style={spinnerStyle}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
