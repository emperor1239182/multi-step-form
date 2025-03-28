import { Info } from "../Data"

export const Summary = () => {
  const { data } = Info();

  return (
      <div className="summary">
          <span className="heading">Finishing up</span> <br />
          <span className="additionalText">
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
              </div>
          ) : (
              <span>No plan selected yet.</span>
          )}
      </div>
  );
};

