import { filterQuestionResponses } from "../../../Utils/Filters/FilterCalcs";
import { useState, useContext, useEffect } from "react";
import resultsContext from "../../../Context/resultsContext";
import PercentageChart from "../PercentageChart";
import styles from './DropdownQuestionComponent.module.css'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)

function DropdownQuestionComponent () {

    const { questions, filteredFeedback } = useContext(resultsContext)
    const [assessmentType, setAssessmentType] = useState('healthAssessment');
    const [currentQuestion, setCurrentQuestion] = useState({index: 0, value: questions});

    let responseValue = filterQuestionResponses(filteredFeedback, currentQuestion.value[currentQuestion.index], assessmentType)

    useEffect(() => {

        let filteredQuestions = questions.filter(item => item.assessment_type.value == assessmentType);
        setCurrentQuestion({index: 0, value: filteredQuestions})

    }, [questions, assessmentType])

    function changeIndex (increment) {
        if (increment) {
        setCurrentQuestion((prev) => {
            let length = prev.value.length - 1;
            let currentIndex = prev.index;
            let nextIndex = currentIndex == length ? 0 : currentIndex + 1;
            return {...prev, index: nextIndex}
        })} else {
            setCurrentQuestion((prev) => {
                let currentIndex = prev.index;
                let nextIndex = currentIndex == 4 ? 0 : currentIndex + 1;
                return {...prev, index: nextIndex}        
            })
    }}
    
    return (
        <div className={`bottom-right ${styles['feedback-card']}`} >
            <h1 className={styles['data-title']}>Question Results</h1>
            <div className={styles['toggle-container']} >
                <button 
                    onClick={() => {setAssessmentType('physiotherapy')}} 
                    className={styles['health-assessment-button']}
                    style={{
                        backgroundColor: assessmentType == 'physiotherapy' ? '#7CDF7C' : 'lightgray',
                        color: assessmentType == 'physiotherapy' ? 'white' : 'black',
                    }}
                >
                    Physiotherapy
                </button>
                <button 
                    onClick={() => {setAssessmentType('healthAssessment')}}
                    className={styles['physiotherapy-button']}
                    style={{
                        backgroundColor: assessmentType == 'healthAssessment' ? '#7CDF7C' : 'lightgray',
                        color: assessmentType == 'healthAssessment' ? 'white' : 'black',
                    }}
                >
                    Health Assessments
                </button>
            </div>
            <div className={styles['question-container']}>
                <FontAwesomeIcon className={styles['icon-arrow']} icon="fa-solid fa-arrow-left" onClick={() => {changeIndex(false)}}/>
                <div className={styles['pie-chart-container']}>
                    <PercentageChart percentage={responseValue} />
                    <p className={styles['question-title']}>
                        {currentQuestion.value[currentQuestion.index].question}
                    </p>
                </div>
                <FontAwesomeIcon className={styles['icon-arrow']} icon="fa-solid fa-arrow-right" onClick={() => {changeIndex(true)}}/>
            </div>
        </div>
    )

}

export default DropdownQuestionComponent;