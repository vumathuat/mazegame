import React from 'react'
import './style.scss'
import fish from '../../assets/fish.png'
import soundWinning from '../../sound/winningsound.mp3'

const Winner = (props) => {
    const startGame = () => { 
        props.gameFunctions.isStartClicked()
    }

    return <>
    <div className="menu-card">
        <div className="container">
            <h1>Winner winner</h1>
            <img className="fish" src={fish} alt="fish logo"/>
        </div>
        <div className="again">
            <button onClick={startGame}>PLAY AGAIN</button>
        </div>
    </div>
    <audio autoPlay>
        <source src={soundWinning} type="audio/mpeg"></source>
    </audio>
    </>

}

export default Winner