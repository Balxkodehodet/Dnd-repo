import {TotalRaces} from '../../data/TotalRaces.ts'
import type { raceProps} from '../../types/types.ts';
import type { singleRace } from '../../types/singleRaceType.ts';
import { Link } from 'react-router-dom'
import x from "../../assets/close.png"
import RenderValue from '../RenderValue.tsx'
import { useParams } from 'react-router-dom';
import { useState} from 'react'
import CreateSlug from '../CreateSlug.tsx'

export default function Races ({singleRace, stage}: raceProps) {

    const selectedRace: singleRace | undefined = TotalRaces.find(race => CreateSlug(race.Race) === singleRace);
 
    return (
        <>
            {!selectedRace && TotalRaces.map((race, index) => {
                return (
                <Link to={`/home/create-character/${CreateSlug(race.Race)}`}><div key={index}  className="raceCard">
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
            {selectedRace && <>
            <div className="selected-container-parent">
            <div className="selected-container">
            <div className="raceCard-info">
                {stage===0 && <Link to={`/home/create-character`}><img className="x-race" src={x}/></Link>}
                <h2>Chosen Race:</h2>

                {stage===0 && Object.entries(selectedRace).map(([key, value]) => (
                    
                    <div key={key}><strong>{key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([a-zA-Z])(\d)/g, "$1 $2").replace(/(\d)([a-zA-Z])/g, "$1 $2")}</strong>: {RenderValue(value)}<br></br><br></br></div>
                                                                                                     
                 ))
                }
                {stage > 0 && <p>{selectedRace.Race}</p>}
            </div>
            </div> 
        </div> 
        </>}
        </>
    )
}