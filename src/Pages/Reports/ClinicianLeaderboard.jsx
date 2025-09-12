
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)


function ClinicianLeaderboard ({results, value}) {

    let topFiveClinicians = results.slice(0 , 3)
    let readyResults = value == 'average' ? topFiveClinicians.sort((a, b) => b.average - a.average) : topFiveClinicians.sort((a, b) => b.count - a.count);

    return (
        <div className='bottomCentre feedbackCard'>
            <h1 className='dataTitle'>Monthly Top Performers</h1>
            <ul className='clinicianLeaderboard'>
                {readyResults.map((item) => {
                    return (
                    <li className='leaderboardItem' key={item.name}>
                        <div className='clinicianTitle'>
                            <FontAwesomeIcon className='medalIcon' icon="fa-solid fa-medal" />
                            <p>{item.name}</p>
                        </div>
                        <p className='clinicianScore'>
                            {value === 'average' ? item.average : item.count} 
                            {value === 'average' ? <span className='units'>avg</span> : null}
                        </p>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ClinicianLeaderboard