import { useParams } from "react-router-dom"
import CreateSlug from "./CreateSlug.tsx";
import type { AbilityTypes } from "../types/Abilities.ts";
export default function AbilityScores({ abilityScoreStrength, abilityScoreDexterity, abilityScoreConstitution, abilityScoreIntelligence,
    abilityScoreWisdom, abilityScoreCharisma }: AbilityTypes) {
    const { classId } = useParams();
    const classSlug = CreateSlug(classId);

    const primaryStrength = classSlug === "fighter" || classSlug === "barbarian" || classSlug === "paladin"
    const primaryDexterity = classSlug === "rogue" || classSlug === "fighter" || classSlug === "monk" || classSlug === "ranger"
    const primaryWisdom = classSlug === "cleric" || classSlug === "druid" || classSlug === "monk" || classSlug === "ranger";
    const primaryIntelligence = classSlug === "wizard";
    const primaryCharisma = classSlug === "paladin" || classSlug === "sorcerer" || classSlug === "warlock" || classSlug === "bard"

    const modifierStr = Math.floor((abilityScoreStrength - 10) / 2);
    const modifierDex = Math.floor((abilityScoreDexterity - 10) / 2);
    const modifierCon = Math.floor((abilityScoreConstitution - 10) / 2);
    const modifierInt = Math.floor((abilityScoreIntelligence - 10) / 2);
    const modifierWis = Math.floor((abilityScoreWisdom - 10) / 2);
    const modifierCha = Math.floor((abilityScoreCharisma - 10) / 2);
    return (
        <>
            <div className="abilityscores">
                <div className="ability">
                    {primaryStrength && <div>Primary Ability</div>}
                    <strong>Strength</strong>
                    <div className="ability-modifier">
                        <p>{abilityScoreStrength}</p>
                        <p>Modifier: {modifierStr}</p>
                    </div>
                </div>
                <div className="ability">
                    {primaryDexterity && <div>Primary Ability</div>}
                    <strong>Dexterity</strong>
                    <div className="ability-modifier">
                        <p>{abilityScoreDexterity}</p>
                        <p> Modifier: {modifierDex}</p>
                    </div>
                </div>
                <div className="ability">
                    <strong>Constitution</strong>
                    <div className="ability-modifier">
                        <p>{abilityScoreConstitution}</p>
                        <p> Modifier: {modifierCon}</p>
                    </div>
                </div>
                <div className="ability">
                    {primaryIntelligence && <div>Primary Ability</div>}
                    <strong>Intelligence</strong>
                    <div className="ability-modifier">
                        <p>{abilityScoreIntelligence}</p>
                        <p> Modifier: {modifierInt}</p>
                    </div>
                    
                </div>
                <div className="ability">
                    {primaryWisdom && <div>Primary Ability</div>}
                    <strong>Wisdom</strong>
                    <div className="ability-modifier">
                        <p>{abilityScoreWisdom}</p>
                        <p> Modifier: {modifierWis}</p>
                    </div>

                </div>
                <div className="ability">
                    {primaryCharisma && <div>Primary Ability</div>}
                    <strong>Charisma</strong>
                    <div className="ability-modifier">
                        <p>{abilityScoreCharisma}</p>
                        <p> Modifier: {modifierCha}</p>
                    </div>
                </div>
            </div>
        </>
    )
}