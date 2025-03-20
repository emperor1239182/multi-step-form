import { Info } from "../Data"
import { Navigator } from "./navigator";
export const Summary = ()=>{
    const {data} = Info();
    return(
        <div className="summary">
            <span className="heading">Finishing up</span> 
            <span className="additionalText">Double-check everything looks OK before confirming.</span> <br/>
            {data ? (
                <div className="summaryCard">
                    <span className="description">{data.name || "Plan"}</span>
                    <span className="validity">{data.price || "Price"}</span>
                </div>
            ) : (
                <span>No plan selected yet.</span>
            )}


            </div>
    )
}