import React from "react";
import { Element } from "react-scroll";
import education from "../components/data/education.json";

const Education = () => {
  return (
    <Element name="Education">
      <div
        className="container row d-flex align-content-center justify-content-center"
        id="Education"
      >
        <h1 className="heading">EDUCATION</h1>
        {education.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="card mb-4 col-md-4 text-center ed-card text-light"
                data-aos={data.id % 2 === 0 ? "fade-down" : "fade-up"}
                data-aos-duration="1000"
                data-aos-delay="100"
                data-aos-offset="650"
              >
                <div className="card-body">
                  <img
                    src={`/assets/${data.imageSrc}`}
                    alt="..."
                    style={{ height: "12vh", backgroundColor: "white" }}
                  />
                  <h5
                    className="card-title"
                    style={{ color: "blue", marginTop: "1rem" }}
                  >
                    {data.institute}
                  </h5>
                  <h6 className="card-subtitle mb-2">{data.specialization}</h6>
                  <p className="card-text">{data.duration}</p>
                  <p className="card-text">CGPA / Percentage - {data.cgpa}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </Element>
  );
};

export default Education;
