import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
import TrendIcon from './TrendIcon'
import InfoIcon from './InfoIcon'

function DataCard ({ onClick, selectedChart, colour, item}) {
    
    const {title, data, change, trend, icon, text} = item;

    return (
        <div 
        className={`${selectedChart === title ? 'activeDataSnap' : ''} snapshotCard` } 
        onClick={onClick}
        >
            <InfoIcon text={text}/>
            <div className='iconContainer' style={{backgroundColor: colour}}>
                <FontAwesomeIcon icon={icon} />
            </div>
            <p className='snapshotData'>{data}</p>
            <p className='snapshotTitle'>{title}</p>
            <TrendIcon change={change} trend={trend} />
        </div>
    )
    
}

export default DataCard;