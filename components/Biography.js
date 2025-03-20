import React from "react";
import { Interest } from "./Interest";
import { interest } from "../config/config";
import { GoDownload } from "react-icons/go";

export const Biography = ({ title, content }) => {
  return (
    <div>
      <div className="mt-5 mt-md-0 pe-md-5">
        <div className="biography-section">
          <h1 className="text-primary fw-bold text-md-start text-center mb-4">
            {title}
          </h1>
          {content.map((paragraph, index) => (
            <p
              key={index}
              style={{
                lineHeight: "1.5",
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="text-center text-md-start">
          {" "}
          <a
            href="./mr-hasan-cv.pdf"
            className="mt-4 mb-4 btn btn-primary my-1  btn-sm"
            download
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <GoDownload style={{ marginRight: "4px" }} /> Download CV
          </a>
        </div>
        {/* <div className="row">
          <div className="col-12">
            <Interest title={interest.title} interests={interest.interests} />
          </div>
        </div> */}
      </div>
    </div>
  );
};
