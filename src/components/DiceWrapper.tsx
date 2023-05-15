import styled from "styled-components";
import { useTenzies } from "../context/TenziesContext";
import DiceFace from "./DiceFace";
import {useEffect} from 'react';
import { Button } from "../styles/ButtonStyle";
const DiceWrapper = () => {
  const {diceArray,rollDice,determineWinner,end,counter,counting,roll} = useTenzies();
  useEffect(()=>{
      determineWinner();
  },[diceArray,counter])
  useEffect(()=>{
    const timer = setInterval(()=>{
      if(!end){
        counting()
      }
    }, 1000)
    return () => clearInterval(timer)
  },[counter])
  return (
    <Wrapper>
      <p>Roll unitl all dice are the same. Click each dice to freeze it at its current value between rolls.</p>
          <div className="flex">
            <p>Rolls: {roll}</p>
            <p>Time: 00:{counter < 10 ? `0${counter}` : counter}</p>
            <p>Best: 25s</p>
          </div>
     <div className="diceBody">
        {diceArray.map(dice=>{
        return(
          <DiceFace key={dice.id} value={dice.value} id={dice.id} isHeld={dice.isHeld}/>
        )
      })}
    </div>
    <Button onClick={rollDice}>Roll</Button>
    </Wrapper>
  )
}
export default DiceWrapper;

const Wrapper = styled.div`
display: grid;
place-items: center;
gap: .7rem;
height: 70vh;
font-size: 1.2rem;
  .diceBody{
    width: min(100%,20rem);
    margin: 0 auto;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(5,1fr);
    gap: .6rem .5rem;
  }
  .flex{
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`