import { CharBackgrounds } from "./CharBackgrounds.ts";
import { useState } from "react";
import type { setCharacterStage } from "../../types/CharBackgroundTypes.ts";
import sage from '../../assets/graduation-owl.png'
import soldier from '../../assets/greek.png'
import acolyte from '../../assets/acolyte.png'
import criminal from '../../assets/bandit.png'

export default function CharacterBackground({ setCharacterCreationStage, backgroundStage, setBackgroundStage, chosenBackground, setChosenBackground }: setCharacterStage) {
    const [chosenA, setChosenA] = useState<boolean>(false);
    const [chosenB, setChosenB] = useState<boolean>(false);
    const [chosenTxt, setChosenTxt] = useState<string>("")
    const selectedBackground = CharBackgrounds.find(background => background.Name === chosenBackground)
    return (
        <>
            {backgroundStage === 0 && <div className="background-containerParent">{CharBackgrounds.map((background, index) => {
                return (
                    <>
                        <div onClick={() => setChosenBackground(background.Name)} key={index} className="background-container">
                            <img className="background-img" src={background.Name.toLowerCase() === "sage" ? sage :
                                background.Name.toLowerCase() === "acolyte" ? acolyte : background.Name.toLowerCase() ===
                                    "criminal" ? criminal : background.Name.toLowerCase() === "soldier" ? soldier : undefined} />
                            <h3>{background.Name}</h3>
                            <p><strong>Ability Scores: </strong>{background.AbilityScores.join("/")}</p>
                            <p><strong>Feat: </strong>{background.Feat}</p>
                            <p><strong>Skills: </strong>{Array.isArray(background.SkillProf) ? background.SkillProf.join("/") : background.SkillProf}</p>
                            <p><strong>Tools: </strong>{background.ToolProf}</p>
                            <h3>Choose Equipment: </h3>
                            <p className="backgroundA"><strong>A:</strong>{Array.isArray(background.Equipment.A) ? background.Equipment.A.join(" / ") : background.Equipment.A}</p>
                            <p className="backgroundB"><strong>B:</strong>{background.Equipment.B}</p>
                        </div>
                    </>)
            })}</div>}
            {chosenBackground && backgroundStage === 0 && <><button onClick={() => {
                setBackgroundStage(prev => prev + 1);
            }}>
                Choose Background: {chosenBackground}
            </button></>}
            {backgroundStage === 1 && <><h3>Choose Equipment: </h3>
                <p className="equipmentBtn" onClick={(e) => {
                    return (
                        <>
                            {setChosenA(() => true)}
                            {setChosenB(() => false)}
                            {setChosenTxt(e.currentTarget.textContent)}
                        </>
                    )

                }}>{Array.isArray(selectedBackground?.Equipment.A) ? selectedBackground?.Equipment.A.join(" / ") : selectedBackground?.Equipment.A}</p>
                <p className="equipmentBtn" onClick={(e) => {
                    return (
                        <>
                            {setChosenB(() => true)}
                            {setChosenA(() => false)}
                            {setChosenTxt(e.currentTarget.textContent)}
                        </>
                    )

                }}>{selectedBackground?.Equipment.B}</p>
            </>}

            {backgroundStage === 1 && (chosenA || chosenB) && <><button className="equipmentBtn">Selected {chosenB ? "B" : "A"}: {chosenTxt} </button><button className="equipmentBtn" onClick={() => {
                setBackgroundStage(2) 
                setCharacterCreationStage && setCharacterCreationStage(6) 
            }
            }>Finish Character Origins</button></>}
            {backgroundStage === 2 && <div className="selectedBackground"><h3>Chosen Background</h3><p>{chosenBackground}</p></div>}
        </>
    )
}