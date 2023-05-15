import {useTenzies} from '../context/TenziesContext';
import {useEffect} from 'react';
import styled from 'styled-components';
import { Button } from '../styles/ButtonStyle';
const Scores = () => {
  const {setScore,} = useTenzies()
  useEffect(()=>{
    const newScore = JSON.parse(`${localStorage.getItem('score')}`);
    setScore(newScore)
  },[])
  return (
    <Wrapper>
      <div className='main-grid'>
        <div className='grid head'>
          <p>Value</p>
          <p>Rolls</p>
          <p>Time Taken</p>
        </div>
        <div className='grid'>
          <p>2</p>
          <p>2</p>
          <p>2</p>
        </div>
        <div className='grid'>
          <p>2</p>
          <p>2</p>
          <p>2</p>
        </div>
        <div className='grid'>
          <p>2</p>
          <p>2</p>
          <p>2</p>
        </div>
        <div className='grid'>
          <p>2</p>
          <p>2</p>
          <p>2</p>
        </div>
        <div className='grid'>
          <p>2</p>
          <p>2</p>
          <p>2</p>
        </div>
      </div>
      <div className='btn'>
        <Button>Clear</Button>
        <Button>Home</Button>
      </div>
      
      {/* {scoreArray?.length ? 
      <>
      {scoreArray.map(dice=> {return(
        <div>
          <p>{dice.value}</p>
          <p>{dice.rolls}</p>
          <p>{dice.time}s</p>
        </div>
      )})}</> : <>no score</>} */}
      {/* <button onClick={clear}>clear</button> */}
    </Wrapper>
  )
}

export default Scores;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70vh;
  margin-top: 1rem;
  font-size: 1.2rem;
  .main-grid{
    display: grid;
    row-gap: .3rem;
    margin-bottom: 2rem;
  }
  .head{
    font-weight: 700;
  }
  .grid{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    /* background-color: aliceblue; */
    padding-block: 1rem;
  }
  .btn{
    display: flex;
    justify-content: space-between;
  }
  
`