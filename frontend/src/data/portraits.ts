// Importer alle bildene på en gang med import.meta.glob
const portraitsModules = import.meta.glob('../assets/PortraitsHuman/*.png',
        {
            eager: true,
            import: "default"
        }
    );
// Lagre bilde url i portraits 
const portraits = Object.values(portraitsModules) as string[];

export default portraits;