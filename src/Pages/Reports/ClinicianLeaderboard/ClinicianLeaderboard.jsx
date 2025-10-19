
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
import FilterToggle from '../../../Components/filter-toggle/FilterToggle'

function ClinicianLeaderboard () {

    const { filteredFeedback } = useContext(resultsContext)
    const [clinicianFilter, setClinicianFilter] = useState('average');
    let results = getClinicianReport(filteredFeedback)

    let topFiveClinicians = results.slice(0 , 3)
    let readyResults = clinicianFilter == 'average' ? topFiveClinicians.sort((a, b) => b.average - a.average) : topFiveClinicians.sort((a, b) => b.count - a.count);

    function returnIndexClass (index) {
        return index == 0 ? `${styles['medal-icon']} ${styles['gold']}` : index == 1 ? `${styles['medal-icon']} ${styles['silver']}` : `${styles['medal-icon']} ${styles['bronze']}`;
    }

    const toggleOptions = [
        {
            value: 'average',
            label: 'Top Performers',
        },
        {
            value: 'count',
            label: 'Most Responses',
        }
    ]

    return (
        <div className={`bottom-centre ${styles['feedback-card']}`}>
            <h1 className={styles['data-title']}>Monthly Top Performers</h1>
            <div className={styles['clinician-container']}>
                <div className={styles['filter-container']}>
                    <FilterToggle options={toggleOptions} onSubmit={setClinicianFilter} state={clinicianFilter}/>
                </div>
                <ul className={styles['clinician-leaderboard']}>
                    {readyResults.map((item, index) => {
                        return (
                            <li className={styles['leaderboard-item']} key={item.name}>
                                <div className={styles['clinician-title']}>
                                    <FontAwesomeIcon className={returnIndexClass(index)} icon="fa-solid fa-medal" />
                                    <p>{item.name}</p>
                                </div>
                                <p className={styles['clinician-score']}>
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

export default ClinicianLeaderboard;



/*

<div className={styles['clinician-filter-container']}>
                    <button className={clinicianFilter === 'average' ? `${styles['average-button']} ${styles['active-button']}` : `${styles['average-button']}`} onClick={() => {setClinicianFilter('average')}}>Top Performers</button>
                    <button className={clinicianFilter === 'count' ? `${styles['count-button']} ${styles['active-button']}` : `${styles['count-button']}`} onClick={() => {setClinicianFilter('count')}}>Most Responses</button>
                </div>

                */