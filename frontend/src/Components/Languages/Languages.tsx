import { LanguagesData } from "./LanguagesData";
import { useState } from "react";
import check from "../../assets/check.png"
import x from "../../assets/close.png"

export default function Languages({setStage}: {setStage: React.Dispatch<React.SetStateAction<number>>, stage: number}): React.JSX.Element {
    const [languageChosenIndex, setLanguageChosenIndex] = useState<number[] | null>(null);
    return (
        <>
        <div className="languages-container">
            <h2>Languages</h2>
            <p>Choose the languages your character knows. You can choose more than two languages if your character's race or background allows it.</p>
            <p>Standard Languages: </p>
                    {LanguagesData.normalLanguages.map((language, index) => (
                    <button
                        disabled={language === "Common"}
                        className={languageChosenIndex?.includes(index) ? "chosen" : ""} 
                        key={index} 
                        onClick={() => !languageChosenIndex ? setLanguageChosenIndex([index]) : languageChosenIndex.length < 2 ? setLanguageChosenIndex((prev) => prev && [...prev, index]) : null}
                    >
                       <div className="language-icons"> {language} {languageChosenIndex?.includes(index) && <div><img src={check} /> <img onClick={() => languageChosenIndex.length === 2 ? setLanguageChosenIndex((prev) => prev && prev.filter((i) => i !== index)) : setLanguageChosenIndex(null)} src={x} /></div> }</div>
                    </button>
                        ))}
             
            <p>Rare Languages: </p>
            
                {LanguagesData.rareLanguages.map((language, index) => (
                    <button disabled key={index}>{language}</button>
                ))}
            
        </div>
        {languageChosenIndex && languageChosenIndex.length === 2 && <div className="chosen-languages"><button className="selectionbtn" onClick={() => setLanguageChosenIndex(null)}>Clear Selection</button><button onClick={() => setStage(prev => prev + 1)} className="selectionbtn">Finish Language Selection</button></div>}
    </>
    )
}