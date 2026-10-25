import { useState } from "react"
import Gallery from "./Gallery/Gallery";
import { useParams } from 'react-router-dom'
import ClassesComponent from "./Classes/ClassesComponent.tsx";
import Races from './Races/Races.tsx'
import Gender from "./Genders/Gender.tsx";
import NameSelection from "./NameSelection.tsx";
import BottomTop from "./BottomTop.tsx";
import menu from '../assets/menu.png'
import x from '../assets/close.png'

export default function CreateCharacter() {

    const { nameId, genderId, raceId, portraitId, classId } = useParams();
    const [characterCreationStage, setCharacterCreationStage] = useState<number>(() => {
        let stage = localStorage.getItem("characterCreationStage")
        return Number(stage) ?? 0
    });
    const [showCharacterInfo, setShowCharacterInfo] = useState(false);
    const [classStage, setClassStage] = useState<number | null>(null);
    const [btmMenu, setBtmMenu] = useState<boolean>(false);
    //const [character, setCharacter] = useState([]);
    const validatedGenderId = genderId === "male" || genderId === "female" ? genderId : undefined
    return (
        <>
            {characterCreationStage === 0 && <>
                <div className="character-containerparent">
                    <h2 className="classes-h2">Name</h2>
                    <div className="nameTxt">
                        <NameSelection stage={characterCreationStage} nameId={nameId} />
                    </div>
                    <button disabled={nameId === undefined} className="selectionbtn" onClick={() => setCharacterCreationStage((prev) => {
                        const newStage = prev + 1;
                        localStorage.setItem("characterCreationStage", newStage.toString())
                        return newStage
                    })}>Finish Name selection</button>
                </div></>}
            {characterCreationStage === 1 && <>
                <div className="character-containerparent">
                    <h2 className="classes-h2">Gender</h2>
                    <div className={`characterInfo ${showCharacterInfo ? "blackborder" : ""}`}>
                        {showCharacterInfo && <div className="item nameTxt">
                            <NameSelection stage={characterCreationStage} nameId={nameId} />
                        </div>}
                        {!showCharacterInfo ? <button onClick={() => setShowCharacterInfo((prev) => !prev)}>Show character Info</button> : <button onClick={() => setShowCharacterInfo((prev) => !prev)}>Hide character Info</button>}
                    </div>
                    <div className="genderContainer">
                        <Gender singleGender={validatedGenderId} stage={characterCreationStage} />
                    </div>
                    <button disabled={validatedGenderId === undefined} className="selectionbtn" onClick={() => setCharacterCreationStage((prev) => {
                        const newStage = prev + 1;
                        localStorage.setItem("characterCreationStage", newStage.toString())
                        return newStage
                    })}>Finish Gender selection</button>
                </div></>}
            {characterCreationStage === 2 && <>
                <div className="character-containerparent">
                    <h2 className="classes-h2">Races</h2>
                    <div className={`characterInfo ${showCharacterInfo ? "blackborder" : ""}`}>
                        {showCharacterInfo &&
                            <><div className="item nameTxt">
                                <NameSelection stage={characterCreationStage} nameId={nameId} />
                            </div>
                                <div className="item">
                                    <Gender singleGender={validatedGenderId} stage={characterCreationStage} />
                                </div>
                            </>
                        }
                        {!showCharacterInfo ? <button onClick={() => setShowCharacterInfo((prev) => !prev)}>Show character Info</button> : <button onClick={() => setShowCharacterInfo((prev) => !prev)}>Hide character Info</button>}
                    </div>
                    <Races singleRace={raceId} stage={characterCreationStage} />
                    <button disabled={raceId === undefined} className="selectionbtn" onClick={() => setCharacterCreationStage((prev) => {
                        const newStage = prev + 1;
                        localStorage.setItem("characterCreationStage", newStage.toString())
                        return newStage
                    })}>Finish Race selection</button>
                </div></>}
            {characterCreationStage === 3 && <>
                <div className="character-containerparent">
                    <h2 className="classes-h2">Portraits</h2>
                    <div className={`characterInfo ${showCharacterInfo ? "blackborder" : ""}`}>
                        {showCharacterInfo && <>
                            <div className="item">
                                <NameSelection stage={characterCreationStage} nameId={nameId} />
                            </div>
                            <div className="item">
                                <Gender singleGender={validatedGenderId} stage={characterCreationStage} />
                            </div>
                            <div className="item">
                                <Races singleRace={raceId} stage={characterCreationStage} />
                            </div>
                        </>}
                        {!showCharacterInfo ? <button onClick={() => setShowCharacterInfo((prev) => !prev)}>Show character Info</button> : <button onClick={() => setShowCharacterInfo((prev) => !prev)}>Hide character Info</button>}
                    </div>
                    <Gallery className="selected" singleImg={portraitId} stage={characterCreationStage} />
                    <button disabled={portraitId === undefined} className="selectionbtnPortrait" onClick={() => setCharacterCreationStage((prev) => {
                        const newStage = prev + 1;
                        localStorage.setItem("characterCreationStage", newStage.toString())
                        return newStage
                    })}>Finish portrait selection</button>
                </div></>}
            {characterCreationStage === 4 && <>
                <div className="classesParent">
                    <div className="classCardParent">
                        <h2 className="classes-h2">Classes</h2>
                        <div className={`characterInfo ${showCharacterInfo ? "blackborder" : ""}`}>
                            {showCharacterInfo && <>
                                <div className="item">
                                    <NameSelection stage={characterCreationStage} nameId={nameId} />
                                </div>
                                <div className="item">
                                    <Gender singleGender={validatedGenderId} stage={characterCreationStage} />
                                </div>
                                <div className="item">
                                    <Gallery className="galleryimg-minimize" singleImg={portraitId} stage={characterCreationStage} />
                                </div>
                                <div className="item">
                                    <Races singleRace={raceId} stage={characterCreationStage} />
                                </div>
                            </>}
                            {!showCharacterInfo ? <button onClick={() => setShowCharacterInfo((prev) => !prev)}>Show character Info</button> : <button onClick={() => setShowCharacterInfo((prev) => !prev)}>Hide character Info</button>}
                        </div>
                        <div className={`${classStage === null ? "classCardParent1" : ""}`}>
                        <ClassesComponent btmMenu={btmMenu} classStage={classStage} setClassStage={setClassStage} singleClass={classId} stage={characterCreationStage} />
                        </div>        
                    </div>
                    <button disabled={classId === undefined || classStage === null || classStage < 5} className="selectionbtn" onClick={() => setCharacterCreationStage((prev) => {
                        const newStage = prev + 1;
                        localStorage.setItem("characterCreationStage", newStage.toString())
                        return newStage
                    })}>Finish Class selection</button>
                    {classId && classStage === null && btmMenu && <><BottomTop/><img onClick={() => setBtmMenu(prev => !prev)} className="btmMenuX" src={x}/></>} 
                    {classId && classStage === null && !btmMenu && <img onClick={() => setBtmMenu(prev => !prev)} className="btmMenu" src={menu}/>}
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
                            <ClassesComponent btmMenu={false} classStage={classStage} setClassStage={setClassStage} singleClass={classId} stage={characterCreationStage} />
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
                            <ClassesComponent btmMenu={false} classStage={classStage} setClassStage={setClassStage} singleClass={classId} stage={characterCreationStage} />
                        </div>
                    </div>
                    <button className="selectionbtn" onClick={() => setCharacterCreationStage(7)}>Finish 4</button>
                </div>
            </>}
        </>
    )
}