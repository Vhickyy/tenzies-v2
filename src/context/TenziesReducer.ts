import {generateDiceArray} from './TenziesContext'
import {initialStateProps,Game,Hold,setScore} from '../types'
export const reducer = (state:initialStateProps,action: Game | Hold | setScore) => {
    if(action.type === "START_GAME"){
        const newScore = JSON.parse(`${localStorage.getItem('score')}`) || [];
        return {...state,start:true,end:false,roll:0,counter:59,diceArray:generateDiceArray(),scoreArray:newScore}
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
    if(action.type === "CLEAR_SCORE"){
        return {...state,scoreArray:[]}
    }
    return state
}