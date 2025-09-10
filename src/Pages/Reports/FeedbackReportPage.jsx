import DataSnapshotCard from "../../Components/DataSnapshotCard"
import "../../CSS/FeedbackReportPage.css"
import DataGraphCard from "../Home/DataGraphCard";
import { getClinicianReport } from "../../DataCalculations/dataCalculations";
import { useContext, useState } from "react";
import resultsContext from "../../Context/resultsContext";
import { calculateSatisfactionPercentage, filterQuestionResponses } from "../../DataCalculations/dataCalculations";
import { DropdownListCard } from "../../Components/DropdownFilter/DropdownFilterComponents";
import { DropdownFilter } from "../../Components/DropdownFilter/DropdownFilter";

function FeedbackReportPage () {

    const { filteredFeedback } = useContext(resultsContext)

    let report = getClinicianReport(filteredFeedback)
    let { positivePercentage } = calculateSatisfactionPercentage(filteredFeedback)

    return (
        <div className='reportPageSection'>
            <div className="dataFeedbackSection">
                <div className='topLeft feedbackCard'>
                    <h1>Average Satisfaction Score</h1>
                    <div className='graphDiv'>
                        <DataGraphCard />
                    </div>
                </div>
                <div className='topRight feedbackCard'>
                    <h1>Average Scores by Assessment Type</h1>
                    <div className='graphDiv'>
                        <DataGraphCard />
                    </div>                
                </div>
                <div className='bottomLeft feedbackCard'>
                    <h1>Satisfied Responses</h1>
                    <div className='graphDiv'>
                        <div className='graph'>
                            <p>{positivePercentage}%</p>
                            <p>Satisfaction</p>
                        </div>
                    </div>                    
                </div>            
                <div className='bottomCentre feedbackCard'>
                    <h1>Monthly Top Performers</h1>
                    <div className='graphDiv'>
                        <ClinicianLeaderBoard results={report} value={'average'}/>
                    </div>
                </div>
                <QuestionsComponent />
            </div>
        </div>
    )
}

export default FeedbackReportPage;

function ClinicianLeaderBoard ({results, value}) {

    let topFiveClinicians = results.slice(0 , 5)
    let readyResults = value == 'average' ? topFiveClinicians.sort((a, b) => b.average - a.average) : topFiveClinicians.sort((a, b) => b.count - a.count);

    return (
        <ul className='clinicianLeaderboard'>
            {readyResults.map((item) => {
                return (
                <li className='leaderboardItem' key={item.name}>
                    <p>{item.name}</p>
                    <p>
                        {value === 'average' ? item.average : item.count} 
                        {value === 'average' ? <span>avg</span> : null}
                    </p>
                </li>
                )
            })}
        </ul>
    )
}

const questions = ['q1', 'q2', 'q3', 'q4', 'q5'];

function QuestionsComponent () {

    const [activeQuestion, setActiveQuestion] = useState('q1')
    const { filteredFeedback } = useContext(resultsContext)

    let questionAverage = filterQuestionResponses(filteredFeedback, activeQuestion)

    const changeQuestion = (newQuestion) => {setActiveQuestion(newQuestion)}

    return (
                <div className='bottomRight feedbackCard'>
                    <DropdownFilter dropdownTitle={activeQuestion} onSelect={changeQuestion} dropdownOptions={questions} isDropdownList={true} currentSelectedOption={activeQuestion} dropdownType={'variable'} />
                    <p>Write out the question here...</p>
                    <div className='graphDiv'>
                        <div className='graph'>
                            <p>{questionAverage}%</p>
                            <p>Satisfaction</p>
                        </div>
                    </div>
                </div>
    )

}

