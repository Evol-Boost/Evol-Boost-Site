import React from "react";
import "./Home.css";
import bg from "../props/photo-nft.jpg";
import Spline from '@splinetool/react-spline';

function Home() {
  return (
    <div className="Home" id="Home">
      <div className="bg img">
      <Spline scene="https://prod.spline.design/fAz8xitXQhbS2iC0/scene.splinecode" />
      </div>
      <div className="content">
        <h1>
          <c>Bienvenue</c> Chez <d>Evol</d> <br />
          Boost
        </h1>

        <a href="#Collection" className="show-me">
          <span>En savoir plus</span>
        </a>
      </div>
    </div>
  );
}

export default Home;
