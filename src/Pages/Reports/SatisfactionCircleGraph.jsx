import { useState, useContext } from "react"
import resultsContext from "../../Context/resultsContext"
import { DropdownFilter } from "../../Components/DropdownFilter/DropdownFilter"
import PercentageChart from "./PercentageChart"

const satisfactionQuestions = ['Satisfied Responses (> 50% Score)', 'Excellent Response (>80% Score)', 'Terrible Response (< 20% Score)']

function SatisfactionCircleGraph () {

    const [activeQuestion, setActiveQuestion] = useState('Satisfied Responses (> 50% Score)')
    const { filteredFeedback } = useContext(resultsContext) // Going to be used for getting the results

    let results = {
        'Satisfied Responses (> 50% Score)': Math.round(((filteredFeedback.filter(item => item.average_score > 2.5)).length / filteredFeedback.length) * 100),
        'Excellent Response (>80% Score)': Math.round(((filteredFeedback.filter(item => item.average_score >= 4)).length / filteredFeedback.length) * 100),
        'Terrible Response (< 20% Score)': Math.round(((filteredFeedback.filter(item => item.average_score === 1)).length / filteredFeedback.length) * 100),
    }

    let responseData = results[activeQuestion]

    const changeQuestion = (newQuestion) => {setActiveQuestion(newQuestion)}

    return (
        <div className='bottomLeft feedbackCard'>
            <DropdownFilter className='dataTitle' cssClass='titleFilter' dropdownTitle={activeQuestion} onSelect={changeQuestion} dropdownOptions={satisfactionQuestions} isDropdownList={true} currentSelectedOption={activeQuestion} dropdownType={'variable'} />
            <div className='pieChartContainer'>
            <PercentageChart percentage={responseData}/>   
            <p className='questionTitle'>Percentage of clients who were satisfied with their assessments</p>       
            </div>
        </div> 
    )
}

export default SatisfactionCircleGraph;