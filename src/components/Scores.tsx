import {useTenzies} from '../context/TenziesContext';
import {useEffect} from 'react';
import styled from 'styled-components';
const Scores = () => {
  const {setScore,} = useTenzies()
  useEffect(()=>{
    const newScore = JSON.parse(`${localStorage.getItem('score')}`);
    setScore(newScore)
  },[])
  return (
    <Wrapper>
      <table>
        <thead>
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
          </tr>
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
        </tbody>
      </table>
      <div>
        <button>clear</button>
        <button>home</button>
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
  /* background-color: pink; */
  margin-block: auto;
  margin-top: 2rem;
  table{
    /* background-color: pink; */
    width: 90%;
    /* margin-block: 1.5rem; */
    margin-inline: auto;
    /* border: .1rem solid #ff9f7f;; */
  }
  thead{
    border-bottom: 1px solid #000;
    color: white;
    background-color: burlywood;
    padding: 1rem;
  }
  td{
    width: 30%;
    padding-block: 1rem;
  }
  
`