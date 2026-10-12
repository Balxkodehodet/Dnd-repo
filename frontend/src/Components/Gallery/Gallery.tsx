import {Link} from "react-router-dom"
import portraits from '../../data/portraits.ts'
import type { galleryProps } from "../../types/types.ts";

export default function Gallery({singleImg, className}: galleryProps):React.JSX.Element {

            let portraitIndex = Number(singleImg);
            let hasValidPortrait = Number.isInteger(portraitIndex) && portraitIndex !== undefined && portraitIndex >= 0;

            let portrait = hasValidPortrait ? portraits[Number(singleImg)] : undefined;
            return (
                <>
                    {!portrait && <div className={className}>
                        <h2>Choose portrait</h2>
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
                    </div>
                    } 
                    {portrait && <><div><h2>Chosen portrait</h2>
                                            <img className={className} src={portrait}/>
                                            </div>
                    </>}

                </>
            )
}