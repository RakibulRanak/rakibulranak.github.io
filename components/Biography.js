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
              {paragraph.split("Subrite").map((text, i, array) => (
                <React.Fragment key={i}>
                  {text}
                  {i < array.length - 1 && (
                    <a
                      href="https://subrite.no"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underlined-company-link"
                      style={{ display: "inline", whiteSpace: "nowrap" }}
                    >
                      Subrite
                    </a>
                  )}
                </React.Fragment>
              ))}
            </p>
          ))}
        </div>

        <div className="row">
          <div className="col-12">
            <Interest title={interest.title} interests={interest.interests} />
          </div>
        </div>
      </div>

      <div className="text-center text-md-start">
        <a
          href="./mr-hasan-cv.pdf"
          className="mt-2 mb-2 btn btn-primary btn-sm"
          download
          style={{
            display: "inline-flex",
            alignItems: "center",
            fontSize: "1.1rem",
            padding: "0.15rem 0.5rem",
          }}
        >
          <GoDownload style={{ marginRight: "4px", fontSize: "1rem" }} />{" "}
          Download CV
        </a>
      </div>
    </div>
  );
};
