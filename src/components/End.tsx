import styled from 'styled-components';
import {useTenzies} from '../context/TenziesContext';
import { Button } from '../styles/ButtonStyle';
const End = () => {
  const {roll,diceArray,counter,startGame,checkScoreBoard,goHome} = useTenzies();
  const everyfun = diceArray.every(dice=> dice.value === diceArray[0].value);
  
  return (
    <Wrapper>
      <div className='end-ui'>
        <p>Rolls: {roll}</p>
        <div>
          {everyfun ? <p>You won!</p> : <p>You failed!</p>}
          {everyfun && <div>{diceArray[0].value}</div>}
        </div>
        <p>Time: {10 - counter}s</p>
      </div>
      <div className='btn-group'>
        <Button onClick={startGame}>Play Again</Button>
        <Button onClick={checkScoreBoard}>See Score</Button>
        <Button onClick={goHome}>Home</Button>
      </div>
    </Wrapper>
  )
}

export default End;

const Wrapper = styled.div`
  display: grid;
  gap: .7rem;
  align-items: center;
  height: 70vh;
  .end-ui{
    width: min(80%,30rem);
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: 400;
  }
  .btn-group{
    display: grid;
    row-gap: .9rem;
    place-content: center;
  }
`