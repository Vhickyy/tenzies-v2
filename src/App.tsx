import styled from "styled-components";
import DiceWrapper from "./components/DiceWrapper";
import Header from "./components/Header";
import Scores from "./components/Scores";
import { useTenzies } from "./context/TenziesContext";

function App() {
  const {start,checkScore,startGame,checkScoreBoard} = useTenzies()
  return (
    <Wrapper>
      <div className="main">
        <h2>logo</h2>
        <div className="gamebody">
          <Header/>
          {!start && !checkScore && <div className="btnContainer">
            <button onClick={startGame}>Start Game</button>
            <button onClick={checkScoreBoard}>Score Board</button>
          </div>}
          {start && <DiceWrapper/>}
          {checkScore && <Scores/>}
        </div>
      </div>
    </Wrapper>
  )
}

export default App;

const Wrapper = styled.main`
  background-color: black;
  color: white;
  .main{
    width: min(80%,50rem);
    margin: 0 auto;
    /* background-color: cornsilk; */
    height: 100vh;
    padding: 2rem 0;
  }
  .gamebody{
    border: .25rem solid #ff9f7f;
    margin: 2rem 0;
    /* background-color: pink; */
    height: 85%;
    text-align: center;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .btnContainer{
    display: grid;
    place-content: center;
    row-gap: 1rem;
    height: 15rem;
    /* background-color: blue; */
    button{
      border: none;
      width: 15rem;
      padding: 1rem;
      border-radius: 1rem;
      font-size: 1rem;
      font-weight: 700;
      background-color: #ff9f7f;
    }
  }
`