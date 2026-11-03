import type {singleSkill} from "./Skills.ts";
import type {Abilities} from "./Abilities.ts";
import type {WeaponProficiency} from './WeaponsTypes.ts'
import type {armor, toolInfo} from "./ClassData.ts";

export type CharacterType = {
    name: string,
    gender: "male" | "female",
    race: string,
    class: string,
    background: string,
    alignment: string,
    abilityScores: {
        ability: string,
        value: number,
        modifier: number
        }[],
    Proficiencies: {
            armor: armor[],
            shields: true | false,
            weapon: WeaponProficiency[],
            skills: singleSkill[],
            savingThrows: Abilities[],
            tool?: toolInfo[] | toolInfo
        },
    startEquipment: {
        A: string[],
        B: string[] | string,
        C?: string[] | string
    },
    level: number,
    experience: number,
    hitPoints: number,
    subClass?: string,
}