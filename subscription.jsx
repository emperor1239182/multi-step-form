import { Subs } from "./sub"
import { useState } from "react"

export const Subscription = ()=>{
  const [monthly, setMonthly ] = useState(false)
    return(
        <>
        <div className="personalInfo">
        <span className="heading">Select your plan</span> 
        <span className="additionalText">You have the option of monthly or yearly billing.</span> <br/>
        <div className="plans">
          {Object.keys(Subs.images).map((item)=> (
            <div key={item} className="billing">
                {Subs.images[item]} <br/> <br/>
                <p style={{marginBottom:'0px', fontSize:'12px', fontWeight:'bold'}}>
                <span className="description">{Subs.names[item]}</span> <br/>
                <span className="validity">{Subs.monthlyPrices[item]}</span>
                </p>
            </div>
          ))}
            </div> <br/>
            <div className="duration">
      <span className={ setMonthly ? "active" : ""}>Monthly</span>
      <label className="switch">
        <input
          type="checkbox"
          checked={monthly}
          onChange={() => setMonthly(!monthly)}
        />
        <span className="slider"></span>
      </label>
      <span className={ monthly ? "active" : ""}>Yearly</span>
                
                </div> <br/> <br/> <br/> <br/>
                <div className="nav">
                <button className="back">Go Back</button>
                <button className="next">Next Step</button>
                </div>
                

            



        </div>
        </>
    )
}