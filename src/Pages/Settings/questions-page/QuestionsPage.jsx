import { useState } from 'react'
import supabase from '../../../Utils/Data/fetchAPIData'
import QuestionCard from './QuestionCard'
import AddQuestion from './AddQuestion'
import styles from './QuestionsPage.module.css'

function QuestionsPage ({ questions }) {

    const [isAddOpen, setIsAddOpen] = useState(false)
    const [assessmentType, setAssessmentType] = useState('healthAssessment')

    async function addQuestion (question, type) {
        const { data, error } = await supabase
        .from('Feedback_Form_Questions')
        .insert([
            { question: question, type: type, assessment_type: assessmentType, id: Date.now() + (Math.floor(Math.random() * 100))},
        ])
        .select()

        if (error) {
            console.log('Error thrown when trying to add question')
        } else {
            console.log('Question added:', data)
        }
    }

    async function deleteQuestion (id) {
        const { error } = await supabase
        .from('Feedback_Form_Questions')
        .delete()
        .eq('id', id)

        if (error) {
            console.log('Error deleting question id:', id)
        } else {
            console.log('Question deleted id:', id)
        }
    }

    async function editQuestion (id, newQuestion) {
        const { data, error } = await supabase
        .from('Feedback_Form_Questions')
        .update({ question: newQuestion })
        .eq('id', id)
        .select()

        if (error) {
            console.log('Error editing question. id:', id)
        } else {
            console.log('Question has been edited. New Question:', data)
        }
    }

    function addNewQuestion (question, type) {
        addQuestion(question, type)
        setIsAddOpen(prev => !prev)
    }

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
                                <QuestionCard item={item} key={item.id} deleteQuestion={deleteQuestion} editQuestion={editQuestion}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}



export default QuestionsPage;