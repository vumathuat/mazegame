import React, { useState, useEffect } from "react";
import "./style.scss";
import Player from "../Player/Player";

import grass from "../../assets/background.png";
import wall from "../../assets/wood.png";
import dog from "../../assets/dog.png";
import door from "../../assets/door.png";
import dogClosed from "../../assets/dogClosed.png";
import soundMusic from "../../sound/catmeow.mp3";

let lvlIndex = 0;
let dogInterval;

const Map = (props) => {
  const mapBase = [
    [
      [0, 0, 1, 0, 2, 0, 0, 0, 1, 1, 1, 0, 1, 0, 2, 0],
      [0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 2, 0],
      [1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
      [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 1, 0, 1, 0],
      [1, 2, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 2],
      [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 2],
      [1, 2, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
      [1, 2, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0],
      [1, 1, 1, 1, 1, 0, 2, 2, 0, 1, 0, 0, 1, 1, 1, 3],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    [
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1],
      [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
      [1, 0, 1, 0, 1, 3, 0, 2, 0, 2, 0, 0, 1, 0, 1, 1],
      [1, 0, 1, 0, 1, 0, 2, 0, 2, 0, 2, 0, 1, 0, 1, 1],
      [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1],
      [1, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 1, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
      [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    [
      [0, 0, 1, 0, 2, 0, 1, 0, 2, 0, 1, 0, 2, 0, 1, 3],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 0, 2, 0, 1, 0, 2, 0, 1, 0, 2, 0, 1, 0, 2, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
  ];

  const [level, setLevel] = useState(mapBase[0]);
  const [timer, setTimer] = useState(69);
  const [isdog, setIsdog] = useState(true);
  const [audio, setAudio] = useState(false);

  useEffect(() => {
    clearInterval(dogInterval);

    if (lvlIndex === 3) {
      props.gameFunctions.isWinner();
      lvlIndex = 0;
    }
        
    if (timer < 1) {
      props.gameFunctions.isDead();
      lvlIndex = 0;
    }

    dogInterval = setInterval(() => {
      if (isdog === true) {
        setIsdog(false);
        setLevel(
          level.map((row, i) =>
            row.map((data, j) => {
              return data === 2 ? 4 : data;
            })
          )
        );
      } else if (isdog === false) {
        setIsdog(true);
        setLevel(
          level.map((row, i) =>
            row.map((data, j) => {
              return data === 4 ? 2 : data;
            })
          )
        );
      }
    }, 1000);
  }, [level]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prevState) => prevState - 1);
    }, 1000);
  }, []);

  const levelWon = () => {
    lvlIndex++;
    setLevel(mapBase[lvlIndex]);
    setTimer(69);
  };

  const killed = () => {
    lvlIndex = 0;
  };

  const getMapEl = (type) => {
    switch (type) {
      case 0:
        return grass;
      case 1:
        return wall;
      case 2:
        return dog;
      case 3:
        return door;
      case 4:
        return dogClosed;
      default:
        return grass;
    }
  };

  return (
    <>
      <table
        style={{
          position: "relative",
          margin: "auto",
          width: "1232px",
          height: "847px",
        }}
      >
        <tbody>
          {level.map((mapRow, i) => (
            <tr key={i}>
              {mapRow.map((mapEl, i) => (
                <td key={i}>
                  <img alt="#" src={getMapEl(mapEl)} />
                </td>
              ))}
            </tr>
          ))}

          <tr>
            <td>
              <div className="timer">{timer}</div>
            </td>
          </tr>
          <tr>
            <td>
              <Player
                killed={killed}
                levelWon={levelWon}
                mapBase={level}
                gameFunctions={props.gameFunctions}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <audio autoPlay>
        <source src={soundMusic} type="audio/mpeg"></source>
      </audio>
    </>
  );
};

export default Map;
