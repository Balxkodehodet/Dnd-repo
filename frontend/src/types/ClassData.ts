import type { Abilities } from "./Abilities.ts";
import type { WeaponProficiency } from '../types/Weapons.ts'

type skillInfo = {

    choose: number;
    options: string[]

}

type toolInfo = {
    toolName: string
    choose?: number,
    options?: string[]
}


type startInfo = {

    Choose: {
        A: string[] | string;
        B: string[] | string;
        C?: string[] | string;
    }

}

type armor = "light" | "medium" | "heavy" | "none"

type features = {
    level: number,
    name: string,
    description: string,
}[]

export type classData = {
    class: string,
    likes: string,
    primaryAbility: string,
    Complexity: string,
    HitPointDie: number,
    Proficiencies: {
        armor: armor[],
        shields: true | false,
        weapon: WeaponProficiency[],
        skills: skillInfo,
        savingThrows: Abilities[],
        tool?: toolInfo[] | toolInfo
    },
    StartingEquipment: startInfo,
    Features: features,
    Subclass: {
        name: string,
        description: string,
        features: features
    }
}