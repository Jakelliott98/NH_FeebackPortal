
import { filterQuestionResponses } from "../../DataCalculations/dataCalculations";
import { useState, useContext } from "react";
import resultsContext from "../../Context/resultsContext";
import { DropdownFilter } from "../../Components/DropdownFilter/DropdownFilter";

const questions = ['q1', 'q2', 'q3', 'q4', 'q5'];

function DropdownQuestionComponent () {

    const [activeQuestion, setActiveQuestion] = useState('q1')
    const { filteredFeedback } = useContext(resultsContext)

    let questionAverage = filterQuestionResponses(filteredFeedback, activeQuestion)

    const changeQuestion = (newQuestion) => {setActiveQuestion(newQuestion)}

    return (
                <div className='bottomRight feedbackCard'>
                    <DropdownFilter className='dataTitle' dropdownTitle={activeQuestion} onSelect={changeQuestion} dropdownOptions={questions} isDropdownList={true} currentSelectedOption={activeQuestion} dropdownType={'variable'} />
                    <p>Write out the question here...</p>
                    <div className='dataContainerFeedback'>
                        <div className='graph'>
                            <p>{questionAverage}%</p>
                            <p>Satisfaction</p>
                        </div>
                    </div>
                </div>
    )

}

export default DropdownQuestionComponent;