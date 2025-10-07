
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)
import { useContext, useState } from 'react'
import { getClinicianReport } from '../../../Utils/Helpers/dataCalculations'
import resultsContext from '../../../Context/resultsContext'
import styles from './ClinicianLeaderboard.module.css'

function ClinicianLeaderboard () {

    const { filteredFeedback } = useContext(resultsContext)
    const [clinicianFilter, setClinicianFilter] = useState('average');
    let results = getClinicianReport(filteredFeedback)

    let topFiveClinicians = results.slice(0 , 3)
    let readyResults = clinicianFilter == 'average' ? topFiveClinicians.sort((a, b) => b.average - a.average) : topFiveClinicians.sort((a, b) => b.count - a.count);

    function returnIndexClass (index) {
        return index == 0 ? `${styles['medalIcon']} ${styles['gold']}` : index == 1 ? `${styles['medalIcon']} ${styles['silver']}` : `${styles['medalIcon']} ${styles['bronze']}`;
    }

    return (
        <div className={`bottomCentre feedbackCard`}>
            <h1 className={styles['dataTitle']}>Monthly Top Performers</h1>
            <div className={styles['clinicianContainer']}>
            <div className={styles['clinicianFilterContainer']}>
                <button className={clinicianFilter === 'average' ? `${styles['averageButton']} ${styles['activeButton']}` : `${styles['averageButton']}`} onClick={() => {setClinicianFilter('average')}}>Top Performers</button>
                <button className={clinicianFilter === 'count' ? `${styles['countButton']} ${styles['activeButton']}` : `${styles['countButton']}`} onClick={() => {setClinicianFilter('count')}}>Most Responses</button>
            </div>
            <ul className={styles['clinicianLeaderboard']}>
                {readyResults.map((item, index) => {
                    return (
                    <li className={styles['leaderboardItem']} key={item.name}>
                        <div className='clinicianTitle'>
                            <FontAwesomeIcon className={returnIndexClass(index)} icon="fa-solid fa-medal" />
                            <p>{item.name}</p>
                        </div>
                        <p className={styles['clinicianScore']}>
                            {clinicianFilter === 'average' ? item.average : item.count} 
                            {clinicianFilter === 'average' ? <span className={styles['units']}>%</span> : null}
                        </p>
                    </li>
                    )
                })}
            </ul>
            </div>
        </div>
    )
}

export default ClinicianLeaderboard