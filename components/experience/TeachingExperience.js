import React, { useState } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";

export const TeachingExperience = ({ title, experiences }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div id="teachingExperience" className="bg-white py-4 py-md-5">
      <div className="container page-container">
        <div className="row">
          <div className="col-12 d-lg-none text-center mb-4">
            <h1 className="text-primary fw-bold">{title}</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 d-none d-lg-flex align-items-start">
            <h1 className="text-primary fw-bold">{title}</h1>
          </div>

          <div className="col-lg-9 d-none d-lg-block">
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item mb-4 d-flex">
                  <div
                    className="d-flex flex-column align-items-center"
                    style={{ width: "40px", position: "relative" }}
                  >
                    <div className="timeline-icon">
                      <FaChalkboardTeacher className="text-success" size={24} />
                    </div>
                    {index !== experiences.length - 1 && (
                      <div
                        style={{
                          flexGrow: 1,
                          width: "2px",
                          backgroundColor: "#e0e0e0",
                        }}
                      ></div>
                    )}
                  </div>

                  <div
                    className="timeline-content"
                    style={{ paddingLeft: "20px" }}
                  >
                    <h3 className="text-primary">
                      {exp.title} ({exp.year})
                    </h3>
                    <p>{exp.description}</p>

                    {exp.images && (
                      <div className="d-flex gap-3 mt-2">
                        {exp.images.map((img, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={img}
                            alt="Classroom"
                            style={{
                              width: "150px",
                              height: "100px",
                              borderRadius: "8px",
                              objectFit: "cover",
                              cursor: "pointer",
                              transition: "transform 0.2s",
                            }}
                            onClick={() => setSelectedImage(img)}
                            onMouseOver={(e) =>
                              (e.target.style.transform = "scale(1.05)")
                            }
                            onMouseOut={(e) =>
                              (e.target.style.transform = "scale(1)")
                            }
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 d-lg-none">
            {experiences.map((exp, index) => (
              <div key={index} className="shadow p-3 mb-4 bg-white rounded">
                <h3 className="text-primary">
                  {exp.title} ({exp.year})
                </h3>
                <p>{exp.description}</p>

                {exp.images && (
                  <div className="d-flex gap-3 mt-2">
                    {exp.images.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt="Classroom"
                        style={{
                          width: "150px",
                          height: "100px",
                          borderRadius: "8px",
                          objectFit: "cover",
                          cursor: "pointer",
                          transition: "transform 0.2s",
                        }}
                        onClick={() => setSelectedImage(img)}
                        onMouseOver={(e) =>
                          (e.target.style.transform = "scale(1.05)")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.transform = "scale(1)")
                        }
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Enlarged Image */}
        {selectedImage && (
          <div
            className="modal d-flex justify-content-center align-items-center"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              zIndex: 1050,
            }}
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Enlarged View"
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                borderRadius: "10px",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
