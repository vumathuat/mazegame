import React from "react";
import "./style.scss";
import fish from "../../assets/fish.png";
import soundFail from "../../sound/failsound.mp3";

const GameOver = (props) => {
  const startGame = () => {
    props.gameFunctions.isStartClicked();
  };

  return (
    <>
      <div className="menu-card">
        <div className="container">
          <h1>Meow has lost</h1>
          <img className="fish" src={fish} alt="fish logo" />
        </div>
        <div className="again">
            <button onClick={startGame}>PLAY AGAIN</button>
        </div>
      </div>
      <audio autoPlay>
        <source src={soundFail} type="audio/mpeg"></source>
      </audio>
    </>
  );
};

export default GameOver;
