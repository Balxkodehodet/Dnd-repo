export type WeaponCategory =
    | "simple"
    | "martial";

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