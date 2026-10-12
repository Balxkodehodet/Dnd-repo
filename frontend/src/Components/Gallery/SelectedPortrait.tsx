import x from "../../assets/close.png"
import portraits from '../../data/portraits.ts'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
export default function SelectedPortrait() {

    const {raceId, portraitId} = useParams();
    const portrait = portraits[Number(portraitId)];
    return (
        <>
        <div className="selected-container-parent">
            <div className="selected-container">
                <img className="selected" src={portrait}/>
                <Link to='/home/gallery'><img className="x" src={x}/></Link>
                <Link className="chooseportrait-link" to={`/home/create-character/${raceId}/${portraitId}`}><button>Choose portrait</button></Link>  
            </div> 
        </div>    
        </>
    )
}