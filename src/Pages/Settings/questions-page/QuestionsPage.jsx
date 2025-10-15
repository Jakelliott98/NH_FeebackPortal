import { useState } from 'react'
import QuestionCard from './QuestionCard'
import AddQuestion from './AddQuestion'
import styles from './QuestionsPage.module.css'
import useFetchDatabase from '../useClinicianFetch'
import databaseFunction from '../databaseFunctions'

function QuestionsPage () {

    const [isAddOpen, setIsAddOpen] = useState(false)
    const [assessmentType, setAssessmentType] = useState('healthAssessment')

    const { insertDataRow, deleteDataRow, editDataRow } = databaseFunction('Feedback_Form_Questions');

    function addNewQuestion (question, type) {
        let addData = { question: question, type: type, assessment_type: assessmentType, id: Date.now() + (Math.floor(Math.random() * 100))}
        insertDataRow(addData)
        setIsAddOpen(prev => !prev)
    }

    function editTheQuestion (id, newQuestion) {
        editDataRow(id, { question: newQuestion })
    } // Edit check this works

    const questions = useFetchDatabase('Feedback_Form_Questions')

    let assessmentClass = assessmentType == 'healthAssessment' ? `${styles['active-assessment']}` : null;
    let physioClass = assessmentType == 'physiotherapy' ? `${styles['active-assessment']}` : null;

    let healthAssessmentQuestions = questions.filter(item => item.assessment_type == 'healthAssessment');
    let physioQuestions = questions.filter(item => item.assessment_type == 'physiotherapy');;
    let currentQuestions = assessmentType == 'healthAssessment' ? healthAssessmentQuestions : physioQuestions;

    return (
        <div className={styles['questions-page-container']}>
            <div className={styles['buttons-container']}>
                <div>
                    <button onClick={() => {setIsAddOpen(prev => !prev)}} className={styles['add-button']}>
                        + Add Question
                    </button>
                    { isAddOpen ? <AddQuestion onSubmit={addNewQuestion} onClose={setIsAddOpen} /> : null }
                </div>
                <div className={styles['assessment-buttons']}>
                    <button className={`${styles['ha-button']} ${assessmentClass}`} onClick={() => {setAssessmentType('healthAssessment')}} >Health Assessments</button>
                    <button className={`${styles['physio-button']} ${physioClass}`} onClick={() => {setAssessmentType('physiotherapy')}} >Physiotherapy</button>
                </div>
            </div>
            <div className={styles['questions-container']}>
                <div className={styles['question-container']}>
                    <p className={styles['questions-title']}>Questions</p>
                </div>
                <div className={styles['questions-section']}>
                    {
                        currentQuestions.map((item) => {
                            return (
                                <QuestionCard item={item} key={item.id} deleteQuestion={deleteDataRow} editQuestion={editTheQuestion}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}



export default QuestionsPage;