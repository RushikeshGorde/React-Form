import React from 'react';

const ProgressBar = ({ steps, currentStep }) => {
  return (
    <div>
      {steps.map((step, index) => (
        <span key={index} style={{ fontWeight: index === currentStep ? 'bold' : 'normal' }}>
          {step}
        </span>
      ))}
    </div>
  );
};

export default ProgressBar;
