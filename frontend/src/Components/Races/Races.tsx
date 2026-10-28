import {TotalRaces} from '../../data/TotalRaces.ts'
import type { raceProps} from '../../types/types.ts';
import type { singleRace } from '../../types/singleRaceType.ts';
import { Link } from 'react-router-dom'
import x from "../../assets/close.png"
import RenderValueAll from '../RenderValueAll.tsx'
import CreateSlug from '../CreateSlug.tsx'
import { useParams } from 'react-router-dom';

export default function Races ({singleRace, stage, isElf, elfStage, setElfStage}: raceProps) {

    const selectedRace: singleRace | undefined = TotalRaces.find(race => CreateSlug(race.Race) === CreateSlug(singleRace));
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
            {elfStage === 0 && singleRace && stage === 2 && <>
            <div className="selected-container-parent">
            <div className="selected-container">
            <div className="raceCard-info">
                {stage===2 && <Link to={`/home/create-character/${nameId}/${genderId}`}><img className="x-race" src={x}/></Link>}
                  {selectedRace && stage===2 && Object.entries(selectedRace).map(([key, value]) => (
                    
                    <div key={key}><strong>{key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([a-zA-Z])(\d)/g, "$1 $2").replace(/(\d)([a-zA-Z])/g, "$1 $2")}</strong>: <div>{RenderValueAll(value)}</div></div>
                                                                                                     
                 ))
                }
            </div>
            </div> 
        </div> 
        </>}
        {stage > 2 && <div className="raceCard-info2"><h2>Chosen Race:</h2><p>{selectedRace?.Race}</p></div>}
        {singleRace && stage === 2 && elfStage === 0 && isElf && <button className="elfBtn" onClick={() => setElfStage && setElfStage(1)}>Next</button>}
        {isElf && elfStage === 1 && selectedRace && <><h2>Lineage:</h2> {selectedRace?.Lineages?.map((lineage, index) => <h3 key={index}>{lineage.Lineage}</h3>)}</>}
        </>
    )
}