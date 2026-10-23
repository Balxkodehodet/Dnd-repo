import { Link } from "react-router-dom"
import { humanMaleportraits, humanFemaleportraits, elfFemaleportraits, elfMaleportraits, 
        dwarfFemaleportraits, dwarfMaleportraits } from '../../data/portraits.ts'
import type { galleryProps } from "../../types/types.ts";
import { useParams } from "react-router-dom";
import x from "../../assets/close.png"

export default function Gallery({ singleImg, className, stage }: galleryProps): React.JSX.Element {

    let portraitName = singleImg;
    let hasValidPortrait = portraitName !== undefined;
    const { nameId, genderId, raceId } = useParams();
    let humanMaleportrait = hasValidPortrait ? humanMaleportraits.find((human) => human.name === singleImg) : undefined;
    let humanFemaleportrait = hasValidPortrait ? humanFemaleportraits.find((human) => human.name === singleImg) : undefined;
    let elfMaleportrait = hasValidPortrait ? elfMaleportraits.find((elf) => elf.name === singleImg) : undefined;
    let elfFemaleportrait = hasValidPortrait ? elfFemaleportraits.find((elf)=> elf.name === singleImg) : undefined;
    let dwarfMaleportrait = hasValidPortrait ? dwarfMaleportraits.find((dwarf) => dwarf.name === singleImg) : undefined;
    let dwarfFemaleportrait = hasValidPortrait ? dwarfFemaleportraits.find((dwarf) => dwarf.name === singleImg) : undefined;
    
    return (
        <>
            {!humanMaleportrait && genderId === "male" && raceId === "human" && <div>
                <h2>Choose portrait</h2>
                <div className="portraitcontainer">
                    {humanMaleportraits.map((portrait) => {
                        return (
                            <div className="item" key={portrait.src}>
                                <Link to={`/home/create-character/${nameId}/${genderId}/${raceId}/${portrait.name}`}>
                                    <img className="portrait"
                                        src={portrait.src}
                                        alt="Human character portrait" /></Link>

                            </div>

                        )

                    })}

                </div>
            </div>
            }
            {humanMaleportrait && genderId === "male" && raceId === "human" && <><h2>Chosen portrait</h2>
                <div className="singleportrait">
                    <img className={className} src={humanMaleportrait.src} />
                    {stage === 3 && <Link to={`/home/create-character/${nameId}/${genderId}/${raceId}`}><img className="x-portrait" src={x} /></Link>}
                </div>
            </>}

            {!humanFemaleportrait && genderId === "female" && raceId === "human" &&<div>
                <h2>Choose portrait</h2>
                <div className="portraitcontainer">
                    {humanFemaleportraits.map((portrait) => {
                        return (
                            <div className="item" key={portrait.src}>
                                <Link to={`/home/create-character/${nameId}/${genderId}/${raceId}/${portrait.name}`}>
                                    <img className="portrait"
                                        src={portrait.src}
                                        alt="Human character portrait" /></Link>

                            </div>

                        )

                    })}

                </div>
            </div>
            }
            {humanFemaleportrait && genderId === "female" && raceId === "human" &&<><h2>Chosen portrait</h2>
                <div className="singleportrait">
                    <img className={className} src={humanFemaleportrait.src} />
                    {stage === 3 && <Link to={`/home/create-character/${nameId}/${genderId}/${raceId}`}><img className="x-portrait" src={x} /></Link>}
                </div>
            </>}

            {!elfMaleportrait && genderId === "male" && raceId === "elf" &&<div>
                <h2>Choose portrait</h2>
                <div className="portraitcontainer">
                    {elfMaleportraits.map((portrait) => {
                        return (
                            <div className="item" key={portrait.src}>
                                <Link to={`/home/create-character/${nameId}/${genderId}/${raceId}/${portrait.name}`}>
                                    <img className="portrait"
                                        src={portrait.src}
                                        alt="Human character portrait" /></Link>

                            </div>

                        )

                    })}

                </div>
            </div>
            }
            {elfMaleportrait && genderId === "male" && raceId === "elf" &&<><h2>Chosen portrait</h2>
                <div className="singleportrait">
                    <img className={className} src={elfMaleportrait.src} />
                    {stage === 3 && <Link to={`/home/create-character/${nameId}/${genderId}/${raceId}`}><img className="x-portrait" src={x} /></Link>}
                </div>
            </>}
            
            {!elfFemaleportrait && genderId === "female" && raceId === "elf" &&<div>
                <h2>Choose portrait</h2>
                <div className="portraitcontainer">
                    {elfFemaleportraits.map((portrait) => {
                        return (
                            <div className="item" key={portrait.src}>
                                <Link to={`/home/create-character/${nameId}/${genderId}/${raceId}/${portrait.name}`}>
                                    <img className="portrait"
                                        src={portrait.src}
                                        alt="Human character portrait" /></Link>

                            </div>

                        )

                    })}

                </div>
            </div>
            }
            {elfFemaleportrait && genderId === "female" && raceId === "elf" &&<><h2>Chosen portrait</h2>
                <div className="singleportrait">
                    <img className={className} src={elfFemaleportrait.src} />
                    {stage === 3 && <Link to={`/home/create-character/${nameId}/${genderId}/${raceId}`}><img className="x-portrait" src={x} /></Link>}
                </div>
            </>}

            {!dwarfMaleportrait && genderId === "male" && raceId === "dwarf" &&<div>
                <h2>Choose portrait</h2>
                <div className="portraitcontainer">
                    {dwarfMaleportraits.map((portrait) => {
                        return (
                            <div className="item" key={portrait.src}>
                                <Link to={`/home/create-character/${nameId}/${genderId}/${raceId}/${portrait.name}`}>
                                    <img className="portrait"
                                        src={portrait.src}
                                        alt="Human character portrait" /></Link>

                            </div>

                        )

                    })}

                </div>
            </div>
            }
            {dwarfMaleportrait && genderId === "male" && raceId === "dwarf" &&<><h2>Chosen portrait</h2>
                <div className="singleportrait">
                    <img className={className} src={dwarfMaleportrait.src} />
                    {stage === 3 && <Link to={`/home/create-character/${nameId}/${genderId}/${raceId}`}><img className="x-portrait" src={x} /></Link>}
                </div>
            </>}
            
            {!dwarfFemaleportrait && genderId === "female" && raceId === "dwarf" &&<div>
                <h2>Choose portrait</h2>
                <div className="portraitcontainer">
                    {dwarfFemaleportraits.map((portrait) => {
                        return (
                            <div className="item" key={portrait.src}>
                                <Link to={`/home/create-character/${nameId}/${genderId}/${raceId}/${portrait.name}`}>
                                    <img className="portrait"
                                        src={portrait.src}
                                        alt="Human character portrait" /></Link>

                            </div>

                        )

                    })}

                </div>
            </div>
            }
            {dwarfFemaleportrait && genderId === "female" && raceId === "dwarf" &&<><h2>Chosen portrait</h2>
                <div className="singleportrait">
                    <img className={className} src={dwarfFemaleportrait.src} />
                    {stage === 3 && <Link to={`/home/create-character/${nameId}/${genderId}/${raceId}`}><img className="x-portrait" src={x} /></Link>}
                </div>
            </>}

        </>
    )
}
