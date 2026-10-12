import {TotalRaces} from '../../data/TotalRaces.ts'
import type { raceProps} from '../../types/singleRaceType.ts';

export default function Races ({selectedRace, setSelectedRace}: raceProps) {

    return (
        <>
            {!selectedRace && TotalRaces.map((race) => {
                return (
                <div onClick={()=> {
                    setSelectedRace(race);
                }}  className="raceCard">
                    <button className="raceBtn">{race.Race}</button>
                    <p>{race.CreatureType}</p>
                    <p>{race.Size}</p>
                    <p>{race.speed}</p>
                    <p>{race.Information}</p>
                    <p>Click to know more</p>
                </div>
                )
            })}
            {selectedRace && <>
            <div className="raceCard">
            <h2>Selected Race:</h2>
            <h3>{selectedRace.Race}</h3>
            </div></>}
        </>
    )
}