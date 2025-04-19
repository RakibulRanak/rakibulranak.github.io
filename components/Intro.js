import React from "react";
import getConfig from "next/config";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa"; // Import icons from react-icons
import { FaGoogleScholar } from "react-icons/fa6";
// import { GoDownload } from "react-icons/go";

const { publicRuntimeConfig } = getConfig();

export const Intro = ({ title, description, image, buttons, socialLinks }) => {
  return (
    <div className="bg-white">
      <div className="">
        <div className="row justify-content-center text-center">
          <div className="col-12 mt-sm-4 mt-5">
            <img
              className="img-fluid my-3 card-image"
              src={image}
              alt="profile"
            />
          </div>

          <div className="col-12">
            <h1 className="text-primary fw-bold display-3 mt-4 intro-name">
              {title}
            </h1>
            <h2 className="text-muted" style={{ fontSize: "1.4rem" }}>
              Software Engineer
            </h2>{" "}
          </div>

          <div className="col-12 mt-3">
            {description.map((value, index) => (
              <p key={index}>{value}</p>
            ))}
          </div>

          <div
            className="col-12"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.url}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2 mx-md-3"
                  style={{ verticalAlign: "middle" }}
                >
                  {link.icon === "github" && (
                    <FaGithub className="responsive-icon" />
                  )}
                  {link.icon === "linkedin" && (
                    <FaLinkedin className="responsive-icon" />
                  )}
                  {link.icon === "googleScholar" && (
                    <FaGoogleScholar className="responsive-icon" />
                  )}
                  {/* email */}
                  {link.icon === "email" && (
                    <FaEnvelope className="responsive-icon" />
                  )}
                  {/* code */}
                  {link.icon === "code" && (
                    <FaCode className="responsive-icon" />
                  )}
                </a>
              </Link>
            ))}

            {/* <a
              href="./mr-hasan-cv.pdf"
              download
              target="_blank"
              rel="noreferrer"
              className="mx-2 mx-md-2"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "1.25rem",
                textDecoration: "none",
                verticalAlign: "middle",
                position: "relative",
                top: "0.5px",
              }}
              title="Download CV"
            >
              <GoDownload style={{ marginRight: "2px", fontSize: "1.25rem" }} />
              <span style={{ fontWeight: 700 }}>CV</span>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};
