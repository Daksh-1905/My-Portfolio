import React from "react";
import skills from "../components/data/skills.json";
import { Element } from "react-scroll";

const Skills = () => {
  return (
    <Element name="Skills">
      <div
        className="container row d-flex justify-content-center align-content-center"
        id="Skills"
      >
        <h1 className="heading">SKILLS</h1>
        {skills.map((data) => {
          return (
            <>
              <div
                className="col-md-3"
                key={data.id}
                data-aos="flip-down"
                data-aos-duration="1000"
                data-aos-delay="100"
                data-aos-offset="300"
              >
                <div className="skill-item">
                  <img
                    src={`/assets/${data.imageSrc}`}
                    alt="..."
                    style={{ height: "5vh", width: "4vw" }}
                  />
                  <h2>{data.title}</h2>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </Element>
  );
};

export default Skills;
