import { useEffect } from "react";
import styled from "styled-components";
import { useTenzies } from "../context/TenziesContext";
const DiceFace = ({value,id}:{value:number,id:number}) => {
  const {holdDice,diceArray} = useTenzies();
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
  useEffect(()=>{
    console.log(diceArray);
    
  },[diceArray])
  const fun = () => {
    let newValue = [];
    for (let i:number = 1; i <= value; i++){
        newValue.push(<div key={i} className="dot"></div>)
    }
    return newValue;
  };
  return (
    <Wrapper>
        <div className={`dotface ${dotStyle}`} onClick={()=>holdDice(id)}>
         {fun()}
        </div>
    </Wrapper>
  )
}

export default DiceFace;

const Wrapper = styled.div`
    .dotface{
        background-color:blue;
        height:5rem;
        width:5rem;
        margin-bottom:2rem;
        display: grid;
        place-items: center;
        grid-template-areas: 
        "a . b"
        "c d e"
        "f . g";
    }
    .dot{
        height:.8rem;
        width:.8rem;
        background-color:red;
        border-radius:50%;
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