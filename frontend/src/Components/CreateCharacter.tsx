import { useState } from "react"
import Gallery from "./Gallery/Gallery";
import { useParams } from 'react-router-dom'
import ClassesComponent from "./Classes/ClassesComponent.tsx";
import Races from './Races/Races.tsx'
import Gender from "./Genders/Gender.tsx";
import NameSelection from "./NameSelection.tsx";

export default function CreateCharacter() {

    const { nameId, genderId, raceId, portraitId, classId } = useParams();
    const [characterCreationStage, setCharacterCreationStage] = useState(0);
    //const [character, setCharacter] = useState([]);
    const validatedGenderId = genderId === "male" || genderId === "female" ? genderId : undefined
    return (
        <>
            {characterCreationStage === 0 && <>
                <div className="racecontainer">
                    <NameSelection stage={characterCreationStage} nameId={nameId} />
                    <button disabled={nameId === undefined} className="selectionbtn" onClick={() => setCharacterCreationStage(1)}>Finish Name selection</button>
                </div></>}
            {characterCreationStage === 1 && <>
                <div className="racecontainer">
                    <NameSelection stage={characterCreationStage} nameId={nameId} />
                    <Gender singleGender={validatedGenderId} stage={characterCreationStage} />
                    <button disabled={validatedGenderId === undefined} className="selectionbtn" onClick={() => setCharacterCreationStage(2)}>Finish Gender selection</button>
                </div></>}
            {characterCreationStage === 2 && <>
                <div className="racecontainer">
                    <NameSelection stage={characterCreationStage} nameId={nameId} />
                    <Gender singleGender={validatedGenderId} stage={characterCreationStage} />
                    <Races singleRace={raceId} stage={characterCreationStage} />
                    <button disabled={raceId === undefined} className="selectionbtn" onClick={() => setCharacterCreationStage(3)}>Finish Race selection</button>
                </div></>}
            {characterCreationStage === 3 && <>
                <div className="portrait-containerparent">
                    <NameSelection stage={characterCreationStage} nameId={nameId} />
                    <Gender singleGender={validatedGenderId} stage={characterCreationStage} />
                    <Races singleRace={raceId} stage={characterCreationStage} />
                    <Gallery className="selected" singleImg={portraitId} stage={characterCreationStage} />
                    <button disabled={portraitId === undefined} className="selectionbtn" onClick={() => setCharacterCreationStage(4)}>Finish portrait selection</button>
                </div></>}
            {characterCreationStage === 4 && <>
                <div className="classesParent">
                    <div className="classCardParent">
                        <h2 className="classes-h2">Classes</h2>
                        <NameSelection stage={characterCreationStage} nameId={nameId} />
                        <Gender singleGender={validatedGenderId} stage={characterCreationStage} />
                        <Gallery className="galleryimg-minimize" singleImg={portraitId} stage={characterCreationStage} />
                        <Races singleRace={raceId} stage={characterCreationStage} />
                        <div className="classCardParent1">
                            <ClassesComponent singleClass={classId} stage={characterCreationStage} />
                        </div>
                    </div>
                    <button disabled={classId === undefined} className="selectionbtn" onClick={() => setCharacterCreationStage(5)}>Finish Class selection</button>
                </div>
            </>}
            {characterCreationStage === 5 && <>
                <div className="classesParent">
                    <div className="classCardParent">
                        <NameSelection stage={characterCreationStage} nameId={nameId} />
                        <Gender singleGender={validatedGenderId} stage={characterCreationStage} />
                        <Gallery className="galleryimg-minimize" singleImg={portraitId} stage={characterCreationStage} />
                        <Races singleRace={raceId} stage={characterCreationStage} />
                        <div className="classCardParent1">
                            <ClassesComponent singleClass={classId} stage={characterCreationStage} />
                        </div>
                    </div>
                    <button className="selectionbtn" onClick={() => setCharacterCreationStage(6)}>Finish3</button>
                </div>
            </>}
            {characterCreationStage === 6 && <>
                <div className="classesParent">
                    <div className="classCardParent">
                        <NameSelection stage={characterCreationStage} nameId={nameId} />
                        <Gender singleGender={validatedGenderId} stage={characterCreationStage} />
                        <Gallery className="galleryimg-minimize" singleImg={portraitId} stage={characterCreationStage} />
                        <Races singleRace={raceId} stage={characterCreationStage} />
                        <div className="classCardParent1">
                            <ClassesComponent singleClass={classId} stage={characterCreationStage} />
                        </div>
                    </div>
                    <button className="selectionbtn" onClick={() => setCharacterCreationStage(7)}>Finish 4</button>
                </div>
            </>}
        </>
    )
}