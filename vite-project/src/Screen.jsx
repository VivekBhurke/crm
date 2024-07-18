import React, { useState } from 'react'
import './StepIndex.css'

import Screen1 from './Screens/Screen1'
import Screen2 from './Screens/Screen2'
import Screen3 from './Screens/Screen3'

const Screen = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const handleStepClick = (step) => {
        console.log(currentStep);
        if (currentStep == 1){
            setCurrentStep(2)
        console.log(currentStep);

            return
        }
        if (step === 2) {
          setCurrentStep(3);
        } else {
          setCurrentStep(step);
        }
      };
    return (
        <div className='mainDiv'>
            <div className="step-indicator">
                {[1, 2, 3].map((step) => (
                    <React.Fragment key={step}>
                        <div
                            className={`step ${step <= currentStep ? 'completed' : ''} ${step === 2 && currentStep === 3 ? 'orange' : ''}`}
                            onClick={() => handleStepClick(step)}
                        >
                            {step}
                        </div>
                        {step < 3 && <div className="connector"></div>}
                    </React.Fragment>
                ))}
            </div>
            {currentStep==1 && <Screen1/>
            }
            {currentStep==2 && <Screen2/>
            }
            {currentStep==3 && <Screen3/>
            }
        </div>
    )
}

export default Screen
