import { useState, useContext } from "react"
import resultsContext from "../../Context/resultsContext"
import { DropdownFilter } from "../../Components/DropdownFilter/DropdownFilter"

const satisfactionQuestions = ['Satisfied Responses (> 50% Score)', 'Excellent Response (>80% Score)', 'Terrible Response (< 20% Score)']

function SatisfactionCircleGraph ({positivePercentage}) {

    const [activeQuestion, setActiveQuestion] = useState('Satisfied Responses (> 50% Score)')
    const { filteredFeedback } = useContext(resultsContext) // Going to be used for getting the results

    let results = {
        'Satisfied Responses (> 50% Score)': positivePercentage,
        'Excellent Response (>80% Score)': 34,
        'Terrible Response (< 20% Score)': 12,
    }

    let responseData = results[activeQuestion]

    const changeQuestion = (newQuestion) => {setActiveQuestion(newQuestion)}

    return (
        <div className='bottomLeft feedbackCard'>
            <DropdownFilter className='dataTitle' cssClass='titleFilter' dropdownTitle={activeQuestion} onSelect={changeQuestion} dropdownOptions={satisfactionQuestions} isDropdownList={true} currentSelectedOption={activeQuestion} dropdownType={'variable'} />
            <div className='dataContainerFeedback'>
                <div className='graph'>
                    <p>{responseData}%</p>
                    <p>Satisfaction</p>
                </div>
            </div>                    
        </div> 
    )
}

export default SatisfactionCircleGraph;