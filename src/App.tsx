import styled from "styled-components";
import DiceWrapper from "./components/DiceWrapper";
// import Header from "./components/Header";
import Scores from "./components/Scores";
import {useState} from 'react'
import { useTenzies } from "./context/TenziesContext";
import End from "./components/End";
import { Button } from "./styles/ButtonStyle";


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
      <div className="header">
          <h2>logo</h2>
          <button onClick={change}>{theme === 'light' ? "light": "dark"}</button>
        </div>
      <div className="main">
          <div className="title">
            <h1>Tenzies</h1>
          </div>
          {!start && !checkScore && !end && <div className="btnContainer">
            <Button onClick={startGame}>Start Game</Button>
            <Button onClick={checkScoreBoard}>Score Board</Button>
            {/* <button onClick={startGame}>Start Game</button> */}
            {/* <button onClick={checkScoreBoard}>Score Board</button> */}
          </div>}
          {start ? <DiceWrapper/> : checkScore ? <Scores /> : end ? <End/> : null}
      </div>
    </Wrapper>
  )
}

export default App;

const Wrapper = styled.main`
  background-color: #291610;
  color: white;
  color: #ff9f7f;
  height: 100vh;
  .main{
    width: min(95%,50rem);
    margin: 2rem auto;
    border: .25rem solid #ff9f7f;
    min-height: 85vh;
    text-align: center;
    padding: .8rem 1rem;
    display: flex;
    flex-direction: column;
    row-gap: 1.3rem;
    border-radius: 2rem;
  }
  .header{
    display: flex;
    justify-content: space-between;
  }
  .title{
    height: 5vh;
  }
  .btnContainer{
    display: grid;
    place-content: center;
    row-gap: 1rem;
    height: 15rem;
 
  }
`