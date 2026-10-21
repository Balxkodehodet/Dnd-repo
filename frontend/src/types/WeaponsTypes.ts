export type WeaponCategory =
    | "simple"
    | "martial";

export type Weapons = {
    simple: {
        melee: string[],
        ranged: string[]
    }
    martial:{
        melee: string[],
        ranged: string[]
    }
}
export type WeaponProperty =
    | "Light"
    | "Finesse"
    | "Heavy"
    | "Thrown"
    | "Reach"
    | "Two-Handed"
    | "Versatile"
    | "Loading"
    | "Ammunition";

export type WeaponProficiency = {
    category: WeaponCategory;
    requiredProperty?: WeaponProperty | WeaponProperty[];
};