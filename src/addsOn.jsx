import { Info } from "../Data";
import { Navigator } from "./navigator";
export const AddsOn = ()=>{
    const {monthly, handleData} = Info(); 
    return(
        <>
        <div className="ads-on">
        <span className="heading">Pick add-ons</span> 
        <span className="additionalText">Add-ons help enhance your gaming experience</span> <br/>
        <div className="services">

            <div className="offers">
            <span style={{display:'flex', gap:'10px'}}>
                    <input type="checkbox" onChange={(e) => {
        if (e.target.checked) {
            // Get only the text content of '.description'
            handleData(e.target.nextSibling.querySelector('.description').textContent);
        } else {
            // Reset or handle unchecked state if needed
            handleData(null);
        }
    }}></input>
                    <span style={{display:'flex', flexDirection:'column'}}>
                    <span className="description">Online service</span> 
                    <span className="validity">Access to multiplayer games</span>
                    </span>
                </span>
                {monthly ?  
                <p className="price">+$2/mo</p> : 
                <p className="price">+$10/yr</p>
            }
                
            </div> <br/>
            
            <div className="offers">
            <span style={{display:'flex', gap:'10px'}}>
                    <input type="checkbox" onChange={(e) => {
        if (e.target.checked) {
            // Get only the text content of '.description'
            handleData(e.target.nextSibling.querySelector('.description').textContent);
        } else {
            // Reset or handle unchecked state if needed
            handleData(null);
        }
    }}></input>
                    <span style={{display:'flex', flexDirection:'column'}}>
                    <span className="description">Larger storage</span> 
                    <span className="validity">Extra 1TB of cloud save</span>
                    </span>
                </span>
                {monthly ? 
                <p className="price">+$2/mo</p> : 
                <p className="price">+$20/yr</p>
            }
            </div> <br/>

            <div className="offers">
                <span style={{display:'flex', gap:'10px'}}>
                    <input type="checkbox" onChange={(e) => {
        if (e.target.checked) {
            // Get only the text content of '.description'
            handleData(e.target.nextSibling.querySelector('.description').textContent);
        } else {
            // Reset or handle unchecked state if needed
            handleData(null);
        }
    }}></input>
                    <span style={{display:'flex', flexDirection:'column'}}>
                    <span className="description">Customizable profile</span> 
                    <span className="validity">Custom theme on your profile</span>
                    </span>
                </span>
                {monthly ? 
                <p className="price">+$2/mo</p> : 
                <p className="price">+$20/yr</p>
            }
            </div> <br/>
        </div>
        </div>
        </>
    )
}