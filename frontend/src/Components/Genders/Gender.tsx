import type { genderProps } from '../../types/types.ts'
import type { Gender } from '../../types/Gender.ts'
import { useNavigate, Link, useParams } from 'react-router-dom'
import x from "../../assets/close.png"

export default function Gender({ singleGender, stage }: genderProps) {
    const navigate = useNavigate();
    const { nameId } = useParams();


    return (
        <>
            {!singleGender && <>
                <div onClick={() => navigate(`/home/create-character/${nameId}/male`)} className='genderBtn' >
                    <p>Male</p>
                </div>
                <div onClick={() => navigate(`/home/create-character/${nameId}/female`)} className='genderBtn'>
                    <p>Female</p>
                </div>
            </>}
            {singleGender && <>{stage === 1 && <Link to={`/home/create-character/${nameId}`}><img className="x-gender" src={x} /></Link>}<div className="genderBtn2"><p>{singleGender}</p></div></>}
        </>

    )
}