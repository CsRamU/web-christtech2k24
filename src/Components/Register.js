import React from "react";
import clg_title from "../images/header.png";
import ChristTech2K24 from "../images/ChristTech2K23.png";

const Register = () => {
  return (
    <div style={{ width: "100%" }}>
      <div className="header">
        <img className="clg-title" src={clg_title} alt="Nil" />
      </div>
      <div className="header">
        <img className="clg-title" src={ChristTech2K24} alt="Nil" />
      </div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSc4a3wcWE4eUoMCXVlJXjaO29y_F_OL8W2hqWUeOZSljsquow/viewform?embedded=true"
        width="100%"
        height="1000px"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
  );
};

export default Register;
