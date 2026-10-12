import type { racetypes } from "../types/racetypes"
export const TotalRaces:racetypes = [{
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
                    Breath Weapon. Once you use this trait, you can't 
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
    Trance: `You don't need to sleep, and magic can't 
            put you to sleep. You can finish a Long Rest in 4 
            hours if you spend those hours in a trancelike medi
            tation, during which you retain consciousness.`

    
},
{
    Race: "Gnome",
    CreatureType: "Humanoid",
    Size: "Small (about 3-4 feet tall)",
    speed: "30 feet",
    Information: `As a Gnome, you have these special traits.`,
    Darkvision: `You have Darkvision with a range of 60 feet.`,
    GnomishCunning: `You have Advantage on Intelligence, Wisdom and Charisma saving throws.`,
    GnomishLineage: `You are part of a lineage that 
                    grants you supernatural abilities. Choose one of the 
                    following options; whichever one you choose, Intel
                    ligence, Wisdom, or Charisma is your spellcasting 
                    ability for the spells you cast with this trait (choose 
                    the ability when you select the lineage):`,
    Lineages: [
        {
            Lineage: `Forest Gnome`,
            Information: `You know the Minor Illusion cantrip. 
                        You also always have the Speak with Animals spell 
                        prepared. You can cast it without a spell slot a 
                        number of times equal to your Proficiency Bonus, 
                        and you regain all expended uses when you finish 
                        a Long Rest. You can also use any spell slots you 
                        have to cast the spell.`,
        },
        {
            Lineage: `Rock Gnome`,
            Information: `You know the Mending and Presti
                        digitation cantrips. In addition, you can spend 10 
                        minutes casting Prestidigitation to create a Tiny 
                        clockwork device (AC 5, 1 HP), such as a toy, fire 
                        starter, or music box. When you create the device, 
                        you determine its function by choosing one effect 
                        from Prestidigitation; the device produces that effect
                        whenever you or another creature takes a Bonus Action
                        to activate it with a touch. If the chosen effect
                        has options within it, you choose one of those options for
                        the device when you create it. For example, if you choose
                        the spell's ignite-extinguish effect, you determine whether
                        the device ignites or extinguishes fire; the device doesn't 
                        do both.
                        You can have three such devices in existence 
                        at a time, and each falls apart 8 hours after its 
                        creation or when you dismantle it with a touch as 
                        a Utilize action.`
        }
    ]
},
{
    Race: "Goliath",
    CreatureType: "Humanoid",
    Size: "Medium (about 7-8 feet tall)",
    speed: "35 feet",
    Information: `As a Goliath, you have these special traits:`,
    GiantAncestry: `You are descended from Giants. 
                    Choose one of the following benefits—a supernatu
                    ral boon from your ancestry; you can use the chosen 
                    benefit a number of times equal to your Proficiency 
                    Bonus, and you regain all expended uses when you 
                    finish a Long Rest:`,
    Benefits: [
        {
            CloudGiant: `Cloud's jaunt:  As a Bonus Action, you 
                        magically teleport up to 30 feet to an unoccupied 
                        space you can see.`
        },
        {
            FireGiant: `Fire's Burn:  When you hit a target 
                        with an attack roll and deal damage to it, you can 
                        also deal 1d10 Fire damage to that target.`,
        },
        {
            FrostGiant: `Frost's Chill: When you hit a target 
                        with an attack roll and deal damage to it, you 
                        can also deal 1d6 Cold damage to that target and 
                        reduce its Speed by 10 feet until the start of your 
                        next turn.`,
        },
        {
            HillGiant: `Hill's Tumble: When you hit a Large 
                        or smaller creature with an attack roll and deal 
                        damage to it, you can give that target the Prone 
                        condition.`,
        },
        {
            StoneGiant: `Stone's Endurance: When you take 
                        damage, you can take a Reaction to roll 1d12. Add 
                        your Constitution modifier to the number rolled 
                        and reduce the damage by that total.`,
        },
        {
            StormGiant: `Storm's Thunder:  When you take 
                        damage from a creature within 60 feet of you, you 
                        can take a Reaction to deal 1d8 Thunder damage 
                        to that creature.`
        },
    ],
    LargeForm: `Starting at character level 5, you can ` +
                "change your size to Large as a Bonus Action if you're" + 
                `in a big enough space. This transformation lasts for 
                10 minutes or until you end it (no action required). 
                For that duration, you have Advantage on Strength 
                checks, and your Speed increases by 10 feet. Once 
                you use this trait, you can't use it again until you 
                finish a Long Rest.`,
    PowerfulBuild: `You have Advantage on any abil
                    ity check you make to end the Grappled condition. 
                    You also count as one size larger when determining 
                    your carrying capacity.`
},
{
    Race: "Halfling",
    CreatureType: "Humanoid",
    Size: "Small (about 2-3 feet tall)",
    speed: "30 feet",
    Information: `As a Halfling, you have these special traits.`,
    Brave: `You have Advantage on saving throws you make to avoid or end the Frightened condition.`,
    HalflingNimbleness: `You can move through the 
                        space of any creature that is a size larger than you, 
                        but you can't stop in the same space.`,
    Luck: `When you roll a 1 on the d20 of a D20 Test, 
           you can reroll the die, and you must use the new 
           roll.`,
    NaturallyStealthy: `You can take the Hide action 
                        even when you are obscured only by a creature that 
                        is at least one size larger than you.`
},
{
    Race: "Human",
    CreatureType: "Humanoid",
    Size: "Medium (about 4-7 feet tall) or Small (about 2-4 feet tall), chosen when you select this species.",
    speed: "30 feet",
    Information: `As a Human, you have these special traits:`,
    Resourceful: `You gain Heroic Inspiration whenever you finish a Long Rest`,
    Skillful: `You gain proficiency in one skill of your choice`,
    Versatile: `You gain an Origin feat of your choice (see "Feats"). Skilled is recommended. `
},
{
    Race: "Orc",
    CreatureType: "Humanoid",
    Size: "Medium (about 6-7 feet tall)",
    speed: "30 feet",
    Information: `As a Orc, you have these special traits.`,
    AdrenalineRush: `You can take the Dash action as 
                    a Bonus Action. When you do so, you gain a number 
                    of Temporary Hit Points equal to your Proficiency 
                    Bonus.
                    You can use this trait a number of times equal 
                    to your Proficiency Bonus, and you regain all ex
                    pended uses when you finish a Short or Long Rest.`,
    Darkvision: `You have Darkvision with a range of 120 feet.`,
    RelentlessEndurance: `When you are reduced to 
                            0 Hit Points but not killed outright, you can drop to 
                            1 Hit Point instead. Once you use this trait, you can't 
                            do so again until you finish a Long Rest.`,
},
{
    Race: "Tiefling",
    CreatureType: "Humanoid",
    Size: ` Medium (about 4-7 feet tall) or Small (about 3-4 
            feet tall), chosen when you select this species`,
    speed: "30 feet",
    Information: `As a Tiefling, you have these special traits:`,
    Darkvision: `You have Darkvision with a range of 60 feet`,
    FiendishLegacy: `You are the recipient of a legacy 
                        that grants you supernatural abilities. Choose a leg
                        acy from the Fiendish Legacies table. You gain the 
                        level 1 benefit of the chosen legacy.
                        When you reach character levels 3 and 5, you 
                        learn a higher-level spell, as shown on the table. 
                        You always have that spell prepared. You can cast it 
                        once without a spell slot, and you regain the ability 
                        to cast it in that way when you finish a Long Rest. 
                        You can also cast the spell using any spell slots you 
                        have of the appropriate level.
                        Intelligence, Wisdom, or Charisma is your spell
                        casting ability for the spells you cast with this trait 
                        (choose the ability when you select the legacy).`,
    FiendishLegacies: [
        {
            Legacy: `Abyssal`,
            Level1: `You have Resistance to Poison damage. 
                     You also know the Poison Spray cantrip.`,
            Level3: `Ray of Sickness`,
            Level5: `Hold Person`
        },
        {
            Legacy: `Chtonic`,
            Level1: `You have Resistance to Necrotic damage. 
                     You also know the Chill Touch cantrip.`,
            Level3: `False Life`,
            Level5: `Ray of Enfeeblement`
        },
        {
            Legacy: `Infernal`,
            Level1: `You have Resistance to Fire damage. 
                     You also know the Fire Bolt cantrip.`,
            Level3: `Hellish Rebuke`,
            Level5: `Darkness`
        }
    ],
    OtherworldlyPresence: ` You know the Thauma
                            turgy cantrip. When you cast it with this trait, the 
                            spell uses the same spellcasting ability you use for 
                            your Fiendish Legacy trait.`
},   
]