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
      <div>

      </div>
      {/* <table> */}
        {/* <thead>
          <tr>
            <td>Value</td>
            <td>Rolls</td>
            <td>Time taken</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2</td>
            <td>5</td>
            <td>7</td>
          </tr>
          <tr>
            <td>2</td>
            <td>5</td>
            <td>7</td>
          </tr>
          <tr>
            <td>2</td>
            <td>5</td>
            <td>7</td>
          </tr> */}
          {/* <tr>
            <td>2</td>
            <td>5</td>
            <td>7</td>
          </tr>
          <tr>
            <td>2</td>
            <td>5</td>
            <td>7</td>
          </tr> */}
        {/* </tbody>
      </table> */}
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
  height: 61vh;
  margin-block: auto;
  margin-top: 2rem;
  font-size: 1.2rem;
  .btn{
    display: flex;
    justify-content: space-evenly;
  }
  /* table{
    width: 90%;
    margin-inline: auto; */
    /* border: .1rem solid #ff9f7f;; */
  /* }
  thead{
    font-weight: 700;
    border-bottom: 1px solid #000;
    color: white;
    background-color: burlywood;
    padding: 1rem;
  }
  td{
    width: 30%;
    padding-block: 1rem;
    border-top: 1px solid white;
  } */

  
`