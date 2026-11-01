import { useParams } from "react-router-dom"
import { useState } from "react"
import CreateSlug from "./CreateSlug.tsx";
import type { AbilityTypes } from "../types/Abilities.ts";
export default function AbilityScores({abilityScoreStrength, abilityScoreDexterity, abilityScoreConstitution, abilityScoreIntelligence,
                                       abilityScoreWisdom, abilityScoreCharisma}:AbilityTypes) 
{
    const {classId} = useParams();
    const classSlug = CreateSlug(classId);

    const primaryStrength = classSlug === "fighter" || classSlug === "barbarian" || classSlug === "paladin"
    const primaryDexterity = classSlug === "rogue" || classSlug === "fighter" || classSlug === "monk" || classSlug === "ranger"
    const primaryWisdom = classSlug === "cleric" || classSlug === "druid" || classSlug === "monk" || classSlug === "ranger";
    const primaryIntelligence = classSlug === "wizard";
    const primaryCharisma = classSlug === "paladin" || classSlug === "sorcerer" || classSlug === "warlock" || classSlug === "bard"

    return (
        <>
        <div className="abilityscores">
            <div className="ability">
                {primaryStrength && <div>Primary Ability</div>}
                <strong>Strength</strong>
                <p>{abilityScoreStrength}</p>

            </div>
            <div className="ability">
                {primaryDexterity && <div>Primary Ability</div>}
                <strong>Dexterity</strong>
                <p>{abilityScoreDexterity}</p>

            </div>
            <div className="ability">
                <strong>Constitution</strong>
                <p>{abilityScoreConstitution}</p>

            </div>
            <div className="ability">
                {primaryIntelligence && <div>Primary Ability</div>}
                <strong>Intelligence</strong>
                <p>{abilityScoreIntelligence}</p>

            </div>
            <div className="ability">
                {primaryWisdom && <div>Primary Ability</div>}
                <strong>Wisdom</strong>
                <p>{abilityScoreWisdom}</p>

            </div>
            <div className="ability">
                {primaryCharisma && <div>Primary Ability</div>}
                <strong>Charisma</strong>
                <p>{abilityScoreCharisma}</p>

            </div>
        </div>
        </>
    )
}