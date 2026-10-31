import type { CharBackgroundTypes } from "../../types/CharBackgroundTypes"
export const CharBackgrounds: CharBackgroundTypes = [
    {
        Name: "Acolyte",
        AbilityScores: ["Ingelligence", "Wisdom", "Charisma"],
        Feat: "Magic Initiate(Cleric)",
        SkillProf: ["Insight", "Religion"],
        ToolProf: "Calligrapher's Supplies",
        Equipment: {
            A: ["Calligrapher's Supplies", "Book(Prayers)", "Holy Symbol", "Parchment (10 sheets)", "Robe", "8 GP"],
            B: "50 GP"
        }
    },
    {
        Name: "Criminal",
        AbilityScores: ["Dexterity", "Constitution", "Intelligence"],
        Feat: "Alert",
        SkillProf: ["Sleight of Hand", "Stealth"],
        ToolProf: "Thieves' Tools",
        Equipment: {
            A: ["2 Daggers", "Thieves' Tools", "Crowbar", "2 Pouches", "Traveler's Clothes", "16 GP"],
            B: "50 GP"
        }
    },
    {
        Name: "Sage",
        AbilityScores: ["Constitution", "Intelligence", "Wisdom"],
        Feat: "Magic Initiate (Wizard)",
        SkillProf: ["Arcana", "History"],
        ToolProf: "Calligrapher's Supplies",
        Equipment: {
            A: ["Quarterstaff", "Calligrapher's Supplies", "Book(History)", "Parchment (8 Sheets)", "Robe", "8 GP"],
            B: "50 GP"
        }
    },
    {
        Name: "Soldier",
        AbilityScores: ["Strength", "Dexterity", "Constitution"],
        Feat: "Savage Attacker",
        SkillProf: ["Athletics", "Intimidation"],
        ToolProf: "Choose one kind of Garning Set",
        Equipment: {
            A: ["Spear", "Shortbow", "20 Arrows", "Garning Set", "Healer's Kit", "Quiver", "Traveler's Clothes", "14 GP"],
            B: "50 GP"
        }
    },
]