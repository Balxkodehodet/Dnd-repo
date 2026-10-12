import {TotalRaces} from '../../data/TotalRaces.ts'
import type { raceProps} from '../../types/types.ts';
import type { singleRace } from '../../types/singleRaceType.ts';
import { Link } from 'react-router-dom'
import x from "../../assets/close.png"
import RenderValue from '../RenderValue.tsx'
import { useParams } from 'react-router-dom';

export default function Races ({singleRace}: raceProps) {

    const singleRaceIndex = Number(singleRace);
    const isValidRaceIndex = Number.isInteger(singleRaceIndex) && singleRaceIndex !== undefined && singleRaceIndex >= 0 && singleRaceIndex < TotalRaces.length
    const singleRaceChosen: singleRace | undefined = isValidRaceIndex ? TotalRaces[Number(singleRace)] : undefined;
    const {portraitId} = useParams();
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
            <div className="raceCard-info">
                <Link to={`/home/create-character`}><img className="x-race" src={x}/></Link>
                <h2>Chosen Race:</h2>

                {!portraitId && Object.entries(singleRaceChosen).map(([key, value]) => (
                    
                    <div key={key}><strong>{key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([a-zA-Z])(\d)/g, "$1 $2").replace(/(\d)([a-zA-Z])/g, "$1 $2")}</strong>: {RenderValue(value)}<br></br><br></br></div>
                                                                                                     
                 ))
                }
                {portraitId && <p>{singleRaceChosen.Race}</p>}
            </div>
            </div> 
        </div> 
        </>}
        </>
    )
}