export const Races = [{
    Race: "Dragonborn",
    CreatureType: "Humanoid",
    Size: "Medium (about 5-7 feet tall)",
    speed: "30 feet",
    Information: `As a Dragonborn, you have these special traits:`,
    DraconicAncestry: `Your lineage stems from a 
                  dragon progenitor. Choose the kind of dragon from 
                  the Draconic Ancestors table. Your choice affects 
                  your Breath Weapon and Damage Resistance traits 
                  as well as your appearance`,
    DraconicAncestors: [{
                            Dragon: "Black",
                            DmgType: "Acid",
                        },
                        {
                            Dragon: "Blue",
                            DmgType: "Lightning"
                        },
                            {
                            Dragon: "Brass",
                            DmgType: "Fire"
                        },
                            {
                            Dragon: "Bronze",
                            DmgType: "Lightning"
                        },
                            {
                            Dragon: "Copper",
                            DmgType: "Acid"
                        },
                            {
                            Dragon: "Gold",
                            DmgType: "Fire"
                        },
                            {
                            Dragon: "Green",
                            DmgType: "Poison"
                        },
                            {
                            Dragon: "Red",
                            DmgType: "Fire"
                        },
                            {
                            Dragon: "Silver",
                            DmgType: "Cold"
                        },
                            {
                            Dragon: "White",
                            DmgType: "Cold"
                        }
                    ],
    BreathWeapon: `When you take the Attack action 
                    on your turn, you can replace one of your attacks 
                    with an exhalation of magical energy in either a 
                    15-foot Cone or a 30-foot Line that is 5 feet wide 
                    (choose the shape each time). Each creature in that 
                    area must make a Dexterity saving throw (DC 8 plus 
                    your Constitution modifier and Proficiency Bonus). 
                    On a failed save, a creature takes 1d10 damage of 
                    the type determined by your Draconic Ancestry 
                    trait. On a successful save, a creature takes half as 
                    much damage. This damage increases by 1d10 when 
                    you reach character levels 5 (2d10), 11 (3d10), and 
                    17 (4d10). 
                    You can use this Breath Weapon a number of 
                    times equal to your Proficiency Bonus, and you re-
                    gain all expended uses when you finish a Long Rest.`,
    DamageResistance: ` You have Resistance to the 
                        damage type determined by your Draconic Ances
                        try trait.`,
    Darkvision: `You have Darkvision with a range of 60 feet`,
    DraconicFlight: `When you reach character level 
                    5, you can channel draconic magic to give yourself 
                    temporary flight. As a Bonus Action, you sprout 
                    spectral wings on your back that last for 10 minutes 
                    or until you retract the wings (no action required) 
                    or have the Incapacitated condition. During that 
                    time, you have a Fly Speed equal to your Speed. Your 
                    wings appear to be made of the same energy as your 
                    Breath Weapon. Once you use this trait, you can’t 
                    use it again until you finish a Long Rest.`,

},  
{
    Race: "Dwarf",
    CreatureType: "Humanoid",
    Size: "Medium (about 4-5 feet tall)",
    speed: "30 feet",
    Information: `As a Dwarf, you have these special traits.`,
    Darkvision: `You have a darkvision with a range of 120 feet`,
    DwarvenResilience: ` You have Resistance to 
                        Poison damage. You also have Advantage on sav
                        ing throws you make to avoid or end the Poisoned 
                        condition.`,
    DwarvenToughness: `Your Hit Point maximum 
                       increases by 1, and it increases by 1 again whenever 
                       you gain a level.`,
    StoneCunning: `As a Bonus Action, you gain Trem-
                    orsense with a range of 60 feet for 10 minutes. You 
                    must be on a stone surface or touching a stone sur
                    face to use this Tremorsense. The stone can be natu
                    ral or worked. 
                    You can use this Bonus Action a number of times 
                    equal to your Proficiency Bonus, and you regain all 
                    expended uses when you finish a Long Rest.`,
},
{
    Race: "Elf",
    CreatureType: "Humanoid",
    Size: "Medium (about 5-6 feet tall)",
    speed: "30 feet",
    Information: `As an Elf, you have these special traits:`,
    Darkvision: `You have darkvision with a range of 60 feet`,
    ElvenLineage: `You are part of a lineage that 
                    grants you supernatural abilities. Choose a lineage 
                    from the Elven Lineages table. You gain the level 1 
                    benefit of that lineage.
                    When you reach character levels 3 and 5, you 
                    learn a higher-level spell, as shown on the table. 
                    You always have that spell prepared. You can cast it 
                    once without a spell slot, and you regain the ability 
                    to cast it in that way when you finish a Long Rest. 
                    You can also cast the spell using any spell slots you 
                    have of the appropriate level. Intelligence, Wisdom, or Charisma is your spell
                    casting ability for the spells you cast with this trait 
                    (choose the ability when you select the lineage).`,
    Lineages: [
        {
            Lineage: `Drow`,
            Level1: `The range of your Darkvision increases to 120 feet.  
                     You also know the Dancing Lights cantrip.`,
            Level3: `Faerie Fire`,
            Level5: `Darkness`,         
        },
        {
            Lineage: `High Elf`,
            Level1: `You know the Prestidigitation cantrip. Whenever you finish 
                    a Long Rest, you can replace that cantrip with a different 
                    cantrip from the Wizard spell list.`,
            Level3: `Detect Magic`,
            Level5: `Misty Step`,         
        },
        {
            Lineage: `Wood Elf`,
            Level1: `Your Speed increases to 35 feet. You also know the 
                    Druidcraft cantrip.`,
            Level3: `Longstrider`,
            Level5: `Pass without Trace`,         
        },
    ],
    FeyAncestry: `You have Advantage on saving 
                  throws you make to avoid or end the Charmed 
                  condition.`,
    KeenSenses: `You have proficiency in the Insight, 
                Perception, or Survival skill.`,
    Trance: `You don’t need to sleep, and magic can’t 
            put you to sleep. You can finish a Long Rest in 4 
            hours if you spend those hours in a trancelike medi
            tation, during which you retain consciousness.`

    
},
{
    Race: "Dragonborn",
    CreatureType: "Humanoid",
    Size: "Medium (about 5-7 feet tall)",
    speed: "30 feet",
    Information: `As a Dragonborn, you have these special traits.
                  Draconic Ancestry. Your lineage stems from a 
                  dragon progenitor. Choose the kind of dragon from 
                  the Draconic Ancestors table. Your choice affects 
                  your Breath Weapon and Damage Resistance traits 
                  as well as your appearance`,
},
{
    Race: "Dragonborn",
    CreatureType: "Humanoid",
    Size: "Medium (about 5-7 feet tall)",
    speed: "30 feet",
    Information: `As a Dragonborn, you have these special traits.
                  Draconic Ancestry. Your lineage stems from a 
                  dragon progenitor. Choose the kind of dragon from 
                  the Draconic Ancestors table. Your choice affects 
                  your Breath Weapon and Damage Resistance traits 
                  as well as your appearance`,
},
{
    Race: "Dragonborn",
    CreatureType: "Humanoid",
    Size: "Medium (about 5-7 feet tall)",
    speed: "30 feet",
    Information: `As a Dragonborn, you have these special traits.
                  Draconic Ancestry. Your lineage stems from a 
                  dragon progenitor. Choose the kind of dragon from 
                  the Draconic Ancestors table. Your choice affects 
                  your Breath Weapon and Damage Resistance traits 
                  as well as your appearance`,
},
{
    Race: "Dragonborn",
    CreatureType: "Humanoid",
    Size: "Medium (about 5-7 feet tall)",
    speed: "30 feet",
    Information: `As a Dragonborn, you have these special traits.
                  Draconic Ancestry. Your lineage stems from a 
                  dragon progenitor. Choose the kind of dragon from 
                  the Draconic Ancestors table. Your choice affects 
                  your Breath Weapon and Damage Resistance traits 
                  as well as your appearance`,
},
{
    Race: "Dragonborn",
    CreatureType: "Humanoid",
    Size: "Medium (about 5-7 feet tall)",
    speed: "30 feet",
    Information: `As a Dragonborn, you have these special traits.
                  Draconic Ancestry. Your lineage stems from a 
                  dragon progenitor. Choose the kind of dragon from 
                  the Draconic Ancestors table. Your choice affects 
                  your Breath Weapon and Damage Resistance traits 
                  as well as your appearance`,
},
{
    Race: "Dragonborn",
    CreatureType: "Humanoid",
    Size: "Medium (about 5-7 feet tall)",
    speed: "30 feet",
    Information: `As a Dragonborn, you have these special traits.
                  Draconic Ancestry. Your lineage stems from a 
                  dragon progenitor. Choose the kind of dragon from 
                  the Draconic Ancestors table. Your choice affects 
                  your Breath Weapon and Damage Resistance traits 
                  as well as your appearance`,
},
{
    Race: "Dragonborn",
    CreatureType: "Humanoid",
    Size: "Medium (about 5-7 feet tall)",
    speed: "30 feet",
    Information: `As a Dragonborn, you have these special traits.
                  Draconic Ancestry. Your lineage stems from a 
                  dragon progenitor. Choose the kind of dragon from 
                  the Draconic Ancestors table. Your choice affects 
                  your Breath Weapon and Damage Resistance traits 
                  as well as your appearance`,
},
{
    Race: "Dragonborn",
    CreatureType: "Humanoid",
    Size: "Medium (about 5-7 feet tall)",
    speed: "30 feet",
    Information: `As a Dragonborn, you have these special traits.
                  Draconic Ancestry. Your lineage stems from a 
                  dragon progenitor. Choose the kind of dragon from 
                  the Draconic Ancestors table. Your choice affects 
                  your Breath Weapon and Damage Resistance traits 
                  as well as your appearance`,
},
{
    Race: "Dragonborn",
    CreatureType: "Humanoid",
    Size: "Medium (about 5-7 feet tall)",
    speed: "30 feet",
    Information: `As a Dragonborn, you have these special traits.
                  Draconic Ancestry. Your lineage stems from a 
                  dragon progenitor. Choose the kind of dragon from 
                  the Draconic Ancestors table. Your choice affects 
                  your Breath Weapon and Damage Resistance traits 
                  as well as your appearance`,
},    
]