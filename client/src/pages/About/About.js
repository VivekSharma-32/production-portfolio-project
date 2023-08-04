import React from "react";
import "./about.css";
import Profile from "../../assets/images/vivek.PNG";
import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={Profile} alt="profile-pic" />
            </div>

            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About Me</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo neque delectus dolorem ab obcaecati aliquid soluta
                possimus aliquam consequatur, laboriosam minima odit officiis
                ipsum assumenda vitae commodi culpa nostrum nulla tempora nobis
                cumque unde nesciunt in voluptatum. Ea illo assumenda, omnis
                incidunt commodi perspiciatis sequi voluptas provident minus
                asperiores saepe aliquid beatae quisquam fugiat est totam itaque
                possimus atque eaque? Consequatur error sunt, rerum deserunt
                incidunt quia sapiente architecto saepe! Dicta facilis
                voluptatum dignissimos vitae in minima ullam maxime rerum unde
                nobis commodi quaerat vel, quisquam quas quod possimus illum id
                sit, in hic et. Unde, quia corporis.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
