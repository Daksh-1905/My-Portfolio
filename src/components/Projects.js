import React from "react";
import projects from "../components/data/projects.json";
import { Element } from "react-scroll";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <Element name="Projects">
      <div className="container row row-cols-1 row-cols-md-1 g-4" id="Projects">
        <h1 className="heading">PROJECTS</h1>
        {projects.map((data) => {
          return (
            <>
              <div
                className="col align-self-start mb-4"
                key={data.id}
                style={{ height: "25%" }}
                data-aos={data.id % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="1000"
                data-aos-delay="100"
                data-aos-offset="500"
              >
                <div className="text-light project-card">
                  <div className="d-flex justify-content-center align-content-center p-3 image">
                    <img
                      src={`/assets/${data.imageSrc}`}
                      className="card-img-top"
                      alt="..."
                    />
                  </div>

                  <div
                    className="card-body text-center"
                    style={{ width: "50%" }}
                  >
                    <h3
                      className="card-title"
                      style={{
                        color: "blue",
                        fontWeight: "bolder",
                        fontSize: "2.5rem",
                      }}
                    >
                      {data.title}
                    </h3>
                    <p className="card-text" style={{ fontSize: "1.5rem" }}>
                      {data.description}
                    </p>
                    <p
                      className="card-text text-muted"
                      style={{ fontWeight: "bolder", fontSize: "1.5rem" }}
                    >
                      {data.teckStack}
                    </p>
                    <div className="project-button">
                      <a
                        href={data.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="mx-2 "
                      >
                        <FaExternalLinkAlt size="25px" />
                      </a>
                      <a
                        href={data.source}
                        target="_blank"
                        rel="noreferrer"
                        className="mx-2 "
                      >
                        <FaGithub size="25px" />
                      </a>
                    </div>
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

export default Projects;
