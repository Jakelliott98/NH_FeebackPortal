
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)
import { useState } from 'react'


function ClinicianLeaderboard ({ results }) {

    const [clinicianFilter, setClinicianFilter] = useState('average');


    let topFiveClinicians = results.slice(0 , 3)
    let readyResults = clinicianFilter == 'average' ? topFiveClinicians.sort((a, b) => b.average - a.average) : topFiveClinicians.sort((a, b) => b.count - a.count);

    function returnIndexClass (index) {
        return index == 0 ? 'medalIcon gold' : index == 1 ? 'medalIcon silver' : 'medalIcon bronze';
    }

    return (
        <div className='bottomCentre feedbackCard'>
            <h1 className='dataTitle'>Monthly Top Performers</h1>
            <div className='clinicianFilterContainer'>
                <button className={clinicianFilter === 'average' ? 'averageButton activeButton' : 'averageButton'} onClick={() => {setClinicianFilter('average')}}>Top Performers</button>
                <button className={clinicianFilter === 'count' ? 'countButton activeButton' : 'countButton'} onClick={() => {setClinicianFilter('count')}}>Most Responses</button>
            </div>
            <ul className='clinicianLeaderboard'>
                {readyResults.map((item, index) => {
                    return (
                    <li className='leaderboardItem' key={item.name}>
                        <div className='clinicianTitle'>
                            <FontAwesomeIcon className={returnIndexClass(index)} icon="fa-solid fa-medal" />
                            <p>{item.name}</p>
                        </div>
                        <p className='clinicianScore'>
                            {clinicianFilter === 'average' ? item.average : item.count} 
                            {clinicianFilter === 'average' ? <span className='units'>%</span> : null}
                        </p>
                    </li>
                    )
                })}
            </ul>
            </div>
    )
}

export default ClinicianLeaderboard