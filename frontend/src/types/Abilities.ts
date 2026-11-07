export type Abilities = 
            "strength"  | "dexterity" |   "constitution"
            | "intelligence" | "wisdom" | "charisma";

export type AbilityTypes = {
    abilityScoreStrength:number, 
    abilityScoreDexterity:number, 
    abilityScoreConstitution:number, 
    abilityScoreIntelligence:number,
    abilityScoreWisdom:number, 
    abilityScoreCharisma:number,
    setAbilityScoreStrength:React.Dispatch<React.SetStateAction<number>>, 
    setAbilityScoreDexterity:React.Dispatch<React.SetStateAction<number>>, 
    setAbilityScoreConstitution:React.Dispatch<React.SetStateAction<number>>, 
    setAbilityScoreIntelligence:React.Dispatch<React.SetStateAction<number>>,
    setAbilityScoreWisdom:React.Dispatch<React.SetStateAction<number>>, 
    setAbilityScoreCharisma:React.Dispatch<React.SetStateAction<number>>,
    abilityStage:number,
    setAbilityStage: React.Dispatch<React.SetStateAction<number>>,
    abilityChosenBackground: string | null

}
