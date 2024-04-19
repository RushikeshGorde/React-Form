import React from 'react';

const EducationForm = ({ formData, handleChange, prevStep, nextStep }) => {
  return (
    <div>
      <h2>Step 2: Education Details</h2>
      <input type="text" name="collegeName" value={formData.collegeName} onChange={handleChange} />
      <input type="number" name="collegePercentage" value={formData.collegePercentage} onChange={handleChange} />
      <input type="date" name="collegeStartDate" value={formData.collegeStartDate} onChange={handleChange} />
      <input type="date" name="collegeEndDate" value={formData.collegeEndDate} onChange={handleChange} />
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default EducationForm;
