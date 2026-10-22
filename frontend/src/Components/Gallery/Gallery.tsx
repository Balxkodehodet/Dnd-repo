import { Link } from "react-router-dom"
import { humanMaleportraits, humanFemaleportraits, elfFemaleportraits, elfMaleportraits, 
        dwarfFemaleportraits, dwarfMaleportraits } from '../../data/portraits.ts'
import type { galleryProps } from "../../types/types.ts";
import { useParams } from "react-router-dom";
import x from "../../assets/close.png"

export default function Gallery({ singleImg, className, stage }: galleryProps): React.JSX.Element {

    let portraitIndex = Number(singleImg);
    let hasValidPortrait = Number.isInteger(portraitIndex) && portraitIndex !== undefined && portraitIndex >= 0;
    const { nameId, genderId, raceId } = useParams();
    let humanMaleportrait = hasValidPortrait ? humanMaleportraits[Number(singleImg)] : undefined;
    let humanFemaleportrait = hasValidPortrait ? humanFemaleportraits[Number(singleImg)] : undefined;
    let elfMaleportrait = hasValidPortrait ? elfMaleportraits[Number(singleImg)] : undefined;
    let elfFemaleportrait = hasValidPortrait ? elfFemaleportraits[Number(singleImg)] : undefined;
    let dwarfMaleportrait = hasValidPortrait ? dwarfMaleportraits[Number(singleImg)] : undefined;
    let dwarfFemaleportrait = hasValidPortrait ? dwarfFemaleportraits[Number(singleImg)] : undefined;
    
    return (
        <>
            {!humanMaleportrait && genderId === "male" && raceId === "human" && <div>
                <h2>Choose portrait</h2>
                <div className="portraitcontainer">
                    {humanMaleportraits.map((portrait, index) => {
                        return (
                            <div className="item" key={portrait}>
                                <Link to={`/home/create-character/${nameId}/${genderId}/${raceId}/${index}`}>
                                    <img className="portrait"
                                        src={portrait}
                                        alt="Human character portrait" /></Link>

                            </div>

                        )

                    })}

                </div>
            </div>
            }
            {humanMaleportrait && genderId === "male" && raceId === "human" && <><h2>Chosen portrait</h2>
                <div className="singleportrait">
                    <img className={className} src={humanMaleportrait} />
                    {stage === 3 && <Link to={`/home/create-character/${nameId}/${genderId}/${raceId}`}><img className="x-portrait" src={x} /></Link>}
                </div>
            </>}

            {!humanFemaleportrait && genderId === "female" && raceId === "human" &&<div>
                <h2>Choose portrait</h2>
                <div className="portraitcontainer">
                    {humanFemaleportraits.map((portrait, index) => {
                        return (
                            <div className="item" key={portrait}>
                                <Link to={`/home/create-character/${nameId}/${genderId}/${raceId}/${index}`}>
                                    <img className="portrait"
                                        src={portrait}
                                        alt="Human character portrait" /></Link>

                            </div>

                        )

                    })}

                </div>
            </div>
            }
            {humanFemaleportrait && genderId === "female" && raceId === "human" &&<><h2>Chosen portrait</h2>
                <div className="singleportrait">
                    <img className={className} src={humanFemaleportrait} />
                    {stage === 3 && <Link to={`/home/create-character/${nameId}/${genderId}/${raceId}`}><img className="x-portrait" src={x} /></Link>}
                </div>
            </>}

            {!elfMaleportrait && genderId === "male" && raceId === "elf" &&<div>
                <h2>Choose portrait</h2>
                <div className="portraitcontainer">
                    {elfMaleportraits.map((portrait, index) => {
                        return (
                            <div className="item" key={portrait}>
                                <Link to={`/home/create-character/${nameId}/${genderId}/${raceId}/${index}`}>
                                    <img className="portrait"
                                        src={portrait}
                                        alt="Human character portrait" /></Link>

                            </div>

                        )

                    })}

                </div>
            </div>
            }
            {elfMaleportrait && genderId === "male" && raceId === "elf" &&<><h2>Chosen portrait</h2>
                <div className="singleportrait">
                    <img className={className} src={elfMaleportrait} />
                    {stage === 3 && <Link to={`/home/create-character/${nameId}/${genderId}/${raceId}`}><img className="x-portrait" src={x} /></Link>}
                </div>
            </>}
            
            {!elfFemaleportrait && genderId === "female" && raceId === "elf" &&<div>
                <h2>Choose portrait</h2>
                <div className="portraitcontainer">
                    {elfFemaleportraits.map((portrait, index) => {
                        return (
                            <div className="item" key={portrait}>
                                <Link to={`/home/create-character/${nameId}/${genderId}/${raceId}/${index}`}>
                                    <img className="portrait"
                                        src={portrait}
                                        alt="Human character portrait" /></Link>

                            </div>

                        )

                    })}

                </div>
            </div>
            }
            {elfFemaleportrait && genderId === "female" && raceId === "elf" &&<><h2>Chosen portrait</h2>
                <div className="singleportrait">
                    <img className={className} src={elfFemaleportrait} />
                    {stage === 3 && <Link to={`/home/create-character/${nameId}/${genderId}/${raceId}`}><img className="x-portrait" src={x} /></Link>}
                </div>
            </>}

            {!dwarfMaleportrait && genderId === "male" && raceId === "dwarf" &&<div>
                <h2>Choose portrait</h2>
                <div className="portraitcontainer">
                    {dwarfMaleportraits.map((portrait, index) => {
                        return (
                            <div className="item" key={portrait}>
                                <Link to={`/home/create-character/${nameId}/${genderId}/${raceId}/${index}`}>
                                    <img className="portrait"
                                        src={portrait}
                                        alt="Human character portrait" /></Link>

                            </div>

                        )

                    })}

                </div>
            </div>
            }
            {dwarfMaleportrait && genderId === "male" && raceId === "dwarf" &&<><h2>Chosen portrait</h2>
                <div className="singleportrait">
                    <img className={className} src={dwarfMaleportrait} />
                    {stage === 3 && <Link to={`/home/create-character/${nameId}/${genderId}/${raceId}`}><img className="x-portrait" src={x} /></Link>}
                </div>
            </>}
            
            {!dwarfFemaleportrait && genderId === "female" && raceId === "dwarf" &&<div>
                <h2>Choose portrait</h2>
                <div className="portraitcontainer">
                    {dwarfFemaleportraits.map((portrait, index) => {
                        return (
                            <div className="item" key={portrait}>
                                <Link to={`/home/create-character/${nameId}/${genderId}/${raceId}/${index}`}>
                                    <img className="portrait"
                                        src={portrait}
                                        alt="Human character portrait" /></Link>

                            </div>

                        )

                    })}

                </div>
            </div>
            }
            {dwarfFemaleportrait && genderId === "female" && raceId === "dwarf" &&<><h2>Chosen portrait</h2>
                <div className="singleportrait">
                    <img className={className} src={dwarfFemaleportrait} />
                    {stage === 3 && <Link to={`/home/create-character/${nameId}/${genderId}/${raceId}`}><img className="x-portrait" src={x} /></Link>}
                </div>
            </>}

        </>
    )
}
