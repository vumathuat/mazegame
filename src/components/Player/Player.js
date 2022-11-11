import React, { useState, useEffect } from "react";
import useEventListener from "@use-it/event-listener";
import catImg from "../../assets/cat.png";

const Player = (props) => {
  const [position, setPosition] = useState({
    xCurrent: 0,
    xPrevious: 0,
    yCurrent: 0,
    yPrevious: 0,
    mapCol: 0,
    mapRow: 0,
  });

  if (props.mapBase[position.mapRow][position.mapCol] === 3) {
    props.levelWon();
    setPosition({
      xCurrent: 0,
      xPrevious: 0,
      yCurrent: 0,
      yPrevious: 0,
      mapCol: 0,
      mapRow: 0,
    });
  }

  if (props.mapBase[position.mapRow][position.mapCol] === 2) {
    props.gameFunctions.isDead();
    props.killed();
    setPosition({
      xCurrent: 0,
      xPrevious: 0,
      yCurrent: 0,
      yPrevious: 0,
      mapCol: 0,
      mapRow: 0,
    });
  }

  useEventListener("keydown", ({ code }) => {
    if (code.indexOf("Arrow") === -1) return;

    if (code === "ArrowRight") {
      if (
        position.xCurrent + 77 <= 1155 &&
        props.mapBase[position.mapRow][position.mapCol + 1] !== 1
      ) {
        setPosition((prevState) => ({
          ...position,
          mapCol: prevState.mapCol + 1,
          xCurrent: prevState.xCurrent + 77,
          xPrevious: prevState.xCurrent,
        }));
      }
    }
    if (code === "ArrowLeft") {
      if (
        position.xCurrent - 77 >= 0 &&
        props.mapBase[position.mapRow][position.mapCol - 1] !== 1
      ) {
        setPosition((prevState) => ({
          ...position,
          mapCol: prevState.mapCol - 1,
          xCurrent: prevState.xCurrent - 77,
          xPrevious: prevState.xCurrent,
        }));
      }
    }
    if (code === "ArrowDown") {
      if (
        position.yCurrent + 77 <= 770 &&
        props.mapBase[position.mapRow + 1][position.mapCol] !== 1
      ) {
        setPosition((prevState) => ({
          ...position,
          mapRow: prevState.mapRow + 1,
          yCurrent: prevState.yCurrent + 77,
          yPrevious: prevState.yCurrent,
        }));
      }
    }
    if (code === "ArrowUp") {
      if (
        position.yCurrent - 77 >= 0 &&
        props.mapBase[position.mapRow - 1][position.mapCol] !== 1
      ) {
        setPosition((prevState) => ({
          ...position,
          mapRow: prevState.mapRow - 1,
          yCurrent: prevState.yCurrent - 77,
          yPrevious: prevState.yCurrent,
        }));
      }
    }
  });
  return (
    <>
      <div
        id="cat"
        style={{
          position: "absolute",
          width: 77,
          height: 77,
          left: position.xCurrent,
          top: position.yCurrent,
          background: `url(${catImg})`,
          backgroundSize: "cover",
        }}
      ></div>
    </>
  );
};

export default Player;
