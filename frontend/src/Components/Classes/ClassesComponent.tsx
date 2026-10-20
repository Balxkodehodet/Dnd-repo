import { Classes } from '../../data/Classes.ts'
import type { classProps } from '../../types/types.ts';
import type { classData } from '../../types/ClassData.ts'
import { useParams, Link } from 'react-router-dom'
import CreateSlug from '../CreateSlug.tsx'
import x from '../../assets/close.png'
import { useState } from 'react';

export default function ClassesComponent({ singleClass, stage }: classProps): React.JSX.Element {

    const selectedClass: classData | undefined = Classes.find(cls => CreateSlug(cls.class) === singleClass);
    const { nameId, genderId, raceId, portraitId } = useParams();
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
                            <p>Hitpoint Dice pr level: {selectedClass.HitPointDie}</p>
                            <p>Proficiencies: <br></br>-Armor: {selectedClass.Proficiencies.armor.join("/")}
                                <br></br>-Saving Throws: {selectedClass.Proficiencies.savingThrows.join("/")}
                                <br></br>-Shields: {selectedClass.Proficiencies.shields ? "Has shield training" : "No shield training"}
                                <br></br>-Weapons: {selectedClass.Proficiencies.weapon.map((wep) => { return (<><span key={wep.category}>{wep.category} - {wep.requiredProperty ? wep.requiredProperty : ""}</span></>) })}
                                <br></br>-Skills: Choose {selectedClass.Proficiencies.skills.choose} from:
                                <br></br><span className="skillSpan">{selectedClass.Proficiencies.skills.options.join(",")}</span>
                                {selectedClass.Proficiencies.tool && (Array.isArray(selectedClass.Proficiencies.tool) ? selectedClass.Proficiencies.tool?.map((tool, index) => (

                                    <span key={`${tool.toolName}-${index}`}>{tool.toolName}</span>
                                )
                                ) : <><span>{selectedClass.Proficiencies.tool?.toolName}<br></br>
                                    - {selectedClass.Proficiencies.tool?.choose ? "Choose - " + selectedClass.Proficiencies.tool?.choose : ""}<br></br>
                                    - {selectedClass.Proficiencies.tool?.options && (<>
                                        {selectedClass.Proficiencies.tool.options.map((tool, index) => (
                                            <><br></br><span key={`${tool}-${index}`}>{tool}</span></>
                                        ))}
                                    </>)}
                                </span>
                                </>
                                )}


                            </p>
                            <p>Choices of Starting Equipment: A:{Array.isArray(selectedClass.StartingEquipment.Choose.A) && selectedClass.StartingEquipment.Choose.A.join(" - ")}
                                <br></br>  B:{selectedClass.StartingEquipment.Choose.B}
                                {selectedClass.StartingEquipment.Choose.C && <><span>C:{selectedClass.StartingEquipment.Choose.C}</span></>}
                            </p>
                            <div><h2>Features</h2>{selectedClass.Features.map((feature, index) =>
                            (
                                <>
                                    <h3 key={`${feature.name}-${index}`}>{feature.name}</h3><br></br>
                                        <h3>Level: {feature.level}</h3><br></br><span>{feature.description}</span><br></br><br></br>
                                </>
                            )
                            )
                            }
                            </div>
                            <button className="classBtnNext" onClick={() => setClassStage(1)}>Next</button>
                        </div>}
                </>
            }
        </>)
}