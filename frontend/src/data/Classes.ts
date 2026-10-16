import type { classData } from '../types/ClassData.ts'
export const Classes: classData[] = [{
    class: "Barbarian",
    likes: "Battle",
    primaryAbility: "Strength",
    Complexity: "Average",
    HitPointDie: 12,
    Proficiencies: {
        armor: ["light", "medium"],
        shields: true,
        weapon: ["simple", "martial"],
        skills: {
            choose: 2,
            options: ["Animal Handling",
                "Athletics",
                "Intimidation",
                "Nature",
                "Perception",
                "Survival"]
        },
        savingThrows: ["strength", "constitution"]


    },
    StartingEquipment: {
        Choose: {
            A: ["Greataxe", "4 handaxes", "Explorer's Pack", "15 GP"],
            B: "75 GP",
        }
    },
    Features: [{
        level: 1,
        name: "Rage",
        description: `You can imbue yourself with a primal power called 
                        Rage, a force that grants you extraordinary might 
                        and resilience. You can enter it as a Bonus Action if 
                        you aren't wearing Heavy armor.
                        You can enter your Rage the number of times 
                        shown for your Barbarian level in the Rages column 
                        of the Barbarian Features table. You regain one ex
                        pended use when you finish a Short Rest, and you 
                        regain all expended uses when you finish a Long 
                        Rest. While active, your Rage follows the rules below.
                        Damage Resistance. You have Resistance to Blud
                        geoning, Piercing, and Slashing damage.
                        Rage Damage. When you make an attack using 
                        Strength—with either a weapon or an Unarmed 
                        Strike—and deal damage to the target, you gain 
                        a bonus to the damage that increases as you gain 
                        levels as a Barbarian, as shown in the Rage Damage 
                        column of the Barbarian Features table.
                        Strength Advantage. You have Advantage on 
                        Strength checks and Strength saving throws.
                        No Concentration or Spells. You can't maintain 
                        Concentration, and you can't cast spells.
                        Duration. The Rage lasts until the end of your 
                        next turn, and it ends early if you don Heavy armor 
                        or have the Incapacitated condition. If your Rage 
                        is still active on your next turn, you can extend 
                        the Rage for another round by doing one of the 
                        following:
                        • Make an attack roll against an enemy.
                        • Force an enemy to make a saving throw.
                        • Take a Bonus Action to extend your Rage.
                        Each time the Rage is extended, it lasts until the end 
                        of your next turn. You can maintain a Rage for up to 
                        10 minutes.`,
    },
    {
        level: 1,
        name: "Unarmored Defense",
        description: `While you aren't wearing any armor, your base Ar
                        mor Class equals 10 plus your Dexterity and Consti
                        tution modifiers. You can use a Shield and still gain 
                        this benefit.`
    },
    {
        level: 1,
        name: "Weapon Mastery",
        description: `Your training with weapons allows you to use the 
                        mastery properties of two kinds of Simple or Mar
                        tial Melee weapons of your choice, such as Great
                        axes and Handaxes. Whenever you finish a Long 
                        Rest, you can practice weapon drills and change one 
                        of those weapon choices.
                        When you reach certain Barbarian levels, you gain 
                        the ability to use the mastery properties of more 
                        kinds of weapons, as shown in the Weapon Mastery 
                        column of the Barbarian Features table.`
    },
    {
        level: 2,
        name: "Danger Sense",
        description: `You gain an uncanny sense of when things aren’t as 
                    they should be, giving you an edge when you dodge 
                    perils. You have Advantage on Dexterity saving 
                    throws unless you have the Incapacitated condition.`
    },
    {
        level: 2,
        name: "Reckless Attack",
        description: `You can throw aside all concern for defense to at
                    tack with increased ferocity. When you make your 
                    first attack roll on your turn, you can decide to at
                    tack recklessly. Doing so gives you Advantage on at
                    tack rolls using Strength until the start of your next turn, but attack rolls against you have Advantage 
                    during that time.`
    },
    {
        level: 3,
        name: "Barbarian Subclass",
        description: `You gain a Barbarian subclass of your choice. The 
                    Path of the Berserker subclass is detailed after this 
                    class's description. A subclass is a specialization 
                    that grants you features at certain Barbarian levels. 
                    For the rest of your career, you gain each of your 
                    subclass's features that are of your Barbarian level 
                    or lower.`
    },
    {
        level: 3,
        name: "Primal Knowledge",
        description: `You gain proficiency in another skill of your choice 
                    from the skill list available to Barbarians at level 1.
                    In addition, while your Rage is active, you can 
                    channel primal power when you attempt certain 
                    tasks; whenever you make an ability check using 
                    one of the following skills, you can make it as a 
                    Strength check even if it normally uses a differ
                    ent ability: Acrobatics, Intimidation, Perception, 
                    Stealth, or Survival. When you use this ability, your 
                    Strength represents primal power coursing through 
                    you, honing your agility, bearing, and senses.`
    },
    {
        level: 4,
        name: "Ability Score Improvement",
        description: `You gain the Ability Score Improvement feat (see 
                    “Feats”) or another feat of your choice for which you 
                    qualify. You gain this feature again at Barbarian lev
                    els 8, 12, and 16.`
    },
    {
        level: 5,
        name: "Extra Attack",
        description: `You can attack twice instead of once whenever you 
                        take the Attack action on your turn.`
    },
    {
        level: 5,
        name: "Fast Movement",
        description: `Your speed increases by 10 feet while you aren't 
                        wearing Heavy armor.`
    },
    {
        level: 7,
        name: "Feral Instinct",
        description: `Your instincts are so honed that you have Advan-
                        tage on Initiative rolls.`
    },
    {
        level: 7,
        name: "Instinctive Pounce",
        description: `As part of the Bonus Action you take to enter your 
                        Rage, you can move up to half your Speed.`
    },
    {
        level: 9,
        name: "Brutal Strike",
        description: `If you use Reckless Attack, you can forgo any Ad-
                        vantage on one Strength-based attack roll of your 
                        choice on your turn. The chosen attack roll mustn't 
                        have Disadvantage. If the chosen attack roll hits, the 
                        target takes an extra 1d10 damage of the same type 
                        dealt by the weapon or Unarmed Strike, and you can 
                        cause one Brutal Strike effect of your choice. You 
                        have the following effect options.
                        Forceful Blow. The target is pushed 15 feet 
                        straight away from you. You can then move up to 
                        half your Speed straight toward the target without 
                        provoking Opportunity Attacks. Hamstring Blow. The target's Speed is reduced by 
                        15 feet until the start of your next turn. A target can 
                        be affected by only one Hamstring Blow at a time—
                        the most recent one.`
    },
    {
        level: 11,
        name: "Relentless Rage",
        description: `Your Rage can keep you fighting despite grievous 
                        wounds. If you drop to 0 Hit Points while your Rage 
                        is active and don't die outright, you can make a DC 
                        10 Constitution saving throw. If you succeed, your 
                        Hit Points instead change to a number equal to 
                        twice your Barbarian level.
                        Each time you use this feature after the first, the 
                        DC increases by 5. When you finish a Short or Long 
                        Rest, the DC resets to 10.`
    },
    {
        level: 13,
        name: "Improved Brutal Strike",
        description: `You have honed new ways to attack furiously. The 
                        following effects are now among your Brutal Strike 
                        options.
                        Staggering Blow. The target has Disadvantage on 
                        the next saving throw it makes, and it can't make 
                        Opportunity Attacks until the start of your next 
                        turn.
                        Sundering Blow. Before the start of your next 
                        turn, the next attack roll made by another creature 
                        against the target gains a +5 bonus to the roll. An 
                        attack roll can gain only one Sundering Blow bonus.`
    },
    {
        level: 15,
        name: "Persistent Rage",
        description: `When you roll Initiative, you can regain all ex
                        pended uses of Rage. After you regain uses of Rage 
                        in this way, you can't do so again until you finish a 
                        Long Rest.
                        In addition, your Rage is so fierce that it now lasts 
                        for 10 minutes without you needing to do anything 
                        to extend it from round to round. Your Rage ends 
                        early if you have the Unconscious condition (not just 
                        the Incapacitated condition) or don Heavy armor.`
    },
    {
        level: 17,
        name: "Improved Brutal Strike",
        description: `The extra damage of your Brutal Strike increases to 
                        2d10. In addition, you can use two different Brutal 
                        Strike effects whenever you use your Brutal Strike 
                        feature.`
    },
    {
        level: 18,
        name: "Indomitable Might",
        description: `If your total for a Strength check or Strength saving 
                        throw is less than your Strength score, you can use 
                        that score in place of the total.`
    },
    {
        level: 19,
        name: "Epic Boon",
        description: `You gain an Epic Boon feat (see “Feats”) or another 
                        feat of your choice for which you qualify. Boon of 
                        Irresistible Offense is recommended.`
    },
    {
        level: 20,
        name: "Primal Champion",
        description: `You embody primal power. Your Strength and Constitution 
                        scores increase by 4, to a maximum of 25.`
    },
    ],
    Subclass:{
        name: "Path of the Berserker",
        description: `Channel Rage into Violent Fury
                        Barbarians who walk the Path of the Berserker 
                        direct their Rage primarily toward violence. Their 
                        path is one of untrammeled fury, and they thrill in 
                        the chaos of battle as they allow their Rage to seize 
                        and empower them.`,
        features: [{
            level: 3,
            name: "Frenzy",
            description: `If you use Reckless Attack while your Rage is active, 
                            you deal extra damage to the first target you hit on 
                            your turn with a Strength-based attack. To deter
                            mine the extra damage, roll a number of d6s equal 
                            to your Rage Damage bonus, and add them together. 
                            The damage has the same type as the weapon or 
                            Unarmed Strike used for the attack.`
        },
        {
            level: 6,
            name: "Mindless Rage",
            description: `You have Immunity to the Charmed and Fright
                            ened conditions while your Rage is active. If you're 
                            Charmed or Frightened when you enter your Rage, 
                            the condition ends on you.`
        },
        {
            level: 10,
            name: "Retaliation",
            description: `When you take damage from a creature that is 
                            within 5 feet of you, you can take a Reaction to 
                            make one melee attack against that creature, using 
                            a weapon or an Unarmed Strike.`
        },
        {
            level: 14,
            name: "Intimidating Presence",
            description: `As a Bonus Action, you can strike terror into others 
                            with your menacing presence and primal power. 
                            When you do so, each creature of your choice in a 
                            30-foot Emanation originating from you must make 
                            a Wisdom saving throw (DC 8 plus your Strength 
                            modifier and Proficiency Bonus). On a failed save, 
                            a creature has the Frightened condition for 1 min
                            ute. At the end of each of the Frightened creature's 
                            turns, the creature repeats the save, ending the ef
                            fect on itself on a success.
                            Once you use this feature, you can't use it again 
                            until you finish a Long Rest unless you expend a use 
                            of your Rage (no action required) to restore your 
                            use of it.`
        },
    ]
    }

}, {
    class: "Bard",
    likes: "Performing",
    primaryAbility: "Charisma",
    Complexity: "High",
    HitPointDie: 8,
    Proficiencies: {
        armor: ["light"],
        shields: false,
        weapon: ["simple"],
        skills: {
            choose: 3,
            options: [
                "Acrobatics",
                "Animal Handling",
                "Arcana",
                "Athletics",
                "Deception",
                "History",
                "Insight",
                "Intimidation",
                "Investigation",
                "Medicine",
                "Nature",
                "Perception",
                "Performance",
                "Persuasion",
                "Religion",
                "Sleight of Hand",
                "Stealth",
                "Survival"
            ]
        },
        savingThrows: ["dexterity", "charisma"],
        tool: {
            toolName: "Musical Instruments",
            choose: 3,
            options: ["Bagpipes", "Drum", "Dulcimer", "Flute", "Horn", "Lute", "Lyre", "Pan Flute", "Shawm", "Viol"]
            }    
    },
    Features:[
        {
            level: 1,
            name: "Bardic Inspiration",
            description: `You can supernaturally inspire others through 
                            words, music, or dance. This inspiration is repre
                            sented by your Bardic Inspiration die, which is a d6.
                            Using Bardic Inspiration. As a Bonus Action, you 
                            can inspire another creature within 60 feet of your
                            self who can see or hear you. That creature gains one of your Bardic Inspiration dice. A creature can 
                            have only one Bardic Inspiration die at a time.
                            Once within the next hour when the creature fails 
                            a D20 Test, the creature can roll the Bardic Inspira
                            tion die and add the number rolled to the d20, po
                            tentially turning the failure into a success. A Bardic 
                            Inspiration die is expended when it’s rolled.
                            Number of Uses. You can confer a Bardic Inspira
                            tion die a number of times equal to your Charisma 
                            modifier (minimum of once), and you regain all ex
                            pended uses when you finish a Long Rest.
                            At Higher Levels. Your Bardic Inspiration die 
                            changes when you reach certain Bard levels, as 
                            shown in the Bardic Die column of the Bard Fea
                            tures table. The die becomes a d8 at level 5, a d10 at 
                            level 10, and a d12 at level 15`
        }
    ]
    Subclass:
    StartingEquipment: {
        Choose: {
            A: "Greataxe, 4 handaxes, Explorer's Pack, and 15 GP",
            B: "75 GP",
        }
    }
},
{
    class: "Cleric",
    likes: "Gods",
    primaryAbility: "Wisdom",
    Complexity: "Average",
    HitPointDie: 12,
    Proficiencies: {
        armor: armor,
        shields: true | false,
        weapon: weapon,
        skills: skillInfo,
        savingThrows: Abilities
    },
    StartingEquipment: {
        Choose: {
            A: "Greataxe, 4 handaxes, Explorer's Pack, and 15 GP",
            B: "75 GP",
        }
    }
},
{
    class: "Druid",
    likes: "Nature",
    primaryAbility: "Wisdom",
    Complexity: "High",
    HitPointDie: 12,
    Proficiencies: {
        armor: armor,
        shields: true | false,
        weapon: weapon,
        skills: skillInfo,
        savingThrows: Abilities
    },
    StartingEquipment: {
        Choose: {
            A: "Greataxe, 4 handaxes, Explorer's Pack, and 15 GP",
            B: "75 GP",
        }
    }
},
{
    class: "Fighter",
    likes: "Weapons",
    primaryAbility: "Strength or Dexterity",
    Complexity: "Low",
    HitPointDie: 12,
    Proficiencies: {
        armor: armor,
        shields: true | false,
        weapon: weapon,
        skills: skillInfo,
        savingThrows: Abilities
    },
    StartingEquipment: {
        Choose: {
            A: "Greataxe, 4 handaxes, Explorer's Pack, and 15 GP",
            B: "75 GP",
        }
    }
},
{
    class: "Monk",
    likes: "Unarmed combat",
    primaryAbility: "Dexterity and wisdom",
    Complexity: "High",
    HitPointDie: 12,
    Proficiencies: {
        armor: armor,
        shields: true | false,
        weapon: weapon,
        skills: skillInfo,
        savingThrows: Abilities
    },
    StartingEquipment: {
        Choose: {
            A: "Greataxe, 4 handaxes, Explorer's Pack, and 15 GP",
            B: "75 GP",
        }
    }
},
{
    class: "Paladin",
    likes: "Defense",
    primaryAbility: "Strength and Charisma",
    Complexity: "Average",
    HitPointDie: 12,
    Proficiencies: {
        armor: armor,
        shields: true | false,
        weapon: weapon,
        skills: skillInfo,
        savingThrows: Abilities
    },
    StartingEquipment: {
        Choose: {
            A: "Greataxe, 4 handaxes, Explorer's Pack, and 15 GP",
            B: "75 GP",
        }
    }
},
{
    class: "Ranger",
    likes: "Survival",
    primaryAbility: "Dexterity and Wisdom",
    Complexity: "Average",
    HitPointDie: 12,
    Proficiencies: {
        armor: armor,
        shields: true | false,
        weapon: weapon,
        skills: skillInfo,
        savingThrows: Abilities
    },
    StartingEquipment: {
        Choose: {
            A: "Greataxe, 4 handaxes, Explorer's Pack, and 15 GP",
            B: "75 GP",
        }
    }
},
{
    class: "Rogue",
    likes: "Stealth",
    primaryAbility: "Dexterity",
    Complexity: "Low",
    HitPointDie: 12,
    Proficiencies: {
        armor: armor,
        shields: true | false,
        weapon: weapon,
        skills: skillInfo,
        savingThrows: Abilities
    },
    StartingEquipment: {
        Choose: {
            A: "Greataxe, 4 handaxes, Explorer's Pack, and 15 GP",
            B: "75 GP",
        }
    }
},
{
    class: "Sorcerer",
    likes: "Power",
    primaryAbility: "Charisma",
    Complexity: "High",
    HitPointDie: 12,
    Proficiencies: {
        armor: armor,
        shields: true | false,
        weapon: weapon,
        skills: skillInfo,
        savingThrows: Abilities
    },
    StartingEquipment: {
        Choose: {
            A: "Greataxe, 4 handaxes, Explorer's Pack, and 15 GP",
            B: "75 GP",
        }
    }
},
{
    class: "Warlock",
    likes: "Occult Lore",
    primaryAbility: "Charisma",
    Complexity: "High",
    HitPointDie: 12,
    Proficiencies: {
        armor: armor,
        shields: true | false,
        weapon: weapon,
        skills: skillInfo,
        savingThrows: Abilities
    },
    StartingEquipment: {
        Choose: {
            A: "Greataxe, 4 handaxes, Explorer's Pack, and 15 GP",
            B: "75 GP",
        }
    }
},
{
    class: "Wizard",
    likes: "Spellbooks",
    primaryAbility: "Intelligence",
    Complexity: "High",
    HitPointDie: 12,
    Proficiencies: {
        armor: armor,
        shields: true || false,
        weapon: weapon,
        skills: skillInfo,
        savingThrows: Abilities
    },
    StartingEquipment: {
        Choose: {
            A: "Greataxe, 4 handaxes, Explorer's Pack, and 15 GP",
            B: "75 GP",
        }
    }
},
]