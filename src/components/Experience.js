import React from "react";
import experience from "./data/experience.json";
import { Element } from "react-scroll";

const Experience = () => {
  return (
    <Element name="Experience">
      <div
        className="container row d-flex align-content-center justify-content-center"
        id="Experience"
      >
        <h1 className="heading">EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="col-md-6 my-4"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-delay="100"
                data-aos-offset="300"
              >
                <div className="ex-items">
                  <div className="left">
                    <img src={`/assets/${data.imageSrc}`} alt="" />
                  </div>
                  <div className="right text-center">
                    <h2>{data.role}</h2>
                    <h4>{data.location}</h4>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </Element>
  );
};

export default Experience;
