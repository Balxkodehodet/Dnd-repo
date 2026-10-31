import { Classes } from '../../data/Classes.ts'
import type { classProps } from '../../types/types.ts';
import type { classData } from '../../types/ClassData.ts'
import { useParams, Link } from 'react-router-dom'
import CreateSlug from '../CreateSlug.tsx'
import x from '../../assets/close.png'
import { useState, useEffect } from 'react';
import type { singleSkill } from '../../types/Skills.ts';
import check from '../../assets/check.png'
import { SkillsInfo } from '../../data/SkillsInfo.ts';
import banner from '../../assets/banner.png'

export default function ClassesComponent({ singleClass, setStage, stage, setClassStage, classStage, btmMenu }: classProps): React.JSX.Element {

    const selectedClass: classData | undefined = Classes.find(cls => CreateSlug(cls.class) === CreateSlug(singleClass));
    const { nameId, genderId, raceId, portraitId } = useParams();
    const [skill, setSkill] = useState<string | undefined>(undefined);
    const [selectedSkill, setSelectedSkill] = useState<singleSkill[] | []>(() => {
        const stored = localStorage.getItem("selectedSkills");
        return stored ? JSON.parse(stored) : []
    });
    const [selectedTool, setSelectedTool] = useState<string[] | null>(() => {
        const stored = localStorage.getItem("selectedTools");

        return stored ? JSON.parse(stored) : null;
    });
    const [selectedTool2, setSelectedTool2] = useState<string[] | null>(() => {
        const stored = localStorage.getItem("selectedTools2");

        return stored ? JSON.parse(stored) : null;
    });
    const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined)
    const singleSkill = SkillsInfo.find((s) => CreateSlug(s.skill) === CreateSlug(skill))

    // Setter timer på hver errorMsg på 3 sekunder
    useEffect(() => {
        if (!errorMsg) return;

        const timer = setTimeout(() => {
            setErrorMsg("");
        }, 3000);

        return () => clearTimeout(timer);
    }, [errorMsg]);


    useEffect(() => {
        localStorage.setItem("selectedSkills", JSON.stringify(selectedSkill))
    }, [selectedSkill]);

    useEffect(() => {
        localStorage.setItem("selectedTools", JSON.stringify(selectedTool))
        console.log("Selected a tool")
    }, [selectedTool]);

    function resetTools() {
        localStorage.removeItem("selectedTools");
    }
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
                                            wep.requiredProperty.map((reqprop, i) => <div key={i} className="equipmentParent">Weapon Property Required: {reqprop}</div>) :
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
                        return setSelectedSkill(prev => [...prev, singleSkill])



                    }}
                        className="skillBtn">Select Skill</button></>}

                    {/* Button for finishing skill selection and resetting tools if refresh happened and tools still have items in localstorage*/}
                    {classStage === 1 && selectedSkill.length === selectedClass.Proficiencies.skills.choose && <button className="classBtnNext" onClick={() => {
                        setClassStage(2)
                        resetTools();
                    }}>Next</button>}

                    {/* If not tools are available continue to finish class Selection */}
                    {classStage === 2 && !selectedClass.Proficiencies.tool && <><div className="finishClass"><img src={banner} /><button onClick={() => {
                        setClassStage && setClassStage((prev) => {
                            if (prev === null) { return null }
                            if (prev === undefined) { return null }
                            const newClassStage = prev && prev + 1
                            localStorage.setItem("classStage", newClassStage.toString());
                            return newClassStage
                        })
                        setStage && setStage((prev) => {
                            const newStage = prev + 1
                            localStorage.setItem("characterCreationStage", newStage.toString())
                            return newStage;
                        })
                    }}>Finish class selection</button></div></>}

                    {/* Map through all tools available and options for each tool */}

                    {/* ClassStage 2 - If tools are an array */}

                    {/* Set the Tools into 2 different tools by accessing the index of array tool*/}
                    {classStage === 2 && Array.isArray(selectedClass.Proficiencies.tool) && selectedClass.Proficiencies.tool[0].choose &&
                        <><h3>Tool:</h3><div><h3> {selectedClass.Proficiencies.tool[0].toolName}</h3><h3>Choose: {selectedClass.Proficiencies.tool[0].choose} : </h3>
                            <div className="toolsParent">{selectedClass.Proficiencies.tool[0].options?.map((t, i) => <button disabled={Array.isArray(selectedClass.Proficiencies.tool) && selectedTool?.length === selectedClass.Proficiencies.tool[0].choose} key={i} onClick={() => setSelectedTool((prev) => prev !== null ? [...prev, t] : [t])} className='tools'>{t}</button>)}</div></div></>}
                    {classStage === 2 && Array.isArray(selectedClass.Proficiencies.tool) && selectedClass.Proficiencies.tool[1].choose &&
                        <><h3>Tool:</h3><div><h3> {selectedClass.Proficiencies.tool[1].toolName}</h3><h3>Choose: {selectedClass.Proficiencies.tool[1].choose} : </h3>
                            <div className="toolsParent">{selectedClass.Proficiencies.tool[1].options?.map((t, i) => <button disabled={Array.isArray(selectedClass.Proficiencies.tool) && selectedTool2?.length === selectedClass.Proficiencies.tool[1].choose} key={i} onClick={() => setSelectedTool2((prev) => prev !== null ? [...prev, t] : [t])} className='tools'>{t}</button>)}</div></div></>}
                    {/* */}
                    {classStage === 2 && Array.isArray(selectedClass.Proficiencies.tool) && selectedTool?.length !== null && selectedTool?.length !== undefined && selectedClass.Proficiencies.tool[0].choose !== undefined && selectedTool?.length <= selectedClass.Proficiencies.tool[0].choose &&
                        <><h3>Chosen {selectedClass.Proficiencies.tool[0].toolName} Tools: </h3> <div className="toolsParent">{selectedTool.map((tool, id) => <p key={id} className="tools">{tool}</p>)}</div></>}
                    {classStage === 2 && Array.isArray(selectedClass.Proficiencies.tool) && selectedTool2?.length !== null && selectedTool2?.length !== undefined && selectedClass.Proficiencies.tool[1].choose !== undefined && selectedTool2?.length <= selectedClass.Proficiencies.tool[1].choose &&
                        <><h3>Chosen {selectedClass.Proficiencies.tool[1].toolName} Tools: </h3> <div className="toolsParent">{selectedTool2.map((tool, id) => <p key={id} className="tools">{tool}</p>)}</div></>}


                    {/* ClassStage 2 - If tools are not an array but an object */}

                    {classStage === 2 && !Array.isArray(selectedClass.Proficiencies.tool) && !selectedClass.Proficiencies.tool?.choose && <><h3>Tools:</h3><div className="tools-check"><p>{selectedClass.Proficiencies.tool?.toolName}</p><img className="check" src={check}/></div></>}
                    {classStage === 2 && !Array.isArray(selectedClass.Proficiencies.tool) && selectedClass.Proficiencies.tool?.choose && <><h3>Tools:</h3><p>{selectedClass.Proficiencies.tool?.toolName}</p>
                        <p>Choose: {selectedClass.Proficiencies.tool?.choose}</p><div className="toolsParent">{selectedClass.Proficiencies.tool?.options?.map((op, i) => <button disabled={!Array.isArray(selectedClass.Proficiencies.tool) && selectedTool?.length === selectedClass.Proficiencies.tool?.choose || selectedTool?.some(selected => selected === op)} onClick={() => setSelectedTool((prev) => prev !== null ? [...prev, op] : [op])} className="tools" key={i}>{op}</button>)}</div>
                    </>}
                    {classStage === 2 && selectedTool?.length !== null && selectedTool?.length !== undefined && !Array.isArray(selectedClass.Proficiencies.tool) && selectedClass.Proficiencies.tool?.choose && selectedTool?.length <= selectedClass.Proficiencies.tool?.choose && <><h3>Chosen Tools:</h3><div className="toolsParent">{selectedTool?.map((tool, id) => <p key={id} className="tools">{tool}</p>)}</div></>}
                    {/* Finish buttons and reset buttons for object tools (only one tool) */}
                    {classStage === 2 && !Array.isArray(selectedClass.Proficiencies.tool) && selectedClass.Proficiencies.tool?.choose && selectedTool?.length === selectedClass.Proficiencies.tool.choose && <><h3>Finished choosing tools</h3><button onClick={() => setSelectedTool(null)}>Reset</button><button className="selectionBtn" onClick={() => {
                        setClassStage && setClassStage((prev) => {
                            if (prev === null) { return null }
                            if (prev === undefined) { return null }
                            const newClassStage = prev && prev + 1
                            localStorage.setItem("classStage", newClassStage.toString());
                            return newClassStage
                        })
                        setStage && setStage((prev) => {
                            const newStage = prev + 1
                            localStorage.setItem("characterCreationStage", newStage.toString())
                            return newStage;
                        })
                    }}>Finish Class Selection</button></>}
                    {/* Buttons for finishing or resetting tools for Array tools*/}
                    {classStage === 2 && Array.isArray(selectedClass.Proficiencies.tool) && selectedClass.Proficiencies.tool[0]?.choose && selectedTool?.length === selectedClass.Proficiencies.tool[0].choose && <><h3>Finished choosing tools</h3><button onClick={() => setSelectedTool(null)}>Reset {selectedClass.Proficiencies.tool[0].toolName}</button></>}
                    {classStage === 2 && Array.isArray(selectedClass.Proficiencies.tool) && selectedClass.Proficiencies.tool[1]?.choose && selectedTool2?.length === selectedClass.Proficiencies.tool[1].choose && <><h3>Finished choosing tools</h3><button onClick={() => setSelectedTool2(null)}>Reset {selectedClass.Proficiencies.tool[1].toolName}</button></>}
                    {classStage === 2 && Array.isArray(selectedClass.Proficiencies.tool) && selectedClass.Proficiencies.tool[0]?.choose && selectedClass.Proficiencies.tool?.length > 1 && selectedClass.Proficiencies.tool[1]?.choose && selectedTool?.length === selectedClass.Proficiencies.tool[0].choose && selectedTool2?.length === selectedClass.Proficiencies.tool[1].choose && <button className="finishClass" onClick={() => {
                        setClassStage && setClassStage((prev) => {
                            if (prev === null) { return null }
                            if (prev === undefined) { return null }
                            const newClassStage = prev && prev + 1
                            localStorage.setItem("classStage", newClassStage.toString());
                            return newClassStage
                        })
                        setStage && setStage((prev) => {
                            const newStage = prev + 1
                            localStorage.setItem("characterCreationStage", newStage.toString())
                            return newStage;
                        })
                    }}>Finish Class Selection</button>}

                    {/* ClassStage 3 - set the Chosen class inside character info at stage 3 - ErrorMsg displays independently of classStage */}
                    {classStage === 3 && <div className="selectedClass"><h2>Chosen Class: </h2><p>{selectedClass.class}</p></div>}
                    {errorMsg && <div className="errorMsg">{errorMsg}</div>}
                </>
            }
        </>)
}