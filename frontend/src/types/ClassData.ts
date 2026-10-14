type skillInfo = {

    Choose: number;
    Options: string[]

}

type startInfo = {

    Choose: {
        A: string,
        B: string
    }

}

export type classData = {
    class: string,
    likes: string,
    primaryAbility: string,
    Complexity: string,
    HitPointDie: number,
    SavingThrowsProficiencies: string,
    SkillProficiencies: skillInfo,
    WeaponProficiencies: string,
    ArmorTraining: string,
    StartingEquipment: startInfo
}