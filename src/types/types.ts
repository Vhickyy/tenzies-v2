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
export type Game = {
    type: "START_GAME" | "CHECK_SCORE" | "ROLL" | "TIMER" | "END" | "HOME" | "CLEAR_SCORE"
}
export type Hold = {
    type: "HOLD"
    payload: number | undefined
}
export type setScore = { 
    type: "SET_SCORE",
    payload: Score[]
}
export type Score = {
    id:number,
    value:number,
    time:number,
    rolls:number
}