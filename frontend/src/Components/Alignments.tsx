import {AlignmentsData} from "../data/AlignmentsData.ts";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import {useState} from "react";
import type {AlignmentsTypesProps} from "../types/AlignmentsTypes.ts";

export default function Alignments({chosenAlignment, setChosenAlignment, setStage, alignmentStage, setAlignmentStage}: AlignmentsTypesProps) {
    const [chosenId, setChosenId] = useState<number | null>(null);
    const { nameId, genderId, raceId, portraitId, classId, background } = useParams();
    return (
        <>
        {alignmentStage === 0 && <div className="alignments">
            <h2>Alignments</h2>
            <p>Alignments are a way to describe a character's moral and ethical perspective.  
                There are nine alignments, which are divided into three categories: lawful, neutral, and chaotic. 
                Each category has three alignments, which are further defined by their moral perspective: good, neutral, 
                and evil.</p>
            {AlignmentsData.map((alignment, index) => {
                const alignmentName = alignment.name;
                const alignmentInfo = alignment.info;
                return (
                    <div onClick={() => {
                        setChosenId(chosenId === index ? null : index)
                        setChosenAlignment(alignmentName)
                        }} key={index} className={chosenId === index ? "chosen" : "alignment"}>
                        <h3>{alignmentName}</h3>
                        <p>{alignmentInfo}</p>
                    </div>
                )
            })}
            <Link to={`/home/create-character/${nameId}/${genderId}/${raceId}/${portraitId}/${classId}/${background}/${chosenAlignment}`}>
                <button onClick={() => {
                    setAlignmentStage(1);
                    setStage(8)
                }} className="selectionbtn">Choose {chosenAlignment}</button>
            </Link>
        </div>
}
        {alignmentStage === 1 && <div className="alignments"><strong>Chosen Alignment:</strong>{chosenAlignment}</div>}

    </>)
}