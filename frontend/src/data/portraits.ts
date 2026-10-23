// HUMANS 
// Male
// Importer alle bildene på en gang med import.meta.glob
const humanMaleportraitsModules = import.meta.glob('../assets/PortraitsHuman/male/*.png',
        {
            eager: true,
            import: "default"
        }
    );
// Lagre bilde url i portraits 
export const humanMaleportraits = Object.entries(humanMaleportraitsModules).map(([path, src]) => {
    const filename = path.split("/").pop()?.replace(/\.(png|jpg|jpeg|webp)$/i, "");
    return {
        name: filename,
        src: src as string
    }
})
// FEMALE
// Importer alle bildene på en gang med import.meta.glob
const humanFemalePortraitModules = import.meta.glob('../assets/PortraitsHuman/female/*.png',
        {
            eager: true,
            import: "default"
        }
    );
// Lagre bilde url i portraits 
export const humanFemaleportraits = Object.entries(humanFemalePortraitModules).map(([path, src]) => {
    const filename = path.split("/").pop()?.replace(/\.(png|jpg|jpeg|webp)$/i, "");
    return {
        name: filename,
        src: src as string
    }
})

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
export const elfMaleportraits = Object.entries(elfMaleportraitsModules).map(([path, src]) => {
    const filename = path.split("/").pop()?.replace(/\.(png|jpg|jpeg|webp)$/i, "");
    return {
        name: filename,
        src: src as string
    }
})
// FEMALE
// Importer alle bildene på en gang med import.meta.glob
const ElfFemalePortraitModules = import.meta.glob('../assets/PortraitsElf/female/*.png',
        {
            eager: true,
            import: "default"
        }
    );
// Lagre bilde url i portraits 
export const elfFemaleportraits = Object.entries(ElfFemalePortraitModules).map(([path, src]) => {
    const filename = path.split("/").pop()?.replace(/\.(png|jpg|jpeg|webp)$/i, "");
    return {
        name: filename,
        src: src as string
    }
})

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
export const dwarfMaleportraits = Object.entries(dwarfMaleportraitsModules).map(([path, src]) => {
    const filename = path.split("/").pop()?.replace(/\.(png|jpg|jpeg|webp)$/i, "");
    return {
        name: filename,
        src: src as string
    }
})
// FEMALE
// Importer alle bildene på en gang med import.meta.glob
const dwarfFemalePortraitModules = import.meta.glob('../assets/PortraitsDwarf/female/*.png',
        {
            eager: true,
            import: "default"
        }
    );
// Lagre bilde url i portraits 
export const dwarfFemaleportraits = Object.entries(dwarfFemalePortraitModules).map(([path, src]) => {
    const filename = path.split("/").pop()?.replace(/\.(png|jpg|jpeg|webp)$/i, "");
    return {
        name: filename,
        src: src as string
    }
})
