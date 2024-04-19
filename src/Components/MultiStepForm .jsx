import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, Container } from '@mui/material';

const steps = ['Basic Details', 'Education Details', 'Experience Details', 'Preview'];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <BasicDetailsForm />;
      case 1:
        return <EducationDetailsForm />;
      case 2:
        return <ExperienceDetailsForm />;
      case 3:
        return <PreviewForm />;
      default:
        return 'Unknown step';
    }
  };

  const BasicDetailsForm = () => {
    // Implement Basic Details Form component
  };

  const EducationDetailsForm = () => {
    // Implement Education Details Form component
  };

  const ExperienceDetailsForm = () => {
    // Implement Experience Details Form component
  };

  const PreviewForm = () => {
    // Implement Preview Form component
  };

  return (
    <Container>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography>All steps completed - you're finished</Typography>
          </div>
        ) : (
          <div>
            <Typography>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
              <Button variant="contained" onClick={handleNext}>Next</Button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default MultiStepForm;
