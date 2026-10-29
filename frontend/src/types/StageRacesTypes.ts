import type { singleRace } from "./singleRaceType"
export type stageRaces = {
    race: singleRace,
    setRaceStage: React.Dispatch<React.SetStateAction<number>>,
    raceStage: number,
}