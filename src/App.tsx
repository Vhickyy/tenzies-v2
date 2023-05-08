import styled from "styled-components";
import DiceWrapper from "./components/DiceWrapper";
import Header from "./components/Header";
import Scores from "./components/Scores";
import {useState} from 'react'
import { useTenzies } from "./context/TenziesContext";
import End from "./components/End";


function App() {
  const {start,checkScore,startGame,end,checkScoreBoard} = useTenzies();
  const [theme,setTheme] = useState('light');
  const change = () => {
    if(theme === 'light'){
      setTheme('dark')
    }else
    setTheme('light')
    }
  return (
    <Wrapper>
      <div className="main">
        <div className="header">
          <h2>logo</h2>
          <button onClick={change}>{theme === 'light' ? "light": "dark"}</button>
        </div>
        <div className="gamebody">
          <Header/>
          {!start && !checkScore && !end && <div className="btnContainer">
            <button onClick={startGame}>Start Game</button>
            <button onClick={checkScoreBoard}>Score Board</button>
          </div>}
          {start ? <DiceWrapper/> : checkScore ? <Scores /> : end ? <End/> : null}
        </div>
      </div>
    </Wrapper>
  )
}

export default App;

const Wrapper = styled.main`
  /* background-color: #fff; */
  background-color: #27150f;
  /* background-color: #fb9472; */
  color: white;
  color: #ff9f7f;
  height: 100vh;
  .main{
    width: min(95%,50rem);
    margin: 0 auto;
    padding: 1rem 0;
  }
  .header{
    display: flex;
    justify-content: space-between;
  }
  .gamebody{
    border: .25rem solid #ff9f7f;
    margin-top: 1rem;
    min-height: 85vh;
    text-align: center;
    padding: 1.5rem 1rem;
    display: grid;
    gap: 1rem;
  }
  .btnContainer{
    display: grid;
    place-content: center;
    row-gap: 1rem;
    height: 15rem;
    button{
      border: none;
      width: 15rem;
      padding: 1rem;
      border-radius: 1rem;
      font-size: 1rem;
      font-weight: 700;
      background-color: #ff9f7f;
      color: #27150f;
    }
  }
`
// #0e1531
// #4c271b