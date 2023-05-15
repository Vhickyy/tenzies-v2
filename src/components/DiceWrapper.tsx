import styled from "styled-components";
import { useTenzies } from "../context/TenziesContext";
import DiceFace from "./DiceFace";
import {useEffect} from 'react'
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
    <button onClick={rollDice}>Roll</button>
    </Wrapper>
  )
}
export default DiceWrapper;

const Wrapper = styled.div`
display: grid;
place-items: center;
gap: .7rem;
height: 70vh;
/* background-color: #ff9f7f; */
  .diceBody{
    width: min(100%,20rem);
    margin: 0 auto;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(5,1fr);
    gap: .6rem .5rem;
  }
  button{
    width: 7rem;
    background-color: #ff9f7f;
    border: .1rem solid #ff9f7f;
    padding: .5rem 2rem;
    font-size: 1rem;
    font-weight: 700;
    border-radius: .7rem;
  }
  button:hover{
    border: .1rem solid #ff9f7f;
    color: #fff;
    background-color: black;
  }
  .flex{
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`