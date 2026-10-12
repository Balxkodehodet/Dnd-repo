import {TotalRaces} from '../../data/TotalRaces.ts'
import type { raceProps} from '../../types/types.ts';
import type { singleRace } from '../../types/singleRaceType.ts';
import { Link } from 'react-router-dom'
import x from "../../assets/close.png"

export default function Races ({singleRace}: raceProps) {

    const singleRaceIndex = Number(singleRace);
    const isValidRaceIndex = Number.isInteger(singleRaceIndex) && singleRaceIndex !== undefined && singleRaceIndex >= 0 && singleRaceIndex < TotalRaces.length
    const singleRaceChosen: singleRace | undefined = isValidRaceIndex ? TotalRaces[Number(singleRace)] : undefined;


    function renderValue(value:unknown ): React.ReactNode{
            if (typeof value === "string" || typeof value === "number")
            {
                return value;
            }

            if (Array.isArray(value))
            {
                value.map((val, index) => {
                    return (
                        <div key={index}>
                            {renderValue(val)};
                        </div>
                    )    
                })
            }
            if (typeof value === "object" && value !== null)
            {   
                return (
                    Object.entries(value).map(([key, val]) => {
                        return (
                            <div key={key}>
                                <strong>{key}</strong>: {renderValue(val)}
                            </div>
                        )
                    })
                )
            }
        return null;
    }
    return (
        <>
            {!singleRaceChosen && TotalRaces.map((race, index) => {
                return (
                <Link to={`/home/create-character/${index}`}><div key={index}  className="raceCard">
                    <button className="raceBtn">{race.Race}</button>
                    <p>{race.CreatureType}</p>
                    <p>{race.Size}</p>
                    <p>{race.speed}</p>
                    <p>{race.Information}</p>
                    <p>Click to know more</p>
                </div>
                </Link>
                )
            })}
            {singleRaceChosen && <>
            <div className="selected-container-parent">
            <div className="selected-container">
            <div className="raceCard">
                <img className="x" src={x}/>
                <h2>Chosen Race:</h2>
                {Object.entries(singleRaceChosen).map(([key, value]) => (
                    <div key={key}>{key} {renderValue(value)}</div>
                ))
            }
               
            <Link to={`/home/create-character`}><button>Choose Race</button></Link>
            </div>
            </div> 
        </div> 
        </>}
        </>
    )
}