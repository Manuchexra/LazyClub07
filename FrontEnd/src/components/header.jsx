import React from "react";
import '../css/header.css'
export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
          <div className="Subscribtion">
          <div>
           <div className="container23">
          <div className="glitch" data-text="ELISABÉTH">ELISABÉTH</div>
          <div className="glow">ELISABÉTH</div>
          <p className="subtitle">IMPRACTICAL DEVELOPER</p>
          </div>
         <div className="scanlines" />
         </div>
         </div>
   
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
