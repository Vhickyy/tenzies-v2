import styled from "styled-components";
import { useTenzies } from "../context/TenziesContext";
import DiceFace from "./DiceFace";
const DiceWrapper = () => {
  const {diceArray,rollDice} = useTenzies();
  return (
    <>
     <Wrapper>
        {diceArray.map(dice=>{
          console.log(dice);
        return(
          <DiceFace key={dice.id} value={dice.value} id={dice.id}/>
        )
      })}
    </Wrapper>
    <button onClick={rollDice}>roll</button>
    </>
    
  )
}

export default DiceWrapper;

const Wrapper = styled.div`
  width: min(100%,25rem);
  margin: 0 auto;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(5,1fr);
  gap: .8rem .5rem;
  @media screen and (min-width: 30rem){
    grid-template-columns: repeat(6,1fr);
  }
  @media screen and (min-width: 50rem){
    width: 40rem;
    grid-template-columns: repeat(10,1fr);
  }
`