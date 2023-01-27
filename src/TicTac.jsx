import { useState } from "react";
import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export function TicTac() {
  const { width, height } = useWindowSize()
  const [board,setBoard] = useState(Array(9).fill(null))
  const [xTurn,setOTurn] = useState(true)
  const handClick = (index) => {
    //if no winner & if its untouched - update the board  
    if(!Winner && board[index] === null) {
    const boardCopy = [...board];  // Copy board
    boardCopy[index] = xTurn ? "X" : "O"; // Remove
    setBoard(boardCopy); //update
    //toggle turn
    setOTurn(!xTurn)
  }
}

  const decideWinner = (board) => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for(let i = 0; i < lines.length; i++){
      const [a,b,c] = lines[i];
      if(board[a] != null && board[a] === board[b] && board[b] === board[c]){
        console.log("Winner", board[a])
        return (board[a])
      }
    }
    return null;
}
const Winner = decideWinner(board);

  return (
    <div className="tic">
      <h1>Tic Tac Toe - Game</h1>
      {Winner ? (<Confetti
      width={width}
      height={height}
      gravity={0.03}
    />) : null}
      
      <div className="board">
      {board.map((val, index)=><GameBox val={val} onPlayerClick={()=>handClick(index)} />
      )}
      </div>
      <p><h1>The Winner is : {Winner}</h1></p>
    </div>
  );
}



function GameBox({val, onPlayerClick}) {
  // const [val,setVal] = useState("")
  const styles = {
    color: val==="X" ? "green" : "red",
  }
  return (
    <div style={styles} onClick={onPlayerClick} className="boxes">{val}</div>
  )
}
