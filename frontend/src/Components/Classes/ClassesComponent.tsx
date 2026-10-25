import { Classes } from '../../data/Classes.ts'
import type { classProps } from '../../types/types.ts';
import type { classData } from '../../types/ClassData.ts'
import { useParams, Link } from 'react-router-dom'
import CreateSlug from '../CreateSlug.tsx'
import x from '../../assets/close.png'
import { useState, useEffect } from 'react';
import type { singleSkill } from '../../types/Skills.ts';
import check from '../../assets/check.png'
//import useGetData from '../../Hooks/useGetData.tsx';
import { SkillsInfo } from '../../data/SkillsInfo.ts';

export default function ClassesComponent({ singleClass, stage, setClassStage, classStage, btmMenu }: classProps): React.JSX.Element {

    const selectedClass: classData | undefined = Classes.find(cls => CreateSlug(cls.class) === CreateSlug(singleClass));
    const { nameId, genderId, raceId, portraitId } = useParams();
    const [skill, setSkill] = useState<string | undefined>(undefined);
    const [selectedSkill, setSelectedSkill] = useState<singleSkill[] | []>([]);
    const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined)
    const singleSkill = SkillsInfo.find((s) => CreateSlug(s.skill) === CreateSlug(skill))
    //let skillUrl: string | null = skill ? `https://www.dnd5eapi.co/api/2024/skills/${skill?.toLowerCase()}` : null;

    //let {data: skillData, isLoading: skillLoading, isError: skillError} = useGetData(skillUrl)

    // Setter timer på hver errorMsg på 3 sekunder
    useEffect(() => {
        if (!errorMsg) return;

        const timer = setTimeout(() => {
            setErrorMsg("");
        }, 3000);

        return () => clearTimeout(timer);
    }, [errorMsg]);


    return (
        <>
            {/* All classes represented by sorting them through with cards*/}
            {!selectedClass && Classes.map((characterClass, index) => {
                return (

                    <Link key={index} className="classCard-link" to={`/home/create-character/${nameId}/${genderId}/${raceId}/${portraitId}/${CreateSlug(characterClass.class)}`}>
                        <div className="classCard">
                            <h2>{characterClass.class}</h2>
                            <p>Likes: {characterClass.likes}</p>
                            <p>Primary Abillity: {characterClass.primaryAbility}</p>
                            <p>Complexity: {characterClass.Complexity}</p>

                        </div>
                    </Link>

                )
            })}
            {/* Selected Class - When a Single class has been chosen through the URL Param ID chosen from the singleClass prop from
                parent component CreateCharacter - set through a series of classStages not to be confused with stages, which is
                stages inherited from parent createCharacter component - said shortly - there are stages in this class component
                and also different stages to creating the rest of the character */}
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
                            <div className="proficiencyParent">Proficiencies: <br></br>-Armor: {selectedClass.Proficiencies.armor.join("/")}
                                <br></br>-Saving Throws: {selectedClass.Proficiencies.savingThrows.join("/")}
                                <br></br>-Shields: {selectedClass.Proficiencies.shields ? "Has shield training" : "No shield training"}
                                <br></br>-Weapons: {selectedClass.Proficiencies.weapon.map((wep, index) => {
                                    return (<div key={`${wep.category}-${index}`}>{wep.category} -
                                        {wep.requiredProperty && Array.isArray(wep.requiredProperty) ?
                                            wep.requiredProperty.map((reqprop) => <div className="equipmentParent">Weapon Property Required: {reqprop}</div>) :
                                            wep.requiredProperty ?
                                                <div className="equipmentParent">Required: {wep.requiredProperty}</div>
                                                : null}</div>)
                                })}
                                <br></br>-Skills: Choose {selectedClass.Proficiencies.skills.choose} from:
                                <br></br><span className="skillSpan">{selectedClass.Proficiencies.skills.options.map((skill, index) => <div key={`${skill}-${index}`} className="skillParent2">{skill}</div>)}</span>
                                {selectedClass.Proficiencies.tool && (Array.isArray(selectedClass.Proficiencies.tool) ? selectedClass.Proficiencies.tool?.map((tool, index) => (

                                    <span key={`${tool.toolName}-${index}`}>{tool.toolName}</span>
                                )
                                ) : <><span>{selectedClass.Proficiencies.tool?.toolName}<br></br>
                                    - {selectedClass.Proficiencies.tool?.choose ? "Choose - " + selectedClass.Proficiencies.tool?.choose : ""}<br></br>
                                    - {selectedClass.Proficiencies.tool?.options && (<>
                                        {selectedClass.Proficiencies.tool.options.map((tool, index) => (
                                            <div className="toolParent" key={`${tool}-${index}`}><br></br>{tool}</div>
                                        ))}
                                    </>)}
                                </span>
                                </>
                                )}



                            </div>
                            <div className="equipParentContainer">Choices of Starting Equipment:<br></br><strong> A:</strong>{Array.isArray(selectedClass.StartingEquipment.Choose.A) && selectedClass.StartingEquipment.Choose.A.map((eq, index) => <div key={`${eq}-${index}`} className="equipmentParent">{eq}</div>)}
                                <br></br> <strong> B:</strong><br></br>{Array.isArray(selectedClass.StartingEquipment.Choose.B) ? selectedClass.StartingEquipment.Choose.B.map((eq) => <div className="equipmentParent">{eq}</div>) : <div className="equipmentParent">{selectedClass.StartingEquipment.Choose.B}</div>}
                                {selectedClass.StartingEquipment.Choose.C && <><span>C:{selectedClass.StartingEquipment.Choose.C}</span></>}

                            </div>
                            <div><h2>Features</h2>{selectedClass.Features.map((feature, index) =>
                            (

                                <div key={`${feature.name}-${index}`} className="featureParent">
                                    <h3>{feature.name}</h3><br></br>
                                    <h3>Level: {feature.level}</h3><br></br><span>{feature.description}</span><br></br><br></br>
                                </div>

                            )
                            )
                            }
                            </div>
                            {btmMenu && <button className="classBtnNext" onClick={() => setClassStage(1)}>Next</button>}
                        </div>}
                    {!skill && classStage === 1 && <>
                        {selectedSkill.length < selectedClass.Proficiencies.skills.choose ? <h3>Choose {selectedClass.Proficiencies.skills.choose - selectedSkill.length} skills</h3> : <h3>You can't pick anymore skills</h3>}
                        <div className="classCardParent1">{selectedClass.Proficiencies.skills.options.map((skill, index) => <div onClick={() => setSkill(skill.toLowerCase())} key={`${skill}-${index}`} className='skillParent'>{skill}</div>)}</div>
                    </>}
                    {classStage === 1 && selectedSkill.length < selectedClass.Proficiencies.skills.choose && <><p>Choose {selectedClass.Proficiencies.skills.choose - selectedSkill.length} more</p></>}
                    {classStage === 1 && selectedSkill.length > 0 && <><h3>You have Chosen:</h3><div>{selectedSkill.map((skill, index) => <div className="skillParentCheck" key={`${skill.skill}-${index}`}>{skill.skill}<div className="checkDiv"><img className="check" src={check} />
                        <img onClick={() => setSelectedSkill((prev) => prev.filter((s) => s.skill !== skill.skill))} className="x-check" src={x} /></div></div>)}</div></>}
                    {skill && classStage === 1 && singleSkill && <div className='skillParent'><p>Skill:{singleSkill.skill}</p><br></br><p>Ability:{singleSkill.ability}</p><br></br><p>Info:{singleSkill.information}</p><br></br><button className="backBtn" onClick={() => setSkill(undefined)}>Back</button></div>}
                    {singleSkill && classStage === 1 && <><button onClick={() => {
                        if (selectedSkill.some((skill) => skill.skill === singleSkill.skill)) {
                            setErrorMsg("You already picked that skill");
                            return;
                        }
                        if (selectedSkill.length >= selectedClass.Proficiencies.skills.choose) {
                            setErrorMsg("You cant pick anymore skills");
                            return;
                        }
                        return setSelectedSkill(prev => [...prev, singleSkill]);

                    }}
                        className="skillBtn">Select Skill</button></>}
                    {/* Button for finishing skill selection */}
                    {selectedSkill.length === selectedClass.Proficiencies.skills.choose && <button className="classBtnNext" onClick={() => setClassStage(2)}>Next</button>}
                    {classStage === 2}
                    {errorMsg && <div className="errorMsg">{errorMsg}</div>}
                </>
            }
        </>)
}