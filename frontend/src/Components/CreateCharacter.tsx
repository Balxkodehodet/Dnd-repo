import {useState} from "react"
import Gallery from "./Gallery/Gallery";
import {useParams} from 'react-router-dom'
import ClassesComponent from "./Classes/ClassesComponent.tsx";
import Races from './Races/Races.tsx'

export default function CreateCharacter(){

    const {raceId, portraitId, classId} = useParams();
    const [characterCreationStage, setCharacterCreationStage] = useState(0);
    //const [character, setCharacter] = useState([]);
  
    return (
        <>
           {characterCreationStage === 0 && <>
           <div className="racecontainer">
           <Races singleRace={raceId} stage={characterCreationStage} /> 
           <button disabled={raceId === undefined} className="selectionbtn" onClick={()=>setCharacterCreationStage(1)}>Finish Race selection</button>
           </div></>}
           {characterCreationStage === 1 && <>
           <div className="portrait-containerparent">
           <Races singleRace={raceId} stage={characterCreationStage}/>
           <Gallery className="selected" singleImg={portraitId} stage={characterCreationStage}/>
           <button disabled={portraitId === undefined} className="selectionbtn" onClick={()=>setCharacterCreationStage(2)}>Finish portrait selection</button>
           </div></>}
           {characterCreationStage === 2 && <>
           <div className="classesParent">
           <div className="classCardParent">
           <h2 className="classes-h2">Classes</h2>
           <Gallery className="galleryimg-minimize" singleImg={portraitId} stage={characterCreationStage}/>
           <Races singleRace={raceId} stage={characterCreationStage} />
           <div className="classCardParent1">
            <ClassesComponent singleClass={classId} stage={characterCreationStage} />
            </div>
            </div>
           <button disabled={classId===undefined} className="selectionbtn" onClick={()=>setCharacterCreationStage(3)}>Finish Class selection</button>
            </div>
           </>}
           {characterCreationStage === 3 && <>
           <div className="classesParent">
           <div className="classCardParent">
           <Gallery className="galleryimg-minimize" singleImg={portraitId} stage={characterCreationStage}/>
           <Races singleRace={raceId} stage={characterCreationStage} />
           <div className="classCardParent1">
           <ClassesComponent singleClass={classId} stage={characterCreationStage} />
           </div>
           </div>
           <button className="selectionbtn" onClick={()=>setCharacterCreationStage(4)}>Finish3</button>
           </div>
           </>}
           {characterCreationStage === 4 && <>
           <div className="classesParent">
           <div className="classCardParent">
           <Gallery className="galleryimg-minimize" singleImg={portraitId} stage={characterCreationStage}/>
           <Races singleRace={raceId} stage={characterCreationStage} />
           <div className="classCardParent1">
           <ClassesComponent singleClass={classId} stage={characterCreationStage} />
           </div>
           </div>
           <button className="selectionbtn" onClick={()=>setCharacterCreationStage(5)}>Finish 4</button>
           </div>
           </>}
        </>
    )
}