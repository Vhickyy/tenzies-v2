import {useTenzies} from '../context/TenziesContext';
import {useEffect} from 'react';
import styled from 'styled-components';
import { Button } from '../styles/ButtonStyle';
import DiceFace from './DiceFace';
const Scores = () => {
  const {setScore,scoreArray} = useTenzies()
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
         {scoreArray?.length ? 
          <>
          {scoreArray.map((dice,index)=> {return(
            <div key={index} className='grid'>
              <DiceFace value={dice.value}/>
              <p>{dice.rolls}</p>
              <p>{dice.time}s</p>
            </div>
          )})}</> : <>no score</>}
        <div className='btn'>
          <Button>Clear</Button>
          <Button>Home</Button> 
        </div>
      </div>
      {/* <button onClick={()=>console.log("hi")
      }>clear</button> */}
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
    height: 100%;
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
    place-items: center;
    /* background-color: aliceblue; */
    padding-block: .3rem;
  }
  .btn{
    padding-top: .5rem;
    display: flex;
    justify-content: space-between;
  } 
`