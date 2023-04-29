export type initialStateProps = {
    diceArray: DiceProps[],
    start: boolean,
    checkScore:boolean,
    counter:number,
}
export type DiceProps = {
    id:number,
    isHeld:boolean,
    value:number
}
type Game = {
    type: "START_GAME" | "CHECK_SCORE" | "ROLL" | "TIMER"
}
type Hold = {
    type: "HOLD"
    payload: number
}
export const reducer = (state:initialStateProps,action: Game | Hold) => {
    if(action.type === "START_GAME"){
        return {...state,start:true}
    }
    if(action.type === "CHECK_SCORE"){
        return {...state,checkScore:true}
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
        return {...state,diceArray:newDiceArray}
    }
    if(action.type === "TIMER"){
        return {...state,counter:state.counter -= 1}
    }
    
    return state
}