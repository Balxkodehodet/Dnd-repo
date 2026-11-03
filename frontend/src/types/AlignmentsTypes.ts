export type AlignmentsTypes = [{
    name:string,
    info: string
}, {
    name: "Neutral Good",
    info: string
}, {
    name: "Chaotic Good",
    info: string
}, {
    name: "Lawful Neutral",
    info: string
}, {
    name: "True Neutral",
    info: string
}, {
    name: "Chaotic Neutral",
    info: string
}, {
    name: "Lawful Evil",
    info: string
}, {
    name: "Neutral Evil",
    info: string
}, {
    name: "Chaotic Evil",
    info: string
}]

export type AlignmentsTypesProps = {
        chosenAlignment: string | null,
        setChosenAlignment: React.Dispatch<React.SetStateAction<string | null>>,
        setStage: React.Dispatch<React.SetStateAction<number>>,
        alignmentStage: number,
        setAlignmentStage: React.Dispatch<React.SetStateAction<number>>
}