import { TotalRaces } from '../../data/TotalRaces.ts'
import type { raceProps } from '../../types/types.ts';
import type { singleRace } from '../../types/singleRaceType.ts';
import { Link } from 'react-router-dom'
import x from "../../assets/close.png"
import RenderValueAll from '../RenderValueAll.tsx'
import CreateSlug from '../CreateSlug.tsx'
import { useParams } from 'react-router-dom';
import StageRaces from './StageRaces.tsx';

export default function Races({ singleRace, stage, setStage, isElf, isHuman, raceStage, setRaceStage }: raceProps) {

    const selectedRace: singleRace | undefined = TotalRaces.find(race => CreateSlug(race.Race) === CreateSlug(singleRace));
    const { nameId, genderId } = useParams();
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
            {singleRace && stage === 2 && raceStage === 0 && <>
                <div className="selected-container-parent">
                    <div className="selected-container">
                        <div className="raceCard-info">
                            {stage === 2 && <Link to={`/home/create-character/${nameId}/${genderId}`}><img className="x-race" src={x} /></Link>}
                            {selectedRace && stage === 2 && Object.entries(selectedRace).map(([key, value]) => (

                                <div key={key}><strong>{key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([a-zA-Z])(\d)/g, "$1 $2").replace(/(\d)([a-zA-Z])/g, "$1 $2")}</strong>: <div>{RenderValueAll(value)}</div></div>

                            ))
                            }
                        </div>
                    </div>
                </div>
            </>}
            {stage > 2 && <div className="raceCard-info2"><h2>Chosen Race:</h2><p>{selectedRace?.Race}</p></div>}
            {/* Stages of ELF RACE */}
            {(raceStage === 2 || raceStage === 1 || raceStage === 0) 
            && isElf && selectedRace && setRaceStage &&  raceStage !== null && raceStage !== undefined 
            && <StageRaces race={selectedRace} setRaceStage={setRaceStage} raceStage={raceStage} />}
            {/* Button to finish race selection only at final stage of each race */}
            {raceStage === 2 && <button disabled={singleRace === undefined} className="selectionbtn" onClick={() => setStage && setStage((prev) => {
                const newStage = prev + 1;
                localStorage.setItem("characterCreationStage", newStage.toString())
                return newStage
            })}>Finish Race selection</button>}
            {/* Stages of HUMAN RACE */}
            {(raceStage === 2 || raceStage === 1 || raceStage === 0) 
            && isHuman && selectedRace && setRaceStage &&  raceStage !== null && raceStage !== undefined 
            && <StageRaces race={selectedRace} setRaceStage={setRaceStage} raceStage={raceStage} />}
            {/* Button to finish race selection only at final stage of each race */}
            {isHuman && raceStage === 1 && <button disabled={singleRace === undefined} className="selectionbtn" onClick={() => setStage && setStage((prev) => {
                const newStage = prev + 1;
                localStorage.setItem("characterCreationStage", newStage.toString())
                return newStage
            })}>Finish Race selection</button>}
        </>
    )
}