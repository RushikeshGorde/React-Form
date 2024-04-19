// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import {
//   Stepper,
//   Step,
//   StepLabel,
//   Button,
//   Typography,
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   FormHelperText,
//   Container,
//   Grid,
//   CircularProgress,
// } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   form: {
//     marginTop: theme.spacing(2),
//     marginBottom: theme.spacing(2),
//   },
//   buttons: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginTop: theme.spacing(2),
//   },
//   button: {
//     marginTop: theme.spacing(3),
//     marginRight: theme.spacing(1),
//   },
// }));

// function getSteps() {
//   return ['Basic Information', 'Education', 'Experience', 'Preview'];
// }

// function BasicInformationForm({ formData, handleChange }) {
//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           required
//           id="firstName"
//           name="firstName"
//           label="First Name"
//           fullWidth
//           value={formData.firstName}
//           onChange={handleChange}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           required
//           id="lastName"
//           name="lastName"
//           label="Last Name"
//           fullWidth
//           value={formData.lastName}
//           onChange={handleChange}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           required
//           id="email"
//           name="email"
//           label="Email"
//           fullWidth
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           required
//           id="dateOfBirth"
//           name="dateOfBirth"
//           label="Date of Birth"
//           type="date"
//           fullWidth
//           InputLabelProps={{ shrink: true }}
//           value={formData.dateOfBirth}
//           onChange={handleChange}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           required
//           id="mobileNumber"
//           name="mobileNumber"
//           label="Mobile Number"
//           fullWidth
//           value={formData.mobileNumber}
//           onChange={handleChange}
//         />
//       </Grid>
//     </Grid>
//   );
// }

// function EducationForm({ formData, handleChange }) {
//   const [educationList, setEducationList] = useState([{ collegeName: '', percentage: '', startYear: '', endYear: '' }]);

//   const handleEducationChange = (index, e) => {
//     const { name, value } = e.target;
//     const newList = [...educationList];
//     newList[index][name] = value;
//     setEducationList(newList);
//   };

//   const handleAddEducation = () => {
//     setEducationList([...educationList, { collegeName: '', percentage: '', startYear: '', endYear: '' }]);
//   };

//   const handleRemoveEducation = (index) => {
//     const newList = [...educationList];
//     newList.splice(index, 1);
//     setEducationList(newList);
//   };

//   return (
//     <>
//       {educationList.map((education, index) => (
//         <Grid container spacing={2} key={index}>
//           <Grid item xs={12}>
//             <TextField
//               required
//               name="collegeName"
//               label="College Name"
//               fullWidth
//               value={education.collegeName}
//               onChange={(e) => handleEducationChange(index, e)}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               name="percentage"
//               label="Percentage"
//               fullWidth
//               value={education.percentage}
//               onChange={(e) => handleEducationChange(index, e)}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               name="startYear"
//               label="Start Year"
//               type="number"
//               fullWidth
//               value={education.startYear}
//               onChange={(e) => handleEducationChange(index, e)}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               name="endYear"
//               label="End Year"
//               type="number"
//               fullWidth
//               value={education.endYear}
//               onChange={(e) => handleEducationChange(index, e)}
//             />
//           </Grid>
//           {index > 0 && (
//             <Grid item xs={12}>
//               <Button variant="outlined" color="secondary" onClick={() => handleRemoveEducation(index)}>
//                 Remove
//               </Button>
//             </Grid>
//           )}
//         </Grid>
//       ))}
//       <Button variant="contained" color="primary" onClick={handleAddEducation}>
//         Add Education
//       </Button>
//     </>
//   );
// }

// function ExperienceForm({ formData, handleChange }) {
//   const [experienceList, setExperienceList] = useState([{ companyName: '', years: '' }]);

//   const handleExperienceChange = (index, e) => {
//     const { name, value } = e.target;
//     const newList = [...experienceList];
//     newList[index][name] = value;
//     setExperienceList(newList);
//   };

//   const handleAddExperience = () => {
//     setExperienceList([...experienceList, { companyName: '', years: '' }]);
//   };

//   const handleRemoveExperience = (index) => {
//     const newList = [...experienceList];
//     newList.splice(index, 1);
//     setExperienceList(newList);
//   };

//   return (
//     <>
//       {experienceList.map((experience, index) => (
//         <Grid container spacing={2} key={index}>
//           <Grid item xs={12}>
//             <TextField
//               required
//               name="companyName"
//               label="Company Name"
//               fullWidth
//               value={experience.companyName}
//               onChange={(e) => handleExperienceChange(index, e)}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               name="years"
//               label="Years of Experience"
//               type="number"
//               fullWidth
//               value={experience.years}
//               onChange={(e) => handleExperienceChange(index, e)}
//             />
//           </Grid>
//           {index > 0 && (
//             <Grid item xs={12}>
//               <Button variant="outlined" color="secondary" onClick={() => handleRemoveExperience(index)}>
//                 Remove
//               </Button>
//             </Grid>
//           )}
//         </Grid>
//       ))}
//       <Button variant="contained" color="primary" onClick={handleAddExperience}>
//         Add Experience
//       </Button>
//     </>
//   );
// }

// function Preview({ formData }) {
//   return (
//     <>
//       <Typography variant="h6">Preview</Typography>
//       <Typography>First Name: {formData.firstName}</Typography>
//       <Typography>Last Name: {formData.lastName}</Typography>
//       <Typography>Email: {formData.email}</Typography>
//       <Typography>Date of Birth: {formData.dateOfBirth}</Typography>
//       <Typography>Mobile Number: {formData.mobileNumber}</Typography>
//       <Typography>Education:</Typography>
//       {formData.education.map((education, index) => (
//         <div key={index}>
//           <Typography>{College Name: ${education.collegeName}}</Typography>
//           <Typography>{Percentage: ${education.percentage}}</Typography>
//           <Typography>{Start Year: ${education.startYear}}</Typography>
//           <Typography>{End Year: ${education.endYear}}</Typography>
//         </div>
//       ))}
//       <Typography>Experience:</Typography>
//       {formData.experience.map((experience, index) => (
//         <div key={index}>
//           <Typography>{Company Name: ${experience.companyName}}</Typography>
//           <Typography>{Years of Experience: ${experience.years}}</Typography>
//         </div>
//       ))}
//     </>
//   );
// }

// export default function MultiStepForm() {
//   const classes = useStyles();
//   const [activeStep, setActiveStep] = useState(0);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     dateOfBirth: '',
//     mobileNumber: '',
//     education: [{ collegeName: '', percentage: '', startYear: '', endYear: '' }],
//     experience: [{ companyName: '', years: '' }],
//   });

//   const steps = getSteps();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleFinish = () => {
//     // Submit the form data
//     console.log(formData);
//   };

//   const getStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return (
//           <BasicInformationForm formData={formData} handleChange={handleChange} />
//         );
//       case 1:
//         return (
//           <EducationForm formData={formData} handleChange={handleChange} />
//         );
//       case 2:
//         return (
//           <ExperienceForm formData={formData} handleChange={handleChange} />
//         );
//       case 3:
//         return (
//           <Preview formData={formData} />
//         );
//       default:
//         return 'Unknown step';
//     }
//   };

//   return (
//     <div className={classes.root}>
//       <Stepper activeStep={activeStep}>
//         {steps.map((label, index) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//       <div>
//         <div>
//           {activeStep === steps.length ? (
//             <div>
//               <Typography className={classes.instructions}>
//                 All steps completed
//               </Typography>
//               <Button onClick={handleFinish} className={classes.button}>
//                 Finish
//               </Button>
//             </div>
//           ) : (
//             <div>
//               <Typography className={classes.instructions}>
//                 {getStepContent(activeStep)}
//               </Typography>
//               <div className={classes.buttons}>
//                 <Button
//                   disabled={activeStep === 0}
//                   onClick={handleBack}
//                   className={classes.button}
//                 >
//                   Back
//                 </Button>
//                 {activeStep === steps.length - 1 ? (
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={handleFinish}
//                     className={classes.button}
//                   >
//                     Finish
//                   </Button>
//                 ) : (
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={handleNext}
//                     className={classes.button}
//                   >
//                     Next
//                   </Button>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



// // import React, { useState } from 'react';

// // const MultiStepForm = () => {
// //   const [step, setStep] = useState(1);
// //   const totalSteps = 3; // Total number of steps

// //   const nextStep = () => {
// //     if (step < totalSteps) {
// //       setStep(step + 1);
// //     }
// //   };

// //   const prevStep = () => {
// //     if (step > 1) {
// //       setStep(step - 1);
// //     }
// //   };

// //   const submitForm = () => {
// //     // Here you can submit the form data
// //     alert('Form submitted successfully!');
// //     // Reset form or redirect user
// //   };

// //   return (
// //     <div>
// //       <div className="progress-bar">
// //         <div
// //           className="progress"
// //           style={{ width: `${(step / totalSteps) * 100}%` }}
// //         ></div>
// //       </div>
// //       <div className="step">
// //         {step === 1 && (
// //           <div>
// //             Step 1:
// //             <input type="text" placeholder="Field 1" />
// //             <button onClick={nextStep}>Next</button>
// //           </div>
// //         )}
// //         {step === 2 && (
// //           <div>
// //             Step 2:
// //             <input type="text" placeholder="Field 2" />
// //             <button onClick={prevStep}>Previous</button>
// //             <button onClick={nextStep}>Next</button>
// //           </div>
// //         )}
// //         {step === 3 && (
// //           <div>
// //             Step 3:
// //             <input type="text" placeholder="Field 3" />
// //             <button onClick={prevStep}>Previous</button>
// //             <button onClick={submitForm}>Submit</button>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default MultiStepForm;
