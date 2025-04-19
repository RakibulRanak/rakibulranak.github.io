import React from "react";

export const Interest = ({ title, interests }) => {
  return (
    <div id="interest" className="bg-white">
      <h1
        className="text-primary fw-bold py-1 text-center text-md-start"
        style={{ fontSize: "1.7rem" }}
      >
        {title}
      </h1>
      <div>
        <div className="row justify-content-center justify-content-md-start">
          <ul
            style={{
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            {interests.map((name, index) => (
              <li
                key={index}
                style={{
                  listStyleType: "disc",
                  paddingLeft: "5px",
                  listStylePosition: "outside",
                }}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
