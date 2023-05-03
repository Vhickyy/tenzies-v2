import {useTenzies} from '../context/TenziesContext';
import {useEffect} from 'react'
const Scores = () => {
  const {scoreArray,setScore,clear} = useTenzies()
  useEffect(()=>{
    const newScore = JSON.parse(`${localStorage.getItem('score')}`);
    setScore(newScore)
  },[])
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Value</td>
            <td>Number of rolls</td>
            <td>Time taken</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2</td>
            <td>5</td>
            <td>7</td>
          </tr>
        </tbody>
      </table>
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
    </div>
  )
}

export default Scores