import React from "react";
import logo from "../../images/193940.jpg";
import "./about.css";
import logo1 from "../../images/lets-get-started-no-line.png";

const About = () => {
  return (
    <>
      <div className="about_container">
        <img className="about_img" src={logo} alt="" />
        <div className="about_section">
          <ul>
            <h1>
              This is Catalog web App, which will guide you through all the
              available PC accessories on the market. You will be provided with
              links and all the information about what you are looking for. We
              will help you build your future pc using constructor.
            </h1>
            <li>
              Our task is to make it easier for you to search and view the set,
              because the market is too large, and no one wants to follow a
              large number of links, and this is how the idea appeared.
            </li>
            <li>
              We will collect for you all the components you need and you will
              see them in one place
            </li>
            <li>
              We have made for you a convenient PC builder that will help you
              choose a component in a price range and based on the components
              already selected.
            </li>
            <li>
              We have collected all new hardware for you, and the list will be
              updated so that you do not miss a single new item.
            </li>
            <li>
              We also have an independent assessment system, and the ability to
              like any product you like to track it in the future.
            </li>
            <li>
              Well, are you already interested?) SO, click on the button below,
              create an new account, and let's go look at the hardware
            </li>
          </ul>

          <img className="about_logo" src={logo1} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
