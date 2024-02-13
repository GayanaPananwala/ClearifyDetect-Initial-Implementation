// Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";
import mainImage from "./main.png";

function Home() {
  const navigate = useNavigate();

  const handleClickToBegin = () => {
    navigate("/tab-view/prediction");
  };

  return (
    <div className="home-container">
      <div className="col">
        <h1 className="homeTitle">Welcome to ClearifyDetect!</h1>
        <br />
        <p>
          ClearifyDetect is a cutting-edge web application designed to empower
          users to distinguish between AI-generated and human-written content
          with ease and precision.
          <br />
          Whether you're an educational marking professional, a content buyer,
          or simply a curious individual, ClearifyDetect provides you with the
          tools you need to assess the authenticity of textual information in a
          seamless and intuitive manner.
        </p>
        <button
          className="homeBtn"
          color="primary"
          onClick={handleClickToBegin}
        >
          Try ClearifyDetect
        </button>
      </div>
      <figure className="col">
        <img src={mainImage} alt="A  of shoes" />
      </figure>
    </div>
  );
}

export default Home;
