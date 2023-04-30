import styled from "styled-components";
import { useTenzies } from "../context/TenziesContext";
const DiceFace = ({value,id,isHeld}:{value:number,id:number,isHeld:boolean}) => {
  const {holdDice} = useTenzies();
  let dotStyle:string = '';
  if(value === 1){
    dotStyle = 'one'
  }else if(value === 2){
    dotStyle = 'two'
  }else if(value === 3){
    dotStyle = 'three'
  }else if(value === 4){
    dotStyle = 'four'
  }else if(value === 5){
    dotStyle = 'five'
  }else{
    dotStyle = 'six'
  }
  const fun = () => {
    let newValue = [];
    for (let i:number = 1; i <= value; i++){
        newValue.push(<div key={i} className="dot"></div>)
    }
    return newValue;
  };
  return (
    <Wrapper>
        <div className={`dotface ${dotStyle}`} onClick={()=>holdDice(id)} style={isHeld ? {backgroundColor:"green"} : {backgroundColor:"black"}}>
         {fun()}
        </div>
    </Wrapper>
  )
}

export default DiceFace;

const Wrapper = styled.div`
    .dotface{
        background-color: #24292d;
        background-color: black;
        box-shadow: -2px -2px 4px #24292d, 2px 2px 4px #24292d;
        height: 3.3rem;
        width: 3.3rem;
        padding: .3rem;
        border-radius: 0.5rem;
        border: none;
        display: grid;
        place-items: center;
        grid-template-areas: 
        "a . b"
        "c d e"
        "f . g";
    }
    .dot{
        height:.6rem;
        width: .6rem;
        background-color:#fff;
        border-radius: 50%;
    }
    .one .dot:first-child,.three .dot:nth-child(3), .five .dot:first-child{
        grid-area: d;
    }
    .two .dot:nth-child(2),.three .dot:nth-child(2), .four .dot:nth-child(2), .five .dot:nth-child(2), .six .dot:nth-child(2){
        grid-area: g;
    }
    .four .dot:nth-child(3),.five .dot:nth-child(3),.six .dot:nth-child(3){
        grid-area: f;
    }
    .four .dot:nth-child(4),.five .dot:nth-child(4),.six .dot:nth-child(4){
        grid-area: b;
    }
    .six .dot:nth-child(5){
        grid-area: c;
    }
    .six .dot:nth-child(6){
        grid-area: e;
    }
`