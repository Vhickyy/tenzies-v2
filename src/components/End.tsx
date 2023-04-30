import React, {useEffect} from 'react'
import {useTenzies} from '../context/TenziesContext'
const End = () => {
  const {roll,diceArray,counter,startGame,checkScoreBoard,goHome,setScore} = useTenzies();
  const everyfun = diceArray.every(dice=> dice.value === diceArray[0].value);

  
  return (
    <div>
      {roll}
      {everyfun ? diceArray[0].value : "failed"}
      {counter}
      <button onClick={startGame}>Play Again</button>
      <button onClick={checkScoreBoard}>See Score</button>
      <button onClick={goHome}>Home</button>
    </div>
  )
}

export default End