import {useReducer, createContext, useContext} from "react";
import { reducer } from "./TenziesReducer";
import {initialStateProps,DiceProps,Score} from '../types'
export const generateDiceArray = () => {
    const diceArray:DiceProps[] = [];
    for (let i:number = 1; i <= 5; i++){
        const random = Math.floor(Math.random() * 6) + 1;
        diceArray.push({id:i,value:random,isHeld:false})
    }
    return diceArray;
}

const initialState:initialStateProps = {
    diceArray: generateDiceArray(),
    start: false,
    checkScore: false,
    counter: 15,
    end:false,
    roll: 0,
    scoreArray: JSON.parse(`${localStorage.getItem('score')}`) || []
}
const initState = {
    ...initialState,
    startGame: () => {},
    checkScoreBoard: () => {},
    rollDice: () => {},
    holdDice: (_value:number) => {},
    determineWinner: ()=>{},
    counting: () => {},
    goHome: () => {},
    setScore: (_score: Score[]) => {},
    clear: () => {}
}
const TenziesContext = createContext<typeof initState>({} as typeof initState);
export const TenziesProvider = ({children}: {children:React.ReactNode}) => {
    const [state,dispatch] = useReducer(reducer,initialState);
    const determineWinner = () => {
        const heldDice: DiceProps | undefined= state.diceArray.find(dice=>dice.isHeld === true)
        const win = state.diceArray.every(dice=> dice.isHeld === true && dice.value === heldDice?.value);
        const mainScore = 10;
        if(state.counter === 0 || win){
            setTimeout(()=>{
                dispatch({type:"END"});
                console.log(state.scoreArray);
                if(win){
                    let newScore = [...state.scoreArray,{id:1,value:state.diceArray[0].value,rolls:state.roll,time:mainScore - state.counter}]
                    const sameTime = newScore.filter(dice=>dice.time === state.counter)
                    if(sameTime.length >= 2) sameTime.sort((a,b)=>a.rolls - b.rolls);
                    console.log(sameTime);
                    
                    const notSameTime = newScore.filter(dice=>dice.time !== state.counter);
                    newScore = [...sameTime,...notSameTime]
                    console.log(newScore);
                    
                    const sett = newScore.sort((a,b)=>a.time - b.time).slice(0,5);
                    console.log(sett);
                    localStorage.setItem('score',JSON.stringify(sett))
                }
            },100)
        }
    }
    const startGame = () => {
        dispatch({type:"START_GAME"})
    };
    const checkScoreBoard = () => {
        dispatch({type:"CHECK_SCORE"})
    };
    const holdDice = (value:number) => {
        dispatch({type:"HOLD",payload:value})
    };
    const rollDice = () => {
        dispatch({type:"ROLL"})
    };
    const counting = () => {
        dispatch({type:"TIMER"})
    }
    const goHome = () => {
        dispatch({type:"HOME"})
    }
    const setScore = (score: Score[])=> {
        dispatch({type:"SET_SCORE",payload:score})
    }
    const clear = () => {
        localStorage.removeItem('score')
        dispatch({type:"CLEAR_SCORE"})
    }
    return(
        <TenziesContext.Provider value={{...state,startGame,checkScoreBoard,holdDice,rollDice,determineWinner,counting,goHome,setScore,clear}}>
            {children}
        </TenziesContext.Provider>
    )
};
export const useTenzies = () => {
    return useContext(TenziesContext)
}