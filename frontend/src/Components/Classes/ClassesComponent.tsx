import {Classes} from '../../data/Classes.ts'
import type { classProps } from '../../types/types.ts';
import {useParams, Link} from 'react-router-dom'

export default function ClassesComponent({singleClass, stage}:classProps): React.JSX.Element {

    let classIndex = Number(singleClass);
    let hasValidClass = Number.isInteger(classIndex) && classIndex < Classes.length && classIndex >= 0;
    const {raceId, portraitId, classId} = useParams();
    let chosenSingleClass = hasValidClass ? Classes[Number(singleClass)] : undefined;
    
    return (
        <>

        {!chosenSingleClass && Classes.map((characterClass, index) => {
                        return (
                            <> 
                        <Link to={`/home/create-character/${raceId}/${portraitId}/${characterClass.class}`}>    
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
        {chosenSingleClass && 
                     <div className="classCard">
                            <h2>{chosenSingleClass.class}</h2>
                            <p>Likes: {chosenSingleClass.likes}</p>
                            <p>Primary Abillity: {chosenSingleClass.primaryAbility}</p>
                            <p>Complexity: {chosenSingleClass.Complexity}</p>
                     </div>      
        }            
    </>)
}