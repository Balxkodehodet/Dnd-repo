import x from "../../assets/close.png"
import portraits from '../../data/portraits.ts'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
export default function SelectedPortrait() {

    const {id} = useParams();
    const portrait = portraits[Number(id)];
    return (
        <>
        <div className="selected-container-parent">
            <div className="selected-container">
                <img className="selected" src={portrait}/>
                <Link to='/home/gallery'><img className="x" src={x}/></Link>
            </div>   
        </div>    
        </>
    )
}