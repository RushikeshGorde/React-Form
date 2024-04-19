import React, { useContext } from 'react'
import { multiStepContext } from './StepContext'
import FirstStep from './Components/FirstStep'
import SecondStep from './Components/SecondStep'
import ThirdStep from './Components/ThirdStep'
import PreviewData from './Components/Preview'
import DisplayData from './Components/DisplayData'
import { Step, StepLabel, Stepper } from '@mui/material'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const App = () => {
  const {currentStep, finalData} = useContext (multiStepContext)

  function showStep(step){
    switch(step){
      case 1:
        return <FirstStep/>
      case 2:
        return <SecondStep/>
      case 3:
        return <ThirdStep/>
      case 4:
        return <PreviewData/>
      case 5:
        return <DisplayData/>
    }
  }
  useEffect(() => {
    AOS.init({
        duration: 800,
        once: false,
    })
}, [])
  return (
    <>
      <div data-aos="flip-up" className="center-stepper se">
        <Stepper className='bar' style={{width:'250px'}} activeStep={currentStep-1} orientation='vertical'>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          
        </Stepper>
      </div>
      {showStep(currentStep)}
      <br />
      {finalData.length>0 ? <DisplayData/> :''}
    </>
  )
}

export default App
