import {useState} from "react"
import Gallery from "./Gallery/Gallery";
import {useParams} from 'react-router-dom'
import ClassesComponent from "./ClassesComponent";
import type { characterData } from "../types/types";

export default function CreateCharacter(){

    const [selectedClass, setSelectedClass] = useState<characterData | null>(null)
    const {id} = useParams();
    let [characterCreationStage, setCharacterCreationStage] = useState<number | undefined>(0);
    return (
        <>
           {characterCreationStage === 0 && <>
           <div className="portrait-containerparent">
           <Gallery className="selected" singleImg={id}/>
           <button className="selectionbtn" onClick={()=>setCharacterCreationStage(1)}>Finish portrait selection</button>
           </div></>}
           {characterCreationStage === 1 && <>
           <div className="classesParent">
           <div className="classCardParent">
           <h2 className="classes-h2">Classes</h2>
           <Gallery className="galleryimg-minimize" singleImg={id}/>
           <div className="classCardParent1">
            <ClassesComponent selectedClass={selectedClass} setSelectedClass={setSelectedClass}/>
            </div>
            </div>
           <button className="selectionbtn" onClick={()=>setCharacterCreationStage(2)}>Finish Class selection</button>
            </div>
           </>}
           {characterCreationStage === 2 && <>
           <div className="classesParent">
           <div className="classCardParent">
           <Gallery className="galleryimg-minimize" singleImg={id}/>
           <div className="classCardParent1">
           <ClassesComponent selectedClass={selectedClass} setSelectedClass={setSelectedClass}/>
           </div>
           </div>
           <button className="selectionbtn" onClick={()=>setCharacterCreationStage(3)}>Finish3</button>
           </div>
           </>}
           {characterCreationStage === 3 && <>
           <div className="classesParent">
           <div className="classCardParent">
           <Gallery className="galleryimg-minimize" singleImg={id}/>
           <div className="classCardParent1">
           <ClassesComponent selectedClass={selectedClass} setSelectedClass={setSelectedClass}/>
           </div>
           </div>
           <button className="selectionbtn" onClick={()=>setCharacterCreationStage(4)}>Finish 4</button>
           </div>
           </>}
        </>
    )
}