import { Info } from "../Data"
import { Navigator } from "./navigator";
export const Summary = ()=>{
    const {data, monthly} = Info();
    return(
        <div className="summary">
            <span className="heading">Finishing up</span> <br/>
            <span className="additionalText">Double-check everything looks OK before confirming.</span> <br/> <br/>
            {data ? (
  <div className="summaryCard">
    <span className="description">{data.name || "Plan"}</span>
    <span className="validity">{monthly ? `$${data.price}/mo`: `$${data.yearlyPrice}/yr`}</span>
  </div>
) : (
  <span>No plan selected yet.</span>
)}



            </div>
    )
}