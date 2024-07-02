import React, { useEffect, useState } from "react";
import { Link, Events, scrollSpy } from "react-scroll";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);

  useEffect(() => {
    Events.scrollEvent.register("begin", (to) => {
      setActiveSection(to);
    });

    Events.scrollEvent.register("end", (to) => {
      setActiveSection(to);
    });

    // Register the scroll spy to keep track of scroll positions
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const buttonStyle = (isHovered, section) => ({
    backgroundColor:
      isHovered || activeSection === section ? "#1292ee" : "transparent",
    cursor: "pointer",
    color: isHovered || activeSection === section ? "black" : "white",
    borderRadius: "30px",
    padding: "5px 15px",
  });

  return (
    <>
      <div
        className="container nav_bar"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-offset="50"
        data-aos-easing="ease-in-out"
      >
        <div className="left nav_items">
          <i
            className="fa-solid fa-d fa-fade fa-2xl"
            style={{ color: "#99d3ff" }}
          ></i>{" "}
          <i
            className="fa-solid fa-j fa-fade fa-2xl"
            style={{ color: "#99d3ff" }}
          ></i>
        </div>
        <div className="right">
          <Link
            to="Home"
            className="nav_items"
            spy={true}
            smooth={true}
            duration={200}
            offset={-101}
            style={buttonStyle(isHovered1, "Home")}
            onMouseEnter={() => {
              setIsHovered1(true);
            }}
            onMouseLeave={() => {
              setIsHovered1(false);
            }}
          >
            Home
          </Link>
          <Link
            to="Experience"
            className="nav_items"
            spy={true}
            smooth={true}
            duration={200}
            offset={-101}
            style={buttonStyle(isHovered2, "Experience")}
            onMouseEnter={() => {
              setIsHovered2(true);
            }}
            onMouseLeave={() => {
              setIsHovered2(false);
            }}
          >
            Experience
          </Link>
          <Link
            to="Skills"
            className="nav_items"
            spy={true}
            smooth={true}
            duration={200}
            offset={-101}
            style={buttonStyle(isHovered3, "Skills")}
            onMouseEnter={() => {
              setIsHovered3(true);
            }}
            onMouseLeave={() => {
              setIsHovered3(false);
            }}
          >
            Skills
          </Link>
          <Link
            to="Projects"
            className="nav_items"
            spy={true}
            smooth={true}
            duration={200}
            offset={-101}
            style={buttonStyle(isHovered4, "Projects")}
            onMouseEnter={() => {
              setIsHovered4(true);
            }}
            onMouseLeave={() => {
              setIsHovered4(false);
            }}
          >
            Projects
          </Link>
          <Link
            to="Education"
            className="nav_items"
            spy={true}
            smooth={true}
            duration={200}
            offset={-101}
            style={buttonStyle(isHovered5, "Education")}
            onMouseEnter={() => {
              setIsHovered5(true);
            }}
            onMouseLeave={() => {
              setIsHovered5(false);
            }}
          >
            Education
          </Link>
          <Link
            to="Contact"
            className="nav_items"
            spy={true}
            smooth={true}
            duration={200}
            offset={-101}
            style={buttonStyle(isHovered6, "Contact")}
            onMouseEnter={() => {
              setIsHovered6(true);
            }}
            onMouseLeave={() => {
              setIsHovered6(false);
            }}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
