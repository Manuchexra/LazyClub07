import React from "react";
import '../css/dropdown.css'
const Dropdown = () => {
  return (
    <div className="dropdown-container">
      <button className="dropdown-btn">MORE COURSE</button>
      <div className="dropdown-content">
        <a href="#">Course 1</a>
        <a href="#">Course 2</a>
        <a href="#">Course 3</a>
        {/* Add more course links as needed */}
      </div>
    </div>
  );
};

export default Dropdown;
