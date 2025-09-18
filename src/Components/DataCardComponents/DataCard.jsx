import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
import TrendIcon from './TrendIcon'
import InfoIcon from './InfoIcon'

import { useState } from 'react'

function DataCard ({title, data, change, trend, onClick, selectedChart, icon, text, colour}) {

    let activeClass = selectedChart === title ? 'activeDataSnap' : '';
    let [descriptionHidden, setDescriptionHidden] = useState(true)
    let hiddenDescription =  descriptionHidden ? 'cardDefinition' : 'cardDefinition showDescription';

    return (
        <div className={`${activeClass} snapshotCard` } onClick={onClick}>
            <InfoIcon />
            <div className='iconContainer' style={{backgroundColor: colour}}><FontAwesomeIcon icon={icon} /></div>
            <p className='snapshotData'>{data}</p>
            <p className='snapshotTitle'>{title}</p>
            <TrendIcon change={change} trend={trend} setDescriptionHidden={setDescriptionHidden}/>
            <p className={hiddenDescription}>{text}</p>
        </div>
    )
    
}

export default DataCard;

// i Icon for information
// trend icon / component
// 