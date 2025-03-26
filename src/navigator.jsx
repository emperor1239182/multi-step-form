import { useState } from 'react';
import { Login } from "./login";
import { Subscription } from "../subscription";
import { AddsOn } from "./addsOn";
import { Summary } from "./summary";

export const Navigator = () => {
    const options = [<Login />, <Subscription />, <AddsOn />, <Summary />];
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
            <div className="nav">
                <button className="back" onClick={navigateBackward} disabled={currentIndex === 0}>
                    Go Back
                </button>
                <button className="next" onClick={navigateForward} disabled={currentIndex === options.length - 1}>
                    Next Step
                </button>
            </div>
        </div>
    );
};
