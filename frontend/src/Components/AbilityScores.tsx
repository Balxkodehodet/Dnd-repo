import { useParams } from "react-router-dom";
import CreateSlug from "./CreateSlug.tsx";
import type { AbilityTypes } from "../types/Abilities.ts";
import { useEffect, useState } from "react";
import { CharBackgrounds } from "./CharBackgrounds/CharBackgrounds.ts";

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
  abilityChosenBackground,
}: AbilityTypes) {
  const { classId } = useParams();
  const classSlug = CreateSlug(classId);

  const selectedBackground = CharBackgrounds.find(
    (background) => background.Name === abilityChosenBackground,
  );
  const backgroundAbilityScores = selectedBackground?.AbilityScores || [];

  const [totalAbilityPoints, setTotalAbilityPoints] = useState<number>(3);

  const [totalAbilityPointsSpendStrength, setTotalAbilityPointsSpendStrength] =
    useState<number>(0);
  const [
    totalAbilityPointsSpendDexterity,
    setTotalAbilityPointsSpendDexterity,
  ] = useState<number>(0);
  const [
    totalAbilityPointsSpendConstitution,
    setTotalAbilityPointsSpendConstitution,
  ] = useState<number>(0);
  const [
    totalAbilityPointsSpendIntelligence,
    setTotalAbilityPointsSpendIntelligence,
  ] = useState<number>(0);
  const [totalAbilityPointsSpendWisdom, setTotalAbilityPointsSpendWisdom] =
    useState<number>(0);
  const [totalAbilityPointsSpendCharisma, setTotalAbilityPointsSpendCharisma] =
    useState<number>(0);

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

  const [originalStrength] = useState<number>(abilityScoreStrength);
  const [originalDexterity] = useState<number>(abilityScoreDexterity);
  const [originalConstitution] = useState<number>(abilityScoreConstitution);
  const [originalIntelligence] = useState<number>(abilityScoreIntelligence);
  const [originalWisdom] = useState<number>(abilityScoreWisdom);
  const [originalCharisma] = useState<number>(abilityScoreCharisma);

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
      {abilityStage === 0 && (
        <div className="abilityscores">
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
        </div>
      )}
      {/* Ability scores for stage 1 - Adding the background ability scores to the ability Scores */}
      {abilityStage === 1 && (
        <>
          <div className="abilityscores">
            <div
              onClick={() => {
                if (backgroundAbilityScores.includes("Strength")) {
                  if (totalAbilityPoints === 1 && totalAbilityPointsSpendStrength === 2)
                  {return}
                  totalAbilityPointsSpendStrength < 2 && totalAbilityPoints > 0
                    ? setTotalAbilityPoints((prev) => prev - 1)
                    : setTotalAbilityPoints(0);
                  totalAbilityPointsSpendStrength < 2 && totalAbilityPoints > 0
                    ? setAbilityScoreStrength((prev) => prev + 1)
                    : abilityScoreStrength;
                  setTotalAbilityPointsSpendStrength((prev) => prev + 1);
                }
              }}
              className="ability"
            >
              {primaryStrength && <div>Primary Ability</div>}
              <strong>Strength</strong>
              <p>{abilityScoreStrength}</p>
              <div className="ability-modifier">
                <p>Modifier: {modifierStr}</p>
              </div>
            </div>
            <div
              onClick={() => {
                if (backgroundAbilityScores.includes("Dexterity")) {
                  if (totalAbilityPoints === 1 && totalAbilityPointsSpendDexterity === 2)
                  {return}
                  totalAbilityPoints > 0
                    ? setTotalAbilityPoints((prev) => prev - 1)
                    : setTotalAbilityPoints(0);
                  totalAbilityPointsSpendDexterity < 2 && totalAbilityPoints > 0
                    ? setAbilityScoreDexterity((prev) => prev + 1)
                    : abilityScoreDexterity;
                  setTotalAbilityPointsSpendDexterity((prev) => prev + 1);
                }
              }}
              className="ability"
            >
              {primaryDexterity && <div>Primary Ability</div>}
              <strong>Dexterity</strong>
              <p>{abilityScoreDexterity}</p>
              <div className="ability-modifier">
                <p> Modifier: {modifierDex}</p>
              </div>
            </div>
            <div
              onClick={() => {
                if (backgroundAbilityScores.includes("Constitution")) {
                  if (totalAbilityPoints === 1 && totalAbilityPointsSpendConstitution === 2)
                  {return}
                  totalAbilityPoints > 0
                    ? setTotalAbilityPoints((prev) => prev - 1)
                    : setTotalAbilityPoints(0);
                  totalAbilityPointsSpendConstitution < 2 &&
                  totalAbilityPoints > 0
                    ? setAbilityScoreConstitution((prev) => prev + 1)
                    : abilityScoreConstitution;
                  setTotalAbilityPointsSpendConstitution((prev) => prev + 1);
                }
              }}
              className="ability"
            >
              <strong>Constitution</strong>
              <p>{abilityScoreConstitution}</p>
              <div className="ability-modifier">
                <p> Modifier: {modifierCon}</p>
              </div>
            </div>
            <div
              onClick={() => {
                if (backgroundAbilityScores.includes("Intelligence")) {
                  if (totalAbilityPoints === 1 && totalAbilityPointsSpendIntelligence === 2)
                  {return}
                  totalAbilityPoints > 0
                    ? setTotalAbilityPoints((prev) => prev - 1)
                    : setTotalAbilityPoints(0);
                  totalAbilityPointsSpendIntelligence < 2 &&
                  totalAbilityPoints > 0
                    ? setAbilityScoreIntelligence((prev) => prev + 1)
                    : abilityScoreIntelligence;
                  setTotalAbilityPointsSpendIntelligence((prev) => prev + 1);
                }
              }}
              className="ability"
            >
              {primaryIntelligence && <div>Primary Ability</div>}
              <strong>Intelligence</strong>
              <p>{abilityScoreIntelligence}</p>
              <div className="ability-modifier">
                <p> Modifier: {modifierInt}</p>
              </div>
            </div>
            <div
              onClick={() => {
                if (backgroundAbilityScores.includes("Wisdom")) {
                  if (totalAbilityPoints === 1 && totalAbilityPointsSpendWisdom === 2)
                  {return}
                  totalAbilityPoints > 0
                    ? setTotalAbilityPoints((prev) => prev - 1)
                    : setTotalAbilityPoints(0);
                  totalAbilityPointsSpendWisdom < 2 && totalAbilityPoints > 0
                    ? setAbilityScoreWisdom((prev) => prev + 1)
                    : abilityScoreWisdom;
                  setTotalAbilityPointsSpendWisdom((prev) => prev + 1);
                }
              }}
              className="ability"
            >
              {primaryWisdom && <div>Primary Ability</div>}
              <strong>Wisdom</strong>
              <p>{abilityScoreWisdom}</p>
              <div className="ability-modifier">
                <p> Modifier: {modifierWis}</p>
              </div>
            </div>
            <div
              onClick={() => {
                if (backgroundAbilityScores.includes("Charisma")) {
                  if (totalAbilityPoints === 1 && totalAbilityPointsSpendCharisma === 2)
                  {return}
                  totalAbilityPoints > 0
                    ? setTotalAbilityPoints((prev) => prev - 1)
                    : setTotalAbilityPoints(0);
                  totalAbilityPointsSpendCharisma < 2 && totalAbilityPoints > 0
                    ? setAbilityScoreCharisma((prev) => prev + 1)
                    : abilityScoreCharisma;
                  setTotalAbilityPointsSpendCharisma((prev) => prev + 1);
                }
              }}
              className="ability"
            >
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
            <p>
              You can add 1 point in each of the following abilities, or 2 in
              one and 1 in one.
            </p>
            {backgroundAbilityScores.map((bas) => (
              <p>{bas}</p>
            ))}
            <p>Points left: {totalAbilityPoints}</p>
            <button
              onClick={() => {
                setTotalAbilityPoints(3);
                setTotalAbilityPointsSpendStrength(0);
                setTotalAbilityPointsSpendDexterity(0);
                setTotalAbilityPointsSpendConstitution(0);
                setTotalAbilityPointsSpendIntelligence(0);
                setTotalAbilityPointsSpendWisdom(0);
                setTotalAbilityPointsSpendCharisma(0);
                setAbilityScoreStrength(originalStrength);
                setAbilityScoreDexterity(originalDexterity);
                setAbilityScoreConstitution(originalConstitution);
                setAbilityScoreIntelligence(originalIntelligence);
                setAbilityScoreWisdom(originalWisdom);
                setAbilityScoreCharisma(originalCharisma);
              }}
              className="selectionbtn"
            >
              Reset
            </button>
          </div>
        </>
      )}
      {/* A compacted version of ability scores inside character info */}
      {abilityStage === 2 && (
        <div className="abilityscorestage1">
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
        </div>
      )}
    </>
  );
}
