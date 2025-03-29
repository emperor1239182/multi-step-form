import { Info } from "../Data";

export const Summary = () => {
  const { data, monthly } = Info();

  // Extract numeric prices and calculate total
  const totalPrice = data.reduce((sum, item) => {
    // Extract numbers from the price string (e.g., "+$2/mo" → 2)
    const numericPrice = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return sum + numericPrice;
  }, 0);

  return (
      <div className="summary">
          <span className="heading">Finishing up</span> <br />
          <span className="additionalText" style={{fontSize:"13px", fontWeight:"bold"}}>
              Double-check everything looks OK before confirming.
          </span> <br /> <br />

          {data.length > 0 ? (
              <div className="summaryCard">
                  {data.map((item, index) => (
                      <div key={index} className="summaryItem">
                          <span className="description">{item.name}</span>
                          <span className="price">{item.price}</span>
                      </div>
                  ))}
                  <hr />
              </div>
          ) : (
              <span>No plan selected yet.</span>
          )}
          {monthly ? (
                        <div className="total">
                            <span className="description">Total (per month)</span>
                            <span className="price">+${totalPrice}/mo</span>
                        </div>
                    ) : (
                        <div className="total">
                            <span className="description">Total (per year)</span>
                            <span className="price">+${totalPrice}/yr</span>
                        </div>
                  )}
      </div>
  );
};
// This component displays a summary of the selected subscription plan and add-ons. It calculates the total price based on the selected items and displays it at the bottom.