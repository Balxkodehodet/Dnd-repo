import x from "../../assets/close.png"
import {TotalRaces} from '../../data/TotalRaces.ts'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
export default function SelectedRace() {

    const {raceId} = useParams();
    const race = TotalRaces[Number(raceId)];
    return (
        <>
        <div className="selected-container-parent">
            <div className="selected-container">
                <p>{race.Race}</p>
                <Link to='/home/create-character'><img className="x" src={x}/></Link>
                <Link className="chooseportrait-link" to={`/home/create-character/${raceId}`}><button>Choose Race</button></Link>  
            </div> 
        </div>    
        </>
    )
}