import React from "react";
import { Intro } from "../components/Intro";
import { Biography } from "../components/Biography";

export const BiographyIntroLayout = ({
  introData,
  biographyData,
  interest,
}) => {
  return (
    <div className="bg-white pt-md-5 pb-md-3 custom-margin">
      <div className="intro-container">
        <div className="row">
          <div className="col-md-5">
            <Intro
              title={introData.title}
              description={introData.description}
              image={introData.image}
              buttons={introData.buttons}
              socialLinks={introData.socialLinks}
            />
          </div>
          <div className="col-md-7">
            <Biography
              title={biographyData.title}
              content={biographyData.content}
              interest={interest}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
