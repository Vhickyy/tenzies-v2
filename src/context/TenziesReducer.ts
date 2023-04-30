import {generateDiceArray} from './TenziesContext'
export type initialStateProps = {
    diceArray: DiceProps[],
    start: boolean,
    checkScore:boolean,
    counter:number,
    end:boolean,
    roll:number,
    scoreArray: Score[]
}
export type DiceProps = {
    id:number,
    isHeld:boolean,
    value:number
}
type Game = {
    type: "START_GAME" | "CHECK_SCORE" | "ROLL" | "TIMER" | "END" | "HOME"
}
type Hold = {
    type: "HOLD"
    payload: number
}
type setScore = { 
    type: "SET_SCORE",
    payload: Score
}
export type Score = {
    id:number,
    value:number,
    time:number,
    rolls:number
}
export const reducer = (state:initialStateProps,action: Game | Hold | setScore) => {
    if(action.type === "START_GAME"){
        return {...state,start:true,end:false,roll:0,counter:15,diceArray:generateDiceArray()}
    }
    if(action.type === "CHECK_SCORE"){
        return {...state,checkScore:true,end:false}
    }
    if(action.type === "HOLD"){
        const newDiceArray = state.diceArray.map(dice=>{
            return dice.id === action.payload ? {...dice,isHeld:!dice.isHeld} : dice
        });
        return {...state,diceArray:newDiceArray}
    }
    if(action.type === "ROLL"){
        const newDiceArray = state.diceArray.map(dice=>{
            return dice.isHeld ? dice : {...dice,value:Math.floor(Math.random() * 6) + 1}
        });
        return {...state,diceArray:newDiceArray,roll:state.roll + 1}
    }
    if(action.type === "TIMER"){
        return {...state,counter: state.counter - 1}
    }
    if(action.type === "END"){
        return {...state,end:true,start:false}
    }
    if(action.type === "HOME"){
        return {...state,end:false,start:false,checkScore:false}
    }
    if(action.type === "SET_SCORE"){
        return {...state,scoreArray:action.payload}
    }
    return state
}