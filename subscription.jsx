import { Subs } from "./sub"
export const Subscription = ()=>{
    return(
        <>
        <div className="personalInfo">
        <span className="heading">Select your plan</span> 
        <span className="additionalText">You have the option of monthly or yearly billing.</span> <br/>
        <div className="plans">
          {Object.keys(Subs.images).map((item)=> (
            <div key={item} className="billing">
                {Subs.images[item]}
                <p style={{marginBottom:'0px'}}>
                <span style={{fontSize: '14px', fontWeight: 'bold', color:'hsl(213, 96%, 18%)'}}>{Subs.names[item]}</span> <br/>
                <span>{Subs.monthlyPrices[item]}</span>
                </p>
            </div>
          ))}
            </div>
            <div className="duration">
                    <p>Monthly</p>
                <button type="toggle">on</button>
                <p>Yearly</p>
                
                </div>
                <button className="back">Go Back</button>
                

            



        </div>
        </>
    )
}