import React from 'react';

const BasicInfoForm = ({ formData, handleChange, nextStep }) => {
  return (
    <div>
      <div className="Basic-form">
      <h2>Step 1: Basic Information</h2>
      <form action="" className='form-1'>
      <input type="file" name="profilePicture" onChange={handleChange} /> 
      <label htmlFor="">First Name</label><br />
      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      <br />
      <label htmlFor="">Midle Name</label> <br />
      <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} /> <br />
      <label htmlFor="">Last Name</label> <br />
      <input type="text" name="surname" value={formData.surname} onChange={handleChange} /> <br />
      <label htmlFor="">E-mail</label><br />
      <input type="email" name="email" value={formData.email} onChange={handleChange} /> <br />
      <label htmlFor="">Mobile</label><br />
      <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} /> <br />
      <label htmlFor="">Date-Of-Birth</label><br />
      <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} /><br />
      <button onClick={nextStep}>Next</button>
      </form>
      </div>
    </div>
  );
};

export default BasicInfoForm;
