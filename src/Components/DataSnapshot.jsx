import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

function DataSnapshot ({title, data, change, trend}) {

    let dataTrend = trend === 'positive' ? 'fa-solid fa-arrow-trend-up' : 'fa-solid fa-arrow-trend-down'; 
    let trendClass = `snapshotDataCard ${trend} `

    return (
        <div className='snapshotCard'>
            <p className='snapshotTitle'>{title}</p>
            <p className='snapshotData'>{data}</p>
            <div className={trendClass}>
                <FontAwesomeIcon className='snapshotDataIcon' icon={dataTrend} />
                <p className='snapshotChange'>{change}</p>
            </div>
        </div>
    )
}

// Add logic that once card is clicked the graph matches the active Card selected for data

export default DataSnapshot;

/* 

Raw data incoming = {
    name: '',
    assessmentType: '',
    Question1: ,
    Question2: ,
    Question3: ,
    Question4: ,
    Question5: ,
    TotalScore: ,
    Comments: '',
}



AverageQuestionResults = [
    {
        Question1: ,
        Question2: ,
        Question3: ,
        Question4: ,
        Question5: ,
    }
]

Average Total Score = (Reducer adding all the result.totalScores / total * 100)
Responses = results.length
Positive Reviews = results.filter(TotalScore > 2.5).length %
Negative Reviews = results.filter(TotalScore < 2.5).length %


let readyData = [
    {
        Question1: 4.5,
        Question2: 3.5,
        Question3: 2.76,
        Question4: 3.76,
        Question5: 4.32,
    }
]

let percentageData = [
    {
        Question1: 90,
        Question2: 70,
        Question3: 53.4,
        Question4: 75.2,
        Question5: 86.4,
        Average: 75.36,
    }
]

Calculations for: Question Average Scores, Total Average Score per Client, Total Average all Clients, Total No. < 2.5, Total No. > 2.5, Total responses

*/