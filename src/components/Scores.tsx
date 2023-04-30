import {useTenzies} from '../context/TenziesContext';
import {useEffect} from 'react'
const Scores = () => {
  const {scoreArray,setScore} = useTenzies()
  useEffect(()=>{
    const newScore = JSON.parse(localStorage.getItem('score'));
    setScore(newScore)
  },[])
  return (
    <div>
      {scoreArray.length ? 
      <>
      {scoreArray.map(dice=> {return(
        <div>
          <p>{dice.value}</p>
          <p>{dice.rolls}</p>
          <p>{dice.time}s</p>
        </div>
      )})}</> : <>no score</>}
    </div>
  )
}

export default Scores