import React from "react";
import "./style.scss";

const Menu = (props) => {
  const startGame = () => {
    props.gameFunctions.isStartClicked();
  };

  return (
    <>
      <div className="menu-card">
        <button onClick={startGame}>START GAME</button>
      </div>
    </>
  );
};

export default Menu;
