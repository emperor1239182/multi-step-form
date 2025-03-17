import { Subs } from "./sub";
import { Info } from "./Data";

export const Subscription = () => {
  const {data, monthly, handleData, handleDate } = Info()

  return (
      <div className="subscription">
        <span className="heading">Select your plan</span>
        <span className="additionalText">
          You have the option of monthly or yearly billing.
        </span>
        <br />
        <div className="plans">
          {Subs.filter((item) => item.id).map((item) => (
            <div
              key={item.id}
              className="billing"
              onClick={()=> handleData(item.id)}
              // Pass item to getDetails
              style={{
                border: data === item.id ? "2px solid hsl(243, 100%, 62%)" : "", // Dynamic border
                padding: "10px",
                borderRadius: "5px",
            }}
            >
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
          <span className={monthly ? "active" : ""}>Monthly</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={!monthly}
              onChange={ handleDate}
            />
            <span className="slider"></span>
          </label>
          <span className={!monthly ? "active" : ""}>Yearly</span>
        </div>
        <br />
        <br />
        <div className="nav">
          <button className="back">Go Back</button>
          <button className="next">Next Step</button>
        </div>
      </div>
  );
};

