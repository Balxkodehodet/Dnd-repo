import type { genderProps } from '../../types/types.ts'
import type { Gender } from '../../types/Gender.ts'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import x from "../../assets/close.png"

export default function Gender({ singleGender, stage }: genderProps) {
    const [chosenGender, setChosenGender] = useState<Gender | undefined>(undefined)
    const navigate = useNavigate();

    useEffect(() => {
        navigate(`/home/create-character/${chosenGender}`);
    }, [chosenGender])

    return (
        <>
            {!singleGender && <div className="genderContainer">
                <div onClick={() => setChosenGender("Male")} className="genderBtn">
                    <p>Male</p>
                </div>
                <div onClick={() => setChosenGender("Female")} className="genderBtn">
                    <p>Female</p>
                </div>
            </div>}
            {singleGender && <>{stage === 0 && <Link to="/home/create-character"><img className="x-gender" src={x} /></Link>}<div className="genderBtn"><p>{chosenGender}</p></div></>}
        </>

    )
}