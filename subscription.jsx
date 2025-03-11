import { Subs } from "./sub"
import { useState } from "react"
export const Subscription = ()=>{
  const [monthly, setMonthly] = useState(true); 
  console.log("Monthly className:", monthly ? "active" : "");
return (
  <>
    <div className="subscription">
      <span className="heading">Select your plan</span>
      <span className="additionalText">
        You have the option of monthly or yearly billing.
      </span>
      <br />
      <div className="plans">
        {Subs.filter((item) => item.id).map((item) => (
          <div key={item.id} className="billing">
            {item.image} <br /> <br />
            <p style={{ marginBottom: "0px", fontSize: "12px", fontWeight: "bold" }}>
              <span className="description">{item.name}</span> <br />
              <span className="validity">
                {monthly ? item.price : Subs[3].yearlyPrices[item.name.toLowerCase()]}
              </span>
            </p>
          </div>
        ))}
      </div>
      <br />
      <div className="duration">
        {/* Monthly option */}
        
        <span className={monthly ? "active" : ""}>Monthly</span>

        

        {/* Toggle Switch */}
        <label className="switch">
          <input
            type="checkbox"
            checked={!monthly}
            onChange={() => {
              console.log("Toggling monthly. New value:", !monthly); 
              setMonthly(!monthly); 
            }}
          />
          <span className="slider"></span>
        </label>

        {/* Yearly option */}
        <span className={!monthly ? "active" : ""}>Yearly</span>
      </div>
      <br />
      <br />
      <div className="nav">
        <button className="back">Go Back</button>
        <button className="next">Next Step</button>
      </div>
    </div>
  </>
);

}