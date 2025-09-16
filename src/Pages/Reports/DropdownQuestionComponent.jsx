
import { filterQuestionResponses } from "../../DataCalculations/dataCalculations";
import { useState, useContext } from "react";
import resultsContext from "../../Context/resultsContext";
import { DropdownFilter } from "../../Components/DropdownFilter/DropdownFilter";

const questions = ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'];

const questions1 = [
    {
        number: 'q1',
        title: 'Question 1',
        text: 'How would you rate the friendliness and helpfulness of the doctor?',
    },
        {
        number: 'q2',
        title: 'Question 2',
        text: 'To what extent did you have confidence and trust in the doctor?',
    },
        {
        number: 'q3',
        title: 'Question 3',
        text: 'When being examined was your privacy and dignity respected?',
    },
        {
        number: 'q4',
        title: 'Question 4',
        text: 'How clear were the answers to your questions or concerns?',
    },
        {
        number: 'q5',
        title: 'Question 5',
        text: 'Would you recommend this doctor to your family and friends and to what extent?',
    },
]



function DropdownQuestionComponent () {

    const [activeQuestion, setActiveQuestion] = useState({number:'q1', title: 'Question 1', text: 'How would you rate the friendliness and helpfulness of the doctor?'});

    const { filteredFeedback } = useContext(resultsContext)

    let questionAverage = filterQuestionResponses(filteredFeedback, activeQuestion.number)

    const changeQuestion = (newQuestion) => {
        let newQuestionObject = questions1.filter(item => item.title == newQuestion);
        let object = newQuestionObject[0];
        setActiveQuestion(object)
    }

    return (
                <div className='bottomRight feedbackCard' >
                    <DropdownFilter className='dataTitle' cssClass='titleFilter' dropdownTitle={activeQuestion.title} onSelect={changeQuestion} dropdownOptions={questions} isDropdownList={true} currentSelectedOption={activeQuestion} dropdownType={'variable'} />
                    <div className='dataContainerFeedback'>
                        <div className='graph'>
                            <p className='circleGraphPercent'>{questionAverage}%</p>
                            <p className='circleGraphText'>Satisfaction</p>
                        </div>
                    </div>
                    <p className='questionTitle'>{activeQuestion.text}</p>
                </div>
    )

}

export default DropdownQuestionComponent;