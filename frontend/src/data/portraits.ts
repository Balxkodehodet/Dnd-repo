// HUMANS 
// Importer alle bildene på en gang med import.meta.glob
const humanMaleportraitsModules = import.meta.glob('../assets/PortraitsHuman/male/*.png',
        {
            eager: true,
            import: "default"
        }
    );
// Lagre bilde url i portraits 
export const humanMaleportraits = Object.values(humanMaleportraitsModules) as string[];

// Importer alle bildene på en gang med import.meta.glob
const humanFemalePortraitModules = import.meta.glob('../assets/PortraitsHuman/female/*.png',
        {
            eager: true,
            import: "default"
        }
    );
// Lagre bilde url i portraits 
export const humanFemaleportraits = Object.values(humanFemalePortraitModules) as string[];

// ELVES
// MALE
// Importer alle bildene på en gang med import.meta.glob
const elfMaleportraitsModules = import.meta.glob('../assets/PortraitsElf/male/*.png',
        {
            eager: true,
            import: "default"
        }
    );
// Lagre bilde url i portraits 
export const elfMaleportraits = Object.values(elfMaleportraitsModules) as string[];
// FEMALE
// Importer alle bildene på en gang med import.meta.glob
const ElfFemalePortraitModules = import.meta.glob('../assets/PortraitsElf/female/*.png',
        {
            eager: true,
            import: "default"
        }
    );
// Lagre bilde url i portraits 
export const elfFemaleportraits = Object.values(ElfFemalePortraitModules) as string[];

// DWARVES
// MALE
// Importer alle bildene på en gang med import.meta.glob
const dwarfMaleportraitsModules = import.meta.glob('../assets/PortraitsDwarf/male/*.png',
        {
            eager: true,
            import: "default"
        }
    );
// Lagre bilde url i portraits 
export const dwarfMaleportraits = Object.values(dwarfMaleportraitsModules) as string[];
// FEMALE
// Importer alle bildene på en gang med import.meta.glob
const dwarfFemalePortraitModules = import.meta.glob('../assets/PortraitsDwarf/female/*.png',
        {
            eager: true,
            import: "default"
        }
    );
// Lagre bilde url i portraits 
export const dwarfFemaleportraits = Object.values(dwarfFemalePortraitModules) as string[];
