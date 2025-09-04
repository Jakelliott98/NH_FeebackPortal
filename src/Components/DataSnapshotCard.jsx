import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

function DataSnapshotCard ({title, data, change, trend, onClick, selectedChart}) {

    let dataTrend = trend === 'positive' ? 'fa-solid fa-arrow-trend-up' : 'fa-solid fa-arrow-trend-down'; 
    let trendClass = `snapshotDataCard ${trend} `
    let activeClass = selectedChart === title ? 'activeDataSnap' : '';

    return (
        <div className={`${activeClass} snapshotCard` } onClick={onClick}>
            <p className='snapshotTitle'>{title}</p>
            <p className='snapshotData'>{data}</p>
            <div className={trendClass}>
                <FontAwesomeIcon className='snapshotDataIcon' icon={dataTrend} />
                <p className='snapshotChange'>{change}</p>
            </div>
        </div>
    )
    
}

export default DataSnapshotCard;