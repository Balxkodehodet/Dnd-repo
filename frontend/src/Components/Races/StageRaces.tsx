import type { stageRaces } from "../../types/StageRacesTypes"
import { useState } from "react"
import CreateSlug from "../CreateSlug";

export default function StageRaces({ race, setRaceStage, raceStage }: stageRaces) {

    const [choose, setChoose] = useState<boolean>(false)
    const [txtContent, setTxtContent] = useState<string>("");
    return (
        <>
            {race && raceStage === 0 && raceStage !== null && <button className="raceBtn2" onClick={() => setRaceStage && setRaceStage((prev: number) => prev + 1)}>Next</button>}
            {race.Lineages && raceStage === 1 && race && <><h2 className="raceBtn2">Choose Lineage:</h2> {race?.Lineages?.map((item, index) => <h3 className="raceBtn2" onClick={(e) => {

                
                setTxtContent(e.currentTarget.textContent);
                setChoose(() => true)
            }
            } key={index}>{item.Lineage}</h3>)}</>}
            {raceStage === 2 && CreateSlug(txtContent) === CreateSlug("Drow") && <><h2 className="raceBtn2">You picked Drow</h2><h3 className="raceBtn2">You gained: </h3><p className="raceBtn2">Darkvision increases from 60 feet to 120 feet</p>
            <p className="raceBtn2">You also know the Dancing Lights Cantrip</p></>}
            {raceStage === 2 && CreateSlug(txtContent) === CreateSlug("High Elf") && <><h2 className="raceBtn2">You picked High Elf</h2><h3 className="raceBtn2">You gained: </h3><p className="raceBtn2">You know the Prestidigitation cantrip. Whenever you finish a Long Rest, you can replace that cantrip with a different cantrip from the Wizard spell list.</p></>}
            {raceStage === 2 && CreateSlug(txtContent) === CreateSlug("Wood Elf") && <><h2 className="raceBtn2">You picked Wood Elf</h2><h3 className="raceBtn2">You gained: </h3><p className="raceBtn2">Your Speed increases to 35 feet. You also know the Druidcraft cantrip.</p></>}
            {race.Versatile && raceStage === 1 && race && <><h2 className="raceBtn2">Versatile: </h2><p className="raceBtn2">{race.Versatile}</p></>}
            {/* {race.DraconicAncestors && raceStage === 1 && race && <><h2>Choose Draconic Ancestor</h2>{race?.DraconicAncestors.map((item, index) => <><h3 className="raceBtn2" onClick={() => setChoose((prev:boolean) => !prev)} key={index}>{item.Dragon}</h3><p>{item.DmgType}</p></>)}</>}
        {race.FiendishLegacies && raceStage === 1 && race && <><h2>Choose Fiendish Legacy</h2>{race.FiendishLegacies?.map((item, index) => <><h3 className="raceBtn2" onClick={() => setChoose((prev:boolean) => !prev)} key={index}>{item.Legacy}</h3></>)}</>}
        {race.DamageResistance && raceStage === 1 && race && <><h2>Damage Resistance: </h2><p>{race.DamageResistance}</p></>}
        {race.Darkvision && raceStage === 1 && race && <><h2>DarkVision: </h2><p>{race.Darkvision}</p></>}
        {race.DraconicFlight && raceStage === 1 && race && <><h2>Draconic Flight: </h2><p>{race.DraconicFlight}</p></>}
        {race.DwarvenResilience && raceStage === 1 && race && <><h2>Dwarven Resilience: </h2><p>{race.DwarvenResilience}</p></>}
        {race.DwarvenToughness && raceStage === 1 && race && <><h2>Dwarven Toughness: </h2><p>{race.DwarvenToughness}</p></>}
        {race.StoneCunning && raceStage === 1 && race && <><h2>Stonecunning: </h2><p>{race.StoneCunning}</p></>}
        {race.ElvenLineage && raceStage === 1 && race && <><h2>Elven Lineage: </h2><p>{race.ElvenLineage}</p></>}
        {race.FeyAncestry && raceStage === 1 && race && <><h2>Fey Ancestry: </h2><p>{race.FeyAncestry}</p></>}
        {race.KeenSenses && raceStage === 1 && race && <><h2>Keen senses: </h2><p>{race.KeenSenses}</p></>}
        {race.Trance && raceStage === 1 && race && <><h2>Trance: </h2><p>{race.Trance}</p></>}
        {race.GnomishCunning && raceStage === 1 && race && <><h2>Gnomish Cunning: </h2><p>{race.GnomishCunning}</p></>}
        {race.GnomishLineage && raceStage === 1 && race && <><h2>Gnomish Lineage: </h2><p>{race.GnomishLineage}</p></>}
        {race.GiantAncestry && raceStage === 1 && race && <><h2>Giant Ancestry: </h2><p>{race.GiantAncestry}</p></>}
        {race.Benefits && raceStage === 1 && race && <><h2>Benefits: </h2><p>{race.Benefits.map((b) => Object.entries(b))}</p></>}
        {race.LargeForm && raceStage === 1 && race && <><h2>Large form: </h2><p>{race.LargeForm}</p></>}
        {race.PowerfulBuild && raceStage === 1 && race && <><h2>Powerful Build: </h2><p>{race.PowerfulBuild}</p></>}
        {race.Brave && raceStage === 1 && race && <><h2>Brave: </h2><p>{race.Brave}</p></>}
        {race.HalflingNimbleness && raceStage === 1 && race && <><h2>Halfling Nimbleness: </h2><p>{race.HalflingNimbleness}</p></>}
        {race.Luck && raceStage === 1 && race && <><h2>Luck : </h2><p>{race.Luck}</p></>}
        {race.NaturallyStealthy && raceStage === 1 && race && <><h2>Naturally Stealthy: </h2><p>{race.NaturallyStealthy}</p></>}
        {race.Resourceful && raceStage === 1 && race && <><h2>Resourceful: </h2><p>{race.Resourceful}</p></>}
        {race.Skillful && raceStage === 1 && race && <><h2>Skillful: </h2><p>{race.Skillful}</p></>}
        {race.AdrenalineRush && raceStage === 1 && race && <><h2>Adrenaline Rush: </h2><p>{race.AdrenalineRush}</p></>}
        {race.RelentlessEndurance && raceStage === 1 && race && <><h2>Relentless Endurance: </h2><p>{race.RelentlessEndurance}</p></>}
        {race.FiendishLegacy && raceStage === 1 && race && <><h2>Fiendish Legacy: </h2><p>{race.FiendishLegacy}</p></>}
        {race.OtherworldlyPresence && raceStage === 1 && race && <><h2>Otherworldly Presence: </h2><p>{race.OtherworldlyPresence}</p></>}
        {race.BreathWeapon && raceStage === 1 && race && <><h2>Breath weapon: </h2><p>{race.BreathWeapon}</p></>} */}
            {raceStage === 1 && choose && <button className="raceBtn2" onClick={() => setRaceStage && setRaceStage((prev: number) => prev + 1)}>Choose {txtContent && txtContent}</button>}
        </>
    )
}