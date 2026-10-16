import { Classes } from '../../data/Classes.ts'
import type { classProps } from '../../types/types.ts';
import type { classData} from '../../types/ClassData.ts'
import { useParams, Link } from 'react-router-dom'
import CreateSlug from '../CreateSlug.tsx'
import x from '../../assets/close.png'
import { useState } from 'react';

export default function ClassesComponent({ singleClass, stage }: classProps): React.JSX.Element {

    const selectedClass: classData | undefined = Classes.find(cls => CreateSlug(cls.class) === singleClass);
    const {nameId, genderId, raceId, portraitId } = useParams();
    const [classStage, setClassStage] = useState<Number | null>(null)

    return (
        <>

            {!selectedClass && Classes.map((characterClass, index) => {
                return (
                    <>
                        <Link key={index} className="classCard-link" to={`/home/create-character/${nameId}/${genderId}/${raceId}/${portraitId}/${CreateSlug(characterClass.class)}`}>
                            <div className="classCard">
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
                <>
                    {!classStage &&
                        <div className={"singleClassCard"}>
                            {stage === 5 && <Link to={`/home/create-character/${nameId}/${genderId}/${raceId}/${portraitId}`}><img className="x-class" src={x} /></Link>}
                            <h2>{selectedClass.class}</h2>
                            <p>Likes: {selectedClass.likes}</p>
                            <p>Primary Abillity: {selectedClass.primaryAbility}</p>
                            <p>Complexity: {selectedClass.Complexity}</p>
                            <button onClick={()=>setClassStage(1)}>Next</button>
                        </div>}
                </>
            }
        </>)
}