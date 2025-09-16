import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

import { useState } from 'react'

function DataSnapshotCard ({title, data, change, trend, onClick, selectedChart, icon, text, colour}) {

    let trendIcon = trend === 'positive' ? 'fa-solid fa-arrow-trend-up' : 'fa-solid fa-arrow-trend-down'; 
    let trendClass = `snapshotDataCard ${trend} `
    let activeClass = selectedChart === title ? 'activeDataSnap' : '';
    let [descriptionHidden, setDescriptionHidden] = useState(true)
    let hiddenDescription =  descriptionHidden ? 'cardDefinition' : 'cardDefinition showDescription';

    return (
        <div className={`${activeClass} snapshotCard` } onClick={onClick}>
            <div className='infoIcon'><FontAwesomeIcon icon="fa-solid fa-question" /></div>
            <div className='iconContainer' style={{backgroundColor: colour}}>
                <FontAwesomeIcon icon={icon} />
            </div>
            <p className='snapshotData'>{data}</p>
            <p className='snapshotTitle'>{title}</p>
            <div className={trendClass}>
                <FontAwesomeIcon onmouseenter={() => {setDescriptionHidden(prev => !prev)}} className='snapshotDataIcon' icon={trendIcon} />
                <p className='snapshotChange'>{change}%</p>
            </div>
            <p className={hiddenDescription}>{text}</p>
        </div>
    )
    
}

export default DataSnapshotCard;