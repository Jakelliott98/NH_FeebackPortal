import "../../CSS/FeedbackReportPage.css"
import DataGraphCard from "../Home/DataGraphCard";
import { getClinicianReport } from "../../DataCalculations/dataCalculations";
import { useContext, useState } from "react";
import resultsContext from "../../Context/resultsContext";
import { calculateSatisfactionPercentage, filterQuestionResponses } from "../../DataCalculations/dataCalculations";
import { DropdownFilter } from "../../Components/DropdownFilter/DropdownFilter";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


const ScatterGraph = (results, xDataPoint, yDataPoint) => (
        <ScatterChart 
            width={500}
            height={300}
        >
            <CartesianGrid />
                <XAxis type="number" dataKey={`${xDataPoint}`} name="stature"/>
                <YAxis type="number" dataKey={`${yDataPoint}`} name="Results"/>
                <Scatter name="A school" data={results} fill="#8884d8"/>
        </ScatterChart>
    )


function FeedbackReportPage () {

    const { filteredFeedback } = useContext(resultsContext)

    let report = getClinicianReport(filteredFeedback)
    let { positivePercentage } = calculateSatisfactionPercentage(filteredFeedback)

    console.log(filteredFeedback)

    return (
        <div className='reportPageSection'>
            <div className="dataFeedbackSection">
                <div className='topLeft feedbackCard'>
                    <h1>Average Monthly Satisfaction Score</h1>
                    <div className='graphDiv'>
                        <DataGraphCard />
                    </div>
                </div>
                <div className='topRight feedbackCard'>
                    <h1>Monthly Feedback Responses</h1>
                    <div className='graphDiv'>
                    {ScatterGraph(filteredFeedback, 'id', 'averageScore')}
                    </div>                
                </div>
                <SatisfactionCircleGraph positivePercentage={positivePercentage}/> 
                <ClinicianLeaderBoard results={report} value={'average'}/>
                <QuestionsComponent />
            </div>
        </div>
    )
}

export default FeedbackReportPage;

const satisfactionQuestions = ['Satisfied Responses (> 50% Score)', 'Excellent Response (>80% Score)', 'Terrible Response (< 20% Score)']

function SatisfactionCircleGraph ({positivePercentage}) {

    const [activeQuestion, setActiveQuestion] = useState('Satisfied Responses (> 50% Score)')
    const { filteredFeedback } = useContext(resultsContext)

    let results = {
        'Satisfied Responses (> 50% Score)': positivePercentage,
        'Excellent Response (>80% Score)': 34,
        'Terrible Response (< 20% Score)': 12,
    }

    let responseData = results[activeQuestion]

    const changeQuestion = (newQuestion) => {setActiveQuestion(newQuestion)}

    return (
        <div className='bottomLeft feedbackCard'>
            <DropdownFilter dropdownTitle={activeQuestion} onSelect={changeQuestion} dropdownOptions={satisfactionQuestions} isDropdownList={true} currentSelectedOption={activeQuestion} dropdownType={'variable'} />
            <div className='graphDiv'>
                <div className='graph'>
                    <p>{responseData}%</p>
                    <p>Satisfaction</p>
                </div>
            </div>                    
        </div> 
    )
}

function ClinicianLeaderBoard ({results, value}) {

    let topFiveClinicians = results.slice(0 , 5)
    let readyResults = value == 'average' ? topFiveClinicians.sort((a, b) => b.average - a.average) : topFiveClinicians.sort((a, b) => b.count - a.count);

    return (
        <div className='bottomCentre feedbackCard'>
            <h1>Monthly Top Performers</h1>
            <div className='graphDiv'>
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
            </div>
        </div>
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

