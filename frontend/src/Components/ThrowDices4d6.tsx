import Dices from "./Utils/Dices"
import type { DicesTypes } from "../types/throwDices";
import AbilityScores from "./AbilityScores";
export default function ThrowDices4d6({stage,diceThrow,diceThrow2,diceThrow3,diceThrow4,diceThrow5,diceThrow6, setDiceThrow,
    setDiceThrow2, setDiceThrow3,setDiceThrow4,setDiceThrow5,setDiceThrow6}:DicesTypes) 
    {

        const adjustedThrow = [...diceThrow].sort((a,b) => a - b).slice(1).reduce((sum, roll) => sum + roll, 0);
        const adjustedThrow2 = [...diceThrow2].sort((a,b) => a - b).slice(1).reduce((sum, roll) => sum + roll, 0);
        const adjustedThrow3 = [...diceThrow3].sort((a,b) => a - b).slice(1).reduce((sum, roll) => sum + roll, 0);
        const adjustedThrow4 = [...diceThrow4].sort((a,b) => a - b).slice(1).reduce((sum, roll) => sum + roll, 0);
        const adjustedThrow5 = [...diceThrow5].sort((a,b) => a - b).slice(1).reduce((sum, roll) => sum + roll, 0);
        const adjustedThrow6 = [...diceThrow6].sort((a,b) => a - b).slice(1).reduce((sum, roll) => sum + roll, 0);


    return(
        <>
            <AbilityScores abilityScoreStrength={adjustedThrow} abilityScoreDexterity={adjustedThrow2} abilityScoreConstitution={adjustedThrow3}
            abilityScoreIntelligence={adjustedThrow4} abilityScoreWisdom={adjustedThrow5} abilityScoreCharisma={adjustedThrow6} />
            {stage === 6 && (
                <button className="throw-dices" onClick={() => {
                    setDiceThrow(() => Dices(4,6))
                    setDiceThrow2(() => Dices(4,6))
                    setDiceThrow3(() => Dices(4,6))
                    setDiceThrow4(() => Dices(4,6))
                    setDiceThrow5(() => Dices(4,6))
                setDiceThrow6(() => Dices(4,6))
                }}>Throw Dices</button>
            )}
        </>
    )
}