import {Classes} from '../../data/Classes.ts'
import type { classProps, classData } from '../../types/types.ts';
import {useParams, Link} from 'react-router-dom'
import CreateSlug from '../CreateSlug.tsx'
import x from '../../assets/close.png'

export default function ClassesComponent({singleClass, stage}:classProps): React.JSX.Element {

    const selectedClass: classData | undefined = Classes.find(cls => CreateSlug(cls.class) === singleClass);
    const {raceId, portraitId} = useParams();

    
    return (
        <>

        {!selectedClass && Classes.map((characterClass, index) => {
                        return (
                            <> 
                        <Link className="classCard-link"to={`/home/create-character/${raceId}/${portraitId}/${CreateSlug(characterClass.class)}`}>    
                        <div key={index} className="classCard">
                            <h2>{characterClass.class}</h2>
                            <p>Likes: {characterClass.likes}</p>
                            <p>Primary Abillity: {characterClass.primaryAbility}</p>
                            <p>Complexity: {characterClass.Complexity}</p>
                            
                        </div>
                        </Link>
                        </>
                        )   
                    })}
        {selectedClass && 
                     <div className={"singleClassCard"}>
                            {stage === 2 && <Link to={`/home/create-character/${raceId}/${portraitId}`}><img className="x-class" src={x}/></Link>}
                            <h2>{selectedClass.class}</h2>
                            <p>Likes: {selectedClass.likes}</p>
                            <p>Primary Abillity: {selectedClass.primaryAbility}</p>
                            <p>Complexity: {selectedClass.Complexity}</p>
                     </div>      
        }            
    </>)
}