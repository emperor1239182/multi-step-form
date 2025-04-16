import { useState } from 'react';
import { Login } from "./login";
import { Subscription } from "../subscription";
import { AddsOn } from "./addsOn";
import { Summary } from "./summary";
import { Thanks } from './appreciation';

export const Navigator = () => {
  const options = [<Login />, <Subscription />, <AddsOn />, <Summary />, <Thanks />];
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigateForward = () => {
    if (currentIndex < options.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const navigateBackward = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const hint = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY'];
  const step = ['STEP 1', 'STEP 2', 'STEP 3', 'STEP 4'];

  return (
    <div className="navigator" >
      {/* Step Indicator */}
      <div className="stepIndicator">
        {[0, 1, 2, 3].map((stepIndex) => (
          <div key={stepIndex} style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem', justifyContent:'space-between'}}>
            {/* Step Circle */}
            <div
              style={{
                width: 35,
                height: 35,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '14px',
                border: '2px solid white',
                backgroundColor: currentIndex === stepIndex ? '#BEE2FD' : 'transparent',
                color: currentIndex === stepIndex ? '#000' : '#fff',
                marginRight: '1rem',
              }}
            >
              {stepIndex + 1}
            </div>

            {/* Step Text */}
            <div className='steps' >
              <div style={{ fontSize: '12px', opacity: 0.8, color:'white'}}>{step[stepIndex]}</div>
              <div style={{ fontWeight: 'bold', fontSize: '14px', color:'white' }}>{hint[stepIndex]}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div style={{ flex: 1 }}>
        {options[currentIndex]}

        {/* Navigation Buttons */}
        <div
          className="nav"
          style={{
            display: currentIndex === options.length - 1 ? 'none' : 'flex',
            justifyContent: 'space-between',
            marginTop: '2rem',
          }}
        >
          <button
            className={currentIndex === 0 ? 'undo' : 'back'}
            onClick={navigateBackward}
            disabled={currentIndex === 0}
          >
            Go Back
          </button>
          <button
            className="next"
            onClick={navigateForward}
            disabled={currentIndex === options.length - 1}
            style={{
              backgroundColor: currentIndex === options.length - 2 ? 'hsl(243, 100%, 62%)' : 'hsl(213, 96%, 18%)',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {currentIndex === options.length - 2 ? 'Confirm' : 'Next Step'}
          </button>
        </div>
      </div>
    </div>
  );
};