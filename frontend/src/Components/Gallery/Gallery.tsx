import {Link} from "react-router-dom"
import portraits from '../../data/portraits.ts'
export default function Gallery() {


            
            return (
                <>
                        <h2>Portrett</h2>
                        <div className="portraitcontainer">
                    {portraits.map((portrait, index) => {
                       return (
                            <div key={portrait}>
                            <Link to={`/home/selected-portrait/${index}`}>
                            <img className="portrait"
                                 src={portrait}
                                 alt="Human character portrait"/></Link>
                                
                        </div>
                        
                        )
                        
                    })}
                    
                    </div> 
                </>
            )
}