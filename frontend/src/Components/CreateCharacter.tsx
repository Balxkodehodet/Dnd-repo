import {useState} from "react"
import Gallery from "./Gallery/Gallery";
import {useParams} from 'react-router-dom'
import { Classes } from "../data/Classes";
export default function CreateCharacter(){

    const {id} = useParams();
    let [characterCreationStage, setCharacterCreationStage] = useState<number>(0);
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
            {Classes.map((characterClass, index) => {
                return ( 
                    <div key={index} className="classCard">
                 <p className="classbtn">{characterClass.class}</p>
                 <p>Likes: {characterClass.likes}</p>
                 <p>Primary Abillity: {characterClass.primaryAbility}</p>
                 <p>Complexity: {characterClass.Complexity}</p>
                 
                </div>   
                )   
            })}
            </div>
            </div>
           <button className="selectionbtn" onClick={()=>setCharacterCreationStage(2)}>Finish Class selection</button>
            </div>
           </>}
           {characterCreationStage === 2 && <>
           <Gallery className="galleryimg-minimize" singleImg={id}/>
           <button className="selectionbtn" onClick={()=>setCharacterCreationStage(3)}>Finish3</button>
           </>}
           {characterCreationStage === 3 && <>
           <Gallery className="galleryimg-minimize" singleImg={id}/>
           <button className="selectionbtn" onClick={()=>setCharacterCreationStage(4)}>Finish 4</button>
           </>}
        </>
    )
}