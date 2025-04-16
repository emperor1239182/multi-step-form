import { Info } from "../Data";

export const AddsOn = () => {
  const { monthly, handleData, data } = Info();

  return (
    <div className="ads-on">
      <span className="heading">Pick add-ons</span> <br />
      <span className="additionalText">Add-ons help enhance your gaming experience</span> <br /> <br />
      <div className="services">
        {[
          { name: "Online service", validity: "Access to multiplayer games", priceMonthly: "$2/mo", priceYearly: "$10/yr" },
          { name: "Larger storage", validity: "Extra 1TB of cloud save", priceMonthly: "$2/mo", priceYearly: "$20/yr" },
          { name: "Customizable profile", validity: "Custom theme on your profile", priceMonthly: "$2/mo", priceYearly: "$20/yr" },
        ].map((addon, index) => (
          <div key={index} className="offers"
          style={{
            border: data.some((item) => item.name === addon.name) 
              ? "2px solid hsl(243, 100%, 62%)" 
              : "", // Default border to avoid layout shift
            padding: "10px",
            borderRadius: "5px",
          }}
          >
            <span style={{ display: "flex", gap: "10px" }}>
              <input
                type="checkbox"
                checked={data.some((item) => item.name === addon.name)} // Keep track of selected add-ons
                onChange={(e) => {
                  handleData(
                    addon.name,
                    monthly ? addon.priceMonthly : addon.priceYearly,
                    true // This ensures it's treated as an add-on
                  );
                  console.log(handleData)
                }}
                
              />
              <span style={{ display: "flex", flexDirection: "column" }}>
                <span className="description">{addon.name}</span>
                <span className="validity">{addon.validity}</span>
              </span>
            </span>
            <p className="price">{monthly ? addon.priceMonthly : addon.priceYearly}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
// This component displays a list of add-ons that users can select to enhance their gaming experience. It updates the selected add-ons in the context and applies styles based on the selection.
// The add-ons are displayed with their names, descriptions, and prices, and users can toggle them on or off.