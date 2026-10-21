import {TotalRaces} from '../../data/TotalRaces.ts'
import type { raceProps} from '../../types/types.ts';
import type { singleRace } from '../../types/singleRaceType.ts';
import { Link } from 'react-router-dom'
import x from "../../assets/close.png"
import RenderValueAll from '../RenderValueAll.tsx'
import CreateSlug from '../CreateSlug.tsx'
import { useParams } from 'react-router-dom';

export default function Races ({singleRace, stage}: raceProps) {

    const selectedRace: singleRace | undefined = TotalRaces.find(race => CreateSlug(race.Race) === singleRace);
    const {nameId, genderId} = useParams();
    return (
        <>
            {!singleRace && TotalRaces.map((race, index) => {
                return (
                <Link key={index} to={`/home/create-character/${nameId}/${genderId}/${CreateSlug(race.Race)}`}><div className="raceCard">
                    <button className="raceBtn">{race.Race}</button>
                    <p><strong>Creature Type: </strong>{race.CreatureType}</p>
                    <p><strong>Size: </strong>{race.Size}</p>
                    <p><strong>Speed: </strong>{race.speed}</p>
                    <p><strong>Information: </strong>{race.Information}</p>
                    <p>Click to know more</p>
                </div>
                </Link>
                )
            })}
            {singleRace && <>
            <div className="selected-container-parent">
            <div className="selected-container">
            <div className="raceCard-info">
                {stage===2 && <Link to={`/home/create-character/${nameId}/${genderId}`}><img className="x-race" src={x}/></Link>}
                <h2>Chosen Race:</h2>

                {selectedRace && stage===2 && Object.entries(selectedRace).map(([key, value]) => (
                    
                    <div key={key}><strong>{key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([a-zA-Z])(\d)/g, "$1 $2").replace(/(\d)([a-zA-Z])/g, "$1 $2")}</strong>: {RenderValueAll(value)}<br></br><br></br></div>
                                                                                                     
                 ))
                }
                {stage > 2 && <p>{selectedRace?.Race}</p>}
            </div>
            </div> 
        </div> 
        </>}
        </>
    )
}