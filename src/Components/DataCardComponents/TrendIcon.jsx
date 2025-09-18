import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

function TrendIcon ({trend, change, setDescriptionHidden}) {

    let trendIcon = trend === 'positive' ? 'fa-solid fa-arrow-trend-up' : 'fa-solid fa-arrow-trend-down'; 
    let trendClass = `snapshotDataCard ${trend} `

    return (
        <div className={trendClass}>
            <FontAwesomeIcon onMouseEnter={() => {setDescriptionHidden(prev => !prev)}} className='snapshotDataIcon' icon={trendIcon} />
            <p className='snapshotChange'>{change}%</p>
        </div>
    )
}

export default TrendIcon;