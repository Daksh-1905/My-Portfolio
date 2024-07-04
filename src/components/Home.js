import React, { useEffect, useRef } from "react";
import hero from "./data/hero.json";
import { Element } from "react-scroll";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Hi, my name is Daksh Jain",
        "I'm a Full Stack Developer",
        "I'm a Programmer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Element name="Home">
      <div className="container home" id="Home">
        <div
          className="right"
          data-aos="fade-down-right"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-offset="300"
        >
          <div className="img">
            <img src={`/assets/${hero.imgSrc}`} alt="" />
          </div>
        </div>

        <div
          className="left"
          data-aos="fade-down-left"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-offset="300"
        >
          <h1 ref={typedRef}> </h1>
          <a
            href="https://drive.google.com/file/d/1ag_u2ermcb-oD0a37pL0nr4FaaIWiRoj/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn my-3 text-light btn-outline-primary"
            style={{ border: "2px solid blue" }}
          >
            Download Resume
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Home;
