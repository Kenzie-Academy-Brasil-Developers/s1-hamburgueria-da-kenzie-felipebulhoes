import React from "react";
import { WelcomeInfo } from "./styles";
import hamburguerImg from "./assets/hamburg.png";

const WelcomePage = ({ setInitialPage }) => {
  return (
    <WelcomeInfo>
      <div>
        <h2>O melhor hamburguer da cidade!</h2>
        <p>Peça já o seu, agora pelo site</p>
        <img src={hamburguerImg} alt="" />
        <button onClick={() => setInitialPage(false)}>Ver hambúrgueres</button>
      </div>
    </WelcomeInfo>
  );
};

export default WelcomePage;
