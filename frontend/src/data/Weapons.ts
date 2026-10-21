import type {Weapons} from '../types/WeaponsTypes.ts'
export const WeaponsObject:Weapons = {
    simple:{
        melee: ["Club", "Dagger", "Greatclub", "Handaxe", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear"],
        ranged: ["Dart", "Light Crossbow", "Shortbow", "Sling"]
    },
    martial:{
        melee:["Battleaxe", "Flail", "Glaive", "Greataxe", "Greatsword", "Halberd", "Lance", "Longsword", "Maul", "Morningstar", "Pike", "Rapier", "Scimitar", "Shortsword", "Trident", "Warhammer", "War Pick", "Whip"],
        ranged: ["Blowgun", "Hand Crossbow", "Heavy Crossbow", "Longbow", "Musket", "Pistol"]
    }
}