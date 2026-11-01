export type DicesTypes = {
    diceThrow: number[],
    diceThrow2: number[],
    diceThrow3: number[],
    diceThrow4: number[],
    diceThrow5: number[],
    diceThrow6: number[], 
    setDiceThrow: React.Dispatch<React.SetStateAction<number[]>>,
    setDiceThrow2: React.Dispatch<React.SetStateAction<number[]>>,
    setDiceThrow3: React.Dispatch<React.SetStateAction<number[]>>,
    setDiceThrow4: React.Dispatch<React.SetStateAction<number[]>>,
    setDiceThrow5: React.Dispatch<React.SetStateAction<number[]>>,
    setDiceThrow6: React.Dispatch<React.SetStateAction<number[]>>
}