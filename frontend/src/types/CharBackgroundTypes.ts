export type CharBackgroundTypes = {
    Name: string,
    AbilityScores: string[],
    Feat: string,
    SkillProf: string[] | string,
    ToolProf: string[] | string,
    Equipment: {A:string[] | string, B:string[] | string}
}[]

export type setCharacterStage = {
    setCharacterCreationStage: React.Dispatch<React.SetStateAction<number>>
}