// Navigation.jsx
import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../css/logo-no-background.png';
import Dropdown from '../components/dropdown'; // Make sure to import the correct component

const Navigation = () => {
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
          <Link to="/" className="navbar-brand page-scroll">
            <img alt="Logo" src={Logo} />
          </Link>{" "}
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
              <Link to="/features" className="page-scroll">
                Vazifamiz
              </Link>
            </li>
            <li>
              <Link to="/about" className="page-scroll">
                Biz Haqimizda
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="page-scroll">
                Galereya
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="page-scroll">
                Izohlar
              </Link>
            </li>
            <li>
              <Link to="/team" className="page-scroll">
                Jamoa
              </Link>
            </li>
            <li>
              <Link to="/contact" className="page-scroll">
                Kontakt
              </Link>
            </li>
            <li>
              <button className="btrt1">
                <Link to="/Register" className="auth1">
                  Register
                </Link>
              </button>
            </li>
            <li>
              <button className="btrt1">
                <Link to="/Login" className="auth1">
                  Kirish
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
