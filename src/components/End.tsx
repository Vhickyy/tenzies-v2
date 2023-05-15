import styled from 'styled-components';
import {useTenzies} from '../context/TenziesContext'
const End = () => {
  const {roll,diceArray,counter,startGame,checkScoreBoard,goHome} = useTenzies();
  const everyfun = diceArray.every(dice=> dice.value === diceArray[0].value);
  
  return (
    <Wrapper>
      <div className='end-ui'>
        <p>Rolls: {roll}</p>
        <div>
          {everyfun ? <p>You won!</p> : "You failed"}
          {everyfun && <div>{diceArray[0].value}</div>}
        </div>
        <p>Time: {10 - counter}s</p>
      </div>
      <div className='btn-group'>
        <button onClick={startGame}>Play Again</button>
        <button onClick={checkScoreBoard}>See Score</button>
        <button onClick={goHome}>Home</button>
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
    /* height: 70vh; */
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    font-weight: 400;
  }
  .btn-group{
    display: grid;
    row-gap: .9rem;
    place-content: center;
  }
  button{
    padding: 1rem 3rem;
    border: none;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 1rem;
  } 
`