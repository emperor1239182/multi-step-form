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

    return (
        <div className='navigator'>
            {options[currentIndex]}
            <div className="nav" style={{ display: currentIndex === options.length - 1 ? 'none' : ''}}>
                <button className={currentIndex === 0 ? "undo" : "back"} onClick={navigateBackward} disabled={currentIndex === 0}>
                    Go Back
                </button>
                <button className="next" onClick={navigateForward} disabled={currentIndex === options.length - 1}
                style={{ backgroundColor: currentIndex === options.length - 2 ? 'hsl(243, 100%, 62%)' : '' }}>
                    {currentIndex === options.length - 2 ? 'Confirm' : 'Next Step'}
                </button>
            </div>
        </div>
    );
};
