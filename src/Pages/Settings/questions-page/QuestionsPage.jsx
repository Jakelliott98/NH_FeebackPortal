import { useState } from 'react'
import QuestionCard from './QuestionCard'
import AddQuestion from './AddQuestion'
import styles from './QuestionsPage.module.css'
import useFetchDatabase from '../../../Hooks/useFetchDatabase'
import databaseFunction from '../../../Utils/databaseFunctions'
import FilterToggle from '../../../Components/filter-toggle/FilterToggle'

function QuestionsPage () {

    const [isAddOpen, setIsAddOpen] = useState(false)
    const [assessmentType, setAssessmentType] = useState('healthAssessment')

    const { deleteDataRow, editDataRow } = databaseFunction('Feedback_Form_Questions');
    const questions = useFetchDatabase('Feedback_Form_Questions')

    function editTheQuestion (id, newQuestion) {
        editDataRow(id, { question: newQuestion })
    } // Edit check this works

    let currentQuestions = assessmentType == 'healthAssessment' ? questions.filter(item => item.assessment_type == 'healthAssessment') : questions.filter(item => item.assessment_type == 'physiotherapy');

    const toggleOptions = [
        {
            value: 'physiotherapy',
            label: 'Physiotherapy',
        },
        {
            value: 'healthAssessment',
            label: 'Health Assessment',        
        }
    ]

    return (
        <div className={styles['questions-page-container']}>
            <div className={styles['buttons-container']}>
                    <button onClick={() => {setIsAddOpen(prev => !prev)}} className={styles['add-button']}>
                        + Add Question
                    </button>
                    { isAddOpen ? <AddQuestion assessmentType={assessmentType} setIsAddOpen={setIsAddOpen} onClose={setIsAddOpen} /> : null }
                    <FilterToggle options={toggleOptions} onSubmit={setAssessmentType} state={assessmentType}/>
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