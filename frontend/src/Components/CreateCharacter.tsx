import {useState} from "react"
import Gallery from "./Gallery/Gallery";
import {useParams} from 'react-router-dom'
export default function CreateCharacter(){

    const {id} = useParams();
    console.log("id:", id)
    let [characterCreationStage, setCharacterCreationStage] = useState<number>(0);
    return (
        <>
           {characterCreationStage === 0 && <>
           <Gallery singleImg={id}/>
           <button onClick={()=>setCharacterCreationStage(1)}>Finish1</button>
           </>}
           {characterCreationStage === 1 && <>
           <Gallery singleImg={id}/>
           <button onClick={()=>setCharacterCreationStage(2)}>Finish2</button>
           </>}
           {characterCreationStage === 2 && <>
           <Gallery singleImg={id}/>
           <button onClick={()=>setCharacterCreationStage(3)}>Finish3</button>
           </>}
           {characterCreationStage === 3 && <>
           <Gallery singleImg={id}/>
           <button onClick={()=>setCharacterCreationStage(4)}>Finish 4</button>
           </>}
        </>
    )
}