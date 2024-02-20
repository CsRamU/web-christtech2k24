import React from "react";
import LoadingButton from "../Components/submit";
import pamplete from "../images/pamplete.jpg";
import "../App.css";

const Home = () => {
  return (
    <div className="main">
      <div className="img-container">
        <img src={pamplete} className="pamplete" width="100%" />
      </div>
      <LoadingButton />
    </div>
  );
};

export default Home;
