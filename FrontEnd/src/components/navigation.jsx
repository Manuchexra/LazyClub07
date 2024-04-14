import React from "react";
import Logo from '../css/logo-no-background.png';
import Dropdown from '../components/dropdown'; // Make sure to import the correct component

export const Navigation = (props) => {

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a href="#page-top" className="navbar-brand page-scroll">
            <img alt="Logo" src={Logo} />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Dropdown />
            </li>
            <li>
              <a href="#features" className="page-scroll">
                Vazifamiz
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Biz Haqimizda
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Galereya
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Izohlar
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Jamoa
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  );
};

export default Navigation;
