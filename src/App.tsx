import styled, {ThemeProvider}from "styled-components";
import DiceWrapper from "./components/DiceWrapper";
// import Header from "./components/Header";
import Scores from "./components/Scores";
import {useState} from 'react'
import { useTenzies } from "./context/TenziesContext";
import End from "./components/End";
import { Button } from "./styles/ButtonStyle";

const lightTheme = {
  color:"#291610",
  background:"#ff9f7f"
}
const darkTheme = {
  color:"#ff9f7f",
  background:"#291610"
}
function App() {
  const {start,checkScore,startGame,end,checkScoreBoard} = useTenzies();
  const [theme,setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(preVal => !preVal)
  }
  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <Wrapper>
        <div className="header">
            <h2>Tenzies</h2>
            <button onClick={toggleTheme}>{theme ? "light": "dark"}</button>
          </div>
        <div className="main">
            <div className="title">
              <h1>Tenzies</h1>
            </div>
            {!start && !checkScore && !end && <div className="btnContainer">
              <Button onClick={startGame}>Start Game</Button>
              <Button onClick={checkScoreBoard}>Score Board</Button>
            </div>}
            {start ? <DiceWrapper/> : checkScore ? <Scores /> : end ? <End/> : null}
        </div>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App;

const Wrapper = styled.main`
  background-color: ${(props)=> props.theme.background};
  color: ${(props)=> props.theme.color};
  height: 100vh;
  .main{
    width: min(95%,50rem);
    margin: 2rem auto;
    border: .25rem solid ${(props)=> props.theme.color};
    height: 85vh;
    text-align: center;
    padding: .8rem 1rem;
    display: flex;
    flex-direction: column;
    row-gap: 1.3rem;
    border-radius: 2rem;
  }
  .header{
    display: flex;
    justify-content: space-around;
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