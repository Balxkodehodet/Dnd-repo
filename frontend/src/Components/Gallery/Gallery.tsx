import {Link} from "react-router-dom"
import portraits from '../../data/portraits.ts'
import type { galleryProps } from "../../types/types.ts";
import { useParams } from "react-router-dom";
import x from "../../assets/close.png"

export default function Gallery({singleImg, className, stage}: galleryProps):React.JSX.Element {

            let portraitIndex = Number(singleImg);
            let hasValidPortrait = Number.isInteger(portraitIndex) && portraitIndex !== undefined && portraitIndex >= 0;
            const {raceId} = useParams();
            let portrait = hasValidPortrait ? portraits[Number(singleImg)] : undefined;
            return (
                <>
                    {!portrait && <div>
                        <h2>Choose portrait</h2>
                        <div className="portraitcontainer">
                    {portraits.map((portrait, index) => {
                       return (
                            <div key={portrait}>
                            <Link to={`/home/create-character/${raceId}/${index}`}>
                            <img className="portrait"
                                 src={portrait}
                                 alt="Human character portrait"/></Link>
                                
                        </div>
                        
                        )
                        
                    })}
                    
                    </div>
                    </div>
                    } 
                    {portrait && <><div className="singleportrait"><h2>Chosen portrait</h2>
                                            <img className={className} src={portrait}/>
                    {stage === 1 && <Link to={`/home/create-character/${raceId}`}><img className="x-portrait" src={x}/></Link>}
                                            </div>
                    </>}

                </>
            )
}