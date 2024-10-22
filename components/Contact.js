import React from "react";
import Link from "next/link";

import { FaEnvelope, FaLinkedin } from "react-icons/fa"; // Import the email icon

export const Contact = ({ title, description, buttons }) => {
  return (
    <div id="contacts" className="bg-white py-4 py-md-5">
      <div className="container page-container">
        <div className="row justify-content-center">
          <div className="col-12 d-lg-none text-center mb-4">
            <h1 className="text-primary fw-bold">{title}</h1>
          </div>
          <div className="col-lg-3 d-none d-lg-flex align-items-start mb-3">
            <h1 className="text-primary fw-bold">{title}</h1>
          </div>
          <div className="col-md-9">
            <div className="mx-1">
              <p>{description}</p>
              <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
                {buttons.map((value, index) =>
                  value.isPrimary ? (
                    <Link key={index} href={value.link}>
                      <a className="btn btn-primary my-1 d-flex align-items-center btn-sm me-2">
                        <FaEnvelope className="me-2" />
                        {value.title}
                      </a>
                    </Link>
                  ) : (
                    <Link key={index} href={value.link}>
                      <a
                        className="btn btn-outline-primary my-1 d-flex align-items-center btn-sm mx-2"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaLinkedin className="me-2" />
                        {value.title}
                      </a>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
