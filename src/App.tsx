import { futimesSync } from 'fs';
import React, { useEffect, useState } from 'react';
import './App.css';
import BoardComponent from './components/BoardComponent';
import LostFigurs from './components/LostFigurs';
import Timer from './components/Timer';
import { Board } from './models/Board';
import { Colors } from './models/Colors';
import { Player } from './models/Player';

function App() {

  const [board, setBoard] = useState(new Board())
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPalyer] = useState<Player |null>(null)

  useEffect(() => {
    restart()
    setCurrentPalyer(whitePlayer)
  }, [])

  function restart() {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  function swapPlayer() {
    setCurrentPalyer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  return (
    <div className="App">
      <Timer
        restart={restart}
        currentPlayer={currentPlayer}
      />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <LostFigurs 
        title="Черние фигуры"
        figures={board.lostBlackFigures}
        />
        <LostFigurs 
        title="Черние фигуры"
        figures={board.lostWhiteFigures}
        />
      </div>
    </div>
  );
}

export default App;
