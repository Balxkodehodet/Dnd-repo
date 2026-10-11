import {useState} from "react"
import Gallery from "./Gallery/Gallery";
import {useParams} from 'react-router-dom'
export default function CreateCharacter(){

    const {id} = useParams();
    let [characterCreationStage, setCharacterCreationStage] = useState<number>(0);
    return (
        <>
           {characterCreationStage === 0 && <>
           <div className="portrait-containerparent">
           <Gallery className="portrait-containerparent" singleImg={id}/>
           <button className="selectionbtn" onClick={()=>setCharacterCreationStage(1)}>Finish portrait selection</button>
           </div></>}
           {characterCreationStage === 1 && <>
           <Gallery className="galleryimg-minimize" singleImg={id}/>
           <button className="selectionbtn" onClick={()=>setCharacterCreationStage(2)}>Finish Class selection</button>
           </>}
           {characterCreationStage === 2 && <>
           <Gallery singleImg={id}/>
           <button className="selectionbtn" onClick={()=>setCharacterCreationStage(3)}>Finish3</button>
           </>}
           {characterCreationStage === 3 && <>
           <Gallery singleImg={id}/>
           <button className="selectionbtn" onClick={()=>setCharacterCreationStage(4)}>Finish 4</button>
           </>}
        </>
    )
}