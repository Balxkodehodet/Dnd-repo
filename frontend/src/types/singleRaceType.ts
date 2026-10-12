type DraconicAncestors = {
                            Dragon: string,
                            DmgType: string,
                         }    
type Lineages = 
        {
            Lineage: string,
            Level1: string,
            Level3: string,
            Level5: string, 
}
type Lineages2 = 
        {
            Lineage: string,
            Information: string,
        }
    

type Benefits = [
        {
            CloudGiant: string,
        },
        {
            FireGiant: string,
        },
        {
            FrostGiant: string,
        },
        {
            HillGiant: string,
        },
        {
            StoneGiant: string,
        },
        {
            StormGiant: string,
        },
    ]
type FiendishLegacies = 
        {
            Legacy: string,
            Level1: string,
            Level3: string,
            Level5: string
        }
    

export type singleRace = {
    Race: string,
    CreatureType: string,
    Size: string,
    speed: string,
    Information: string,
    DraconicAncestors?: DraconicAncestors[],
    BreathWeapon?: string,
    DamageResistance?: string,
    Darkvision?: string,
    DraconicFlight?: string,
    DwarvenResilience?: string,
    DwarvenToughness?: string,
    StoneCunning?: string,
    ElvenLineage?: string,
    Lineages?: Lineages[] | Lineages2[],
    FeyAncestry?: string,
    KeenSenses?: string,
    Trance?: string,
    GnomishCunning?: string,
    GnomishLineage?: string,
    GiantAncestry?: string,
    Benefits?: Benefits,
    LargeForm?: string,
    PowerfulBuild?: string,
    Brave?: string,
    HalflingNimbleness?: string,
    Luck?: string,
    NaturallyStealthy?: string,
    Resourceful?: string,
    Skillful?: string,
    Versatile?: string,
    AdrenalineRush?: string,
    RelentlessEndurance?: string,
    FiendishLegacy?: string,
    FiendishLegacies?: FiendishLegacies[],
    OtherworldlyPresence?: string
}

