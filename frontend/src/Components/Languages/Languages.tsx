import { LanguagesData } from "./LanguagesData";

export default function Languages() {
    return (
        <>
        <div className="languages-container">
            <h2>Languages</h2>
            <p>Choose the languages your character knows. You can choose more than two languages if your character's race or background allows it.</p>
            <p>Standard Languages: </p>
                    {LanguagesData.normalLanguages.map((language, index) => (
                    <button key={index}>{language}</button>
                        ))}
             
            <p>Rare Languages: </p>
            
                {LanguagesData.rareLanguages.map((language, index) => (
                    <button disabled key={index}>{language}</button>
                ))}
            
        </div>
    </>
    )
}