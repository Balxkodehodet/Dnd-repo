import { CharBackgrounds } from "./CharBackgrounds.ts";
import { useState } from "react";
import type { setCharacterStage } from "../../types/CharBackgroundTypes.ts";
import sage from '../../assets/graduation-owl.png'
import soldier from '../../assets/greek.png'
import acolyte from '../../assets/acolyte.png'
import criminal from '../../assets/bandit.png'

export default function CharacterBackground({ setCharacterCreationStage }: setCharacterStage) {
    const [chosen, setChosen] = useState<boolean>(false)
    const [chosenTxt, setChosenTxt] = useState<string>("")
    const [chosenBackground, setChosenBackground] = useState<string>("")
    const [backgroundStage, setBackgroundStage] = useState<number>(0)
    return (
        <>
            {backgroundStage === 0 && <div className="background-containerParent">{CharBackgrounds.map((background, index) => {
                return (
                    <>
                        <div onClick={() => setChosenBackground(background.Name)} key={index} className="background-container">
                            <img className="background-img" src={background.Name.toLowerCase() === "sage" ? sage :
                                background.Name.toLowerCase() === "acolyte" ? acolyte : background.Name.toLowerCase() ===
                                    "criminal" ? criminal : background.Name.toLowerCase() === "soldier" ? soldier : undefined}/>
                            <h3>{background.Name}</h3>
                            <p><strong>Ability Scores: </strong>{background.AbilityScores.join("/")}</p>
                            <p><strong>Feat: </strong>{background.Feat}</p>
                            <p><strong>Skills: </strong>{Array.isArray(background.SkillProf) ? background.SkillProf.join("/") : background.SkillProf}</p>
                            <p><strong>Tools: </strong>{background.ToolProf}</p>
                            <h3>Choose Equipment: </h3>
                            <p onClick={(e) => {
                                return (
                                    <>
                                        {setChosen(prev => !prev)}
                                        {setChosenTxt(e.currentTarget.textContent)}
                                    </>
                                )

                            }} className="backgroundA"><strong>A:</strong>{Array.isArray(background.Equipment.A) ? background.Equipment.A.join(" / ") : background.Equipment.A}</p>
                            <p onClick={(e) => {
                                return (
                                    <>
                                        {setChosen(prev => !prev)}
                                        {setChosenTxt(e.currentTarget.textContent)}
                                    </>
                                )

                            }} className="backgroundB"><strong>B:</strong>{background.Equipment.B}</p>
                        </div>
                    </>)
            })}</div>}
            {chosenBackground && backgroundStage === 0 && <><button onClick={() => setBackgroundStage(prev => prev + 1)}>Choose Background: {chosenBackground}</button></>}
            
            <button disabled={backgroundStage === 0 || backgroundStage === 1} className="selectionbtn" onClick={() => setCharacterCreationStage(6)}>Finish Character Origins</button>
        </>
    )
}