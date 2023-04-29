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
width:60%;
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
    
`