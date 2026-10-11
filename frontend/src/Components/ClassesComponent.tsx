import {Classes} from '../data/Classes.ts'
import type { classProps } from '../types/types.ts';

export default function ClassesComponent({selectedClass, setSelectedClass}:classProps): React.JSX.Element {
    
    return (
        <>

        {!selectedClass && Classes.map((characterClass, index) => {
                        return (
                            <> 
                        <div onClick={()=>
                            {
                                setSelectedClass(characterClass);
                            }
                            } key={index} className="classCard">
                            <h2>{characterClass.class}</h2>
                            <p>Likes: {characterClass.likes}</p>
                            <p>Primary Abillity: {characterClass.primaryAbility}</p>
                            <p>Complexity: {characterClass.Complexity}</p>
                            
                        </div>
                        </>
                        )   
                    })}
        {selectedClass && 
                     <div className="classCard">
                            <h2>{selectedClass.class}</h2>
                            <p>Likes: {selectedClass.likes}</p>
                            <p>Primary Abillity: {selectedClass.primaryAbility}</p>
                            <p>Complexity: {selectedClass.Complexity}</p>
                     </div>      
        }            
    </>)
}