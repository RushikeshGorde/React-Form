import React from 'react';

const PreviewForm = ({ formData, prevStep, handleSubmit }) => {
  return (
    <div>
      <h2>Step 3: Preview & Submit</h2>
      <div>
        <img src={formData.profilePicture} alt="Profile" />
        <p>Name: {formData.firstName} {formData.middleName} {formData.surname}</p>
        <p>Email: {formData.email}</p>
        <p>Mobile Number: {formData.mobileNumber}</p>
        <p>Date of Birth: {formData.dateOfBirth}</p>
        <p>College Name: {formData.collegeName}</p>
        <p>College Percentage: {formData.collegePercentage}</p>
        <p>College Start Date: {formData.collegeStartDate}</p>
        <p>College End Date: {formData.collegeEndDate}</p>
      </div>
      <button onClick={prevStep}>Previous</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PreviewForm;
