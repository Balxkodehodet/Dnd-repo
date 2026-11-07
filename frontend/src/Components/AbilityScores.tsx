import { useParams } from "react-router-dom";
import CreateSlug from "./CreateSlug.tsx";
import type { AbilityTypes } from "../types/Abilities.ts";
import { useEffect, useState } from "react";
import {CharBackgrounds} from "./CharBackgrounds/CharBackgrounds.ts";

export default function AbilityScores({
  abilityScoreStrength,
  abilityScoreDexterity,
  abilityScoreConstitution,
  abilityScoreIntelligence,
  abilityScoreWisdom,
  abilityScoreCharisma,
  setAbilityScoreStrength,
  setAbilityScoreDexterity,
  setAbilityScoreConstitution,
  setAbilityScoreIntelligence,
  setAbilityScoreWisdom,
  setAbilityScoreCharisma,
  abilityStage,
  abilityChosenBackground
}: AbilityTypes) {
  const { classId } = useParams();
  const classSlug = CreateSlug(classId);

  const selectedBackground = CharBackgrounds.find(background => background.Name === abilityChosenBackground);
  const backgroundAbilityScores = selectedBackground?.AbilityScores || [];

  const [totalAbilityPoints, setTotalAbilityPoints] = useState<number>(3)

  const primaryStrength =
    classSlug === "fighter" ||
    classSlug === "barbarian" ||
    classSlug === "paladin";
  const primaryDexterity =
    classSlug === "rogue" ||
    classSlug === "fighter" ||
    classSlug === "monk" ||
    classSlug === "ranger";
  const primaryWisdom =
    classSlug === "cleric" ||
    classSlug === "druid" ||
    classSlug === "monk" ||
    classSlug === "ranger";
  const primaryIntelligence = classSlug === "wizard";
  const primaryCharisma =
    classSlug === "paladin" ||
    classSlug === "sorcerer" ||
    classSlug === "warlock" ||
    classSlug === "bard";

  const modifierStr = Math.floor((abilityScoreStrength - 10) / 2);
  const modifierDex = Math.floor((abilityScoreDexterity - 10) / 2);
  const modifierCon = Math.floor((abilityScoreConstitution - 10) / 2);
  const modifierInt = Math.floor((abilityScoreIntelligence - 10) / 2);
  const modifierWis = Math.floor((abilityScoreWisdom - 10) / 2);
  const modifierCha = Math.floor((abilityScoreCharisma - 10) / 2);

  useEffect(() => {
    localStorage.setItem(
      "abilityScores",
      JSON.stringify([
        abilityScoreStrength,
        abilityScoreDexterity,
        abilityScoreConstitution,
        abilityScoreIntelligence,
        abilityScoreWisdom,
        abilityScoreCharisma,
      ]),
    );

    localStorage.setItem(
      "abilityModifiers",
      JSON.stringify([
        modifierStr,
        modifierDex,
        modifierCon,
        modifierInt,
        modifierWis,
        modifierCha,
      ]),
    );
  }, [
    abilityScoreStrength,
    abilityScoreDexterity,
    abilityScoreConstitution,
    abilityScoreIntelligence,
    abilityScoreWisdom,
    abilityScoreCharisma,
    modifierStr,
    modifierDex,
    modifierCon,
    modifierInt,
    modifierWis,
    modifierCha,
  ]);

  return (
    <>
      {abilityStage === 0 && <div className="abilityscores">
        <div className="ability">
          {primaryStrength && <div>Primary Ability</div>}
          <strong>Strength</strong>
            <p>{abilityScoreStrength}</p>
          <div className="ability-modifier">
            <p>Modifier: {modifierStr}</p>
          </div>
        </div>
        <div className="ability">
          {primaryDexterity && <div>Primary Ability</div>}
          <strong>Dexterity</strong>
            <p>{abilityScoreDexterity}</p>
          <div className="ability-modifier">
            <p> Modifier: {modifierDex}</p>
          </div>
        </div>
        <div className="ability">
          <strong>Constitution</strong>
            <p>{abilityScoreConstitution}</p>
          <div className="ability-modifier">
            <p> Modifier: {modifierCon}</p>
          </div>
        </div>
        <div className="ability">
          {primaryIntelligence && <div>Primary Ability</div>}
          <strong>Intelligence</strong>
            <p>{abilityScoreIntelligence}</p>
          <div className="ability-modifier">
            <p> Modifier: {modifierInt}</p>
          </div>
        </div>
        <div className="ability">
          {primaryWisdom && <div>Primary Ability</div>}
          <strong>Wisdom</strong>
            <p>{abilityScoreWisdom}</p>
          <div className="ability-modifier">
            <p> Modifier: {modifierWis}</p>
          </div>
        </div>
        <div className="ability">
          {primaryCharisma && <div>Primary Ability</div>}
          <strong>Charisma</strong>
            <p>{abilityScoreCharisma}</p>
          <div className="ability-modifier">
            <p> Modifier: {modifierCha}</p>
          </div>
        </div>
      </div>}
      {/* Ability scores for stage 1 - Adding the background ability scores to the ability Scores */}
      {abilityStage === 1 && <><div className="abilityscores">
        <div className="ability">
          {primaryStrength && <div>Primary Ability</div>}
          <strong>Strength</strong>
            <p>{abilityScoreStrength}</p>
          <div className="ability-modifier">
            <p>Modifier: {modifierStr}</p>
          </div>
        </div>
        <div className="ability">
          {primaryDexterity && <div>Primary Ability</div>}
          <strong>Dexterity</strong>
            <p>{abilityScoreDexterity}</p>
          <div className="ability-modifier">
            <p> Modifier: {modifierDex}</p>
          </div>
        </div>
        <div className="ability">
          <strong>Constitution</strong>
            <p>{abilityScoreConstitution}</p>
          <div className="ability-modifier">
            <p> Modifier: {modifierCon}</p>
          </div>
        </div>
        <div className="ability">
          {primaryIntelligence && <div>Primary Ability</div>}
          <strong>Intelligence</strong>
            <p>{abilityScoreIntelligence}</p>
          <div className="ability-modifier">
            <p> Modifier: {modifierInt}</p>
          </div>
        </div>
        <div className="ability">
          {primaryWisdom && <div>Primary Ability</div>}
          <strong>Wisdom</strong>
            <p>{abilityScoreWisdom}</p>
          <div className="ability-modifier">
            <p> Modifier: {modifierWis}</p>
          </div>
        </div>
        <div onClick={() => {
          totalAbilityPoints > 0 ? setTotalAbilityPoints(prev => prev - 1) : setTotalAbilityPoints(0);
          totalAbilityPoints > 0 ? setAbilityScoreCharisma(prev => prev +1): abilityScoreCharisma;
        }} className="ability">
          {primaryCharisma && <div>Primary Ability</div>}
          <strong>Charisma</strong>
            <p>{abilityScoreCharisma}</p>
          <div className="ability-modifier">
            <p> Modifier: {modifierCha}</p>
          </div>
        </div>
      </div>
      <div className="background-ability-scores">
        <h3>{abilityChosenBackground} Background Ability Scores:</h3>
        <p>You can add 1 point in each ability or 2 in one and 1 in one.</p>
        {backgroundAbilityScores.map(bas => <p>{bas}</p>)}
        <p>Points left: {totalAbilityPoints}</p>
      </div></>}
      {/* A compacted version of ability scores inside character info */}
      {abilityStage === 2 && <div className="abilityscorestage1">
        <div className="ability1">
          <strong>Strength</strong>
          <p>{abilityScoreStrength}</p>
        </div>
        <div className="ability1">
          <strong>Dexterity</strong>
          <p>{abilityScoreDexterity}</p>
        </div>
        <div className="ability1">
          <strong>Constitution</strong>
          <p>{abilityScoreConstitution}</p>
        </div>
        <div className="ability1">
          <strong>Intelligence</strong>
          <p>{abilityScoreIntelligence}</p>
        </div>
        <div className="ability1">
          <strong>Wisdom</strong>
          <p>{abilityScoreWisdom}</p>
        </div>
        <div className="ability1">
          <strong>Charisma</strong>
          <p>{abilityScoreCharisma}</p>
        </div>
      </div>}
    </>
  );
}
