
export const AddsOn = ()=>{
    return(
        <>
        <div className="personalInfo">
        <span className="heading">Pick add-ons</span> 
        <span className="additionalText">Add-ons help enhance your gaming experience</span> <br/>
        <div className="services">

            <div className="offers">
            <span style={{display:'flex', gap:'10px'}}>
                    <input type="checkbox"></input>
                    <span style={{display:'flex', flexDirection:'column'}}>
                    <span className="description">Online service</span> 
                    <span className="validity">Access to multiplayer games</span>
                    </span>
                </span>
                <p>+$2/mo</p>
            </div> <br/>
            
            <div className="offers">
            <span style={{display:'flex', gap:'10px'}}>
                    <input type="checkbox"></input>
                    <span style={{display:'flex', flexDirection:'column'}}>
                    <span className="description">Larger storage</span> 
                    <span className="validity">Extra 1TB of cloud save</span>
                    </span>
                </span>
                <p>+$2/mo</p>
            </div> <br/>

            <div className="offers">
                <span style={{display:'flex', gap:'10px'}}>
                    <input type="checkbox"></input>
                    <span style={{display:'flex', flexDirection:'column'}}>
                    <span className="description">Customizable profile</span> 
                    <span className="validity">Custom theme on your profile</span>
                    </span>
                </span>
                <p>+$2/mo</p>
            </div> <br/>
        </div>

        <div className="nav">
                <button className="back">Go Back</button>
                <button className="next">Next Step</button>
                </div>
        </div>
        </>
    )
}