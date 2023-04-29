import {useReducer, createContext, useContext} from "react";
import * as React from 'react';
import { reducer, initialStateProps, DiceProps } from "./TenziesReducer";
const generateDiceArray = () => {
    const diceArray:DiceProps[] = [];
    for (let i:number = 1; i <= 6; i++){
        const random = Math.floor(Math.random() * 6) + 1;
        diceArray.push({id:i,value:random,isHeld:false})
    }
    return diceArray;
}
const initialState:initialStateProps = {
    diceArray: generateDiceArray(),
    start: false,
    checkScore: false,
    counter: 30,
}
const initState = {
    ...initialState,
    startGame: () => {},
    checkScoreBoard: () => {},
    rollDice: () => {},
    holdDice: (value:number) => {}
}
const TenziesContext = createContext<typeof initState>({} as typeof initState);
export const TenziesProvider = ({children}: {children:React.ReactNode}) => {
    const [state,dispatch] = useReducer(reducer,initialState);
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
    return(
        <TenziesContext.Provider value={{...state,startGame,checkScoreBoard,holdDice,rollDice}}>
            {children}
        </TenziesContext.Provider>
    )
};

export const useTenzies = () => {
    return useContext(TenziesContext)
}