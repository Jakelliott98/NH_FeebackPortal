import styles from './QuestionsPage.module.css'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)
import Select from 'react-select'
import { useState } from 'react'
import supabase from '../../../Utils/Data/fetchAPIData'

function QuestionsPage ({ questions }) {

    const [isQuestionAddOpen, setIsQuestionAddOpen] = useState(false)
    
    async function addQuestion (question, type) {
        const { data, error } = await supabase
        .from('Feedback_Form_Questions')
        .insert([
            { question: question, type: type },
        ])
        .select()

        if (error) {
            console.log('Error thrown when trying to add question')
        } else {
            console.log('Question added:', data)
        }
    }

    function addNewQuestion (question, type) {
        addQuestion(question, type)
        setIsQuestionAddOpen(prev => !prev)
    }

    return (
        <div className={styles['questions-page-container']}>
            <div className={styles['buttons-container']}>
                <div>
                    <button onClick={() => {setIsQuestionAddOpen(prev => !prev)}} className={styles['add-button']}>
                        + Add Question
                    </button>
                    { isQuestionAddOpen ? <AddQuestion onSubmit={addNewQuestion} /> : null }
                </div>
                <div className={styles['assessment-buttons']}>
                    <button className={styles['physio-button']}>Physiotherapy</button>
                    <button className={styles['ha-button']}>Health Assessments</button>
                </div>
            </div>
            <div className={styles['questions-container']}>
                <div className={styles['question-container']}>
                    <p className={styles['questions-title']}>Questions</p>
                </div>
                <div className={styles['questions-section']}>
                    {
                        questions.map((item) => {
                            return (
                                <QuestionContainer item={item} key={item.id}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

function AddQuestion ({ onSubmit }) {

    const [newQuestion, setNewQuestion] = useState({
        question: '',
        type: '',
    })

    const questionType = [
        {value: 'rating', label: 'Rating'},
        {value: 'textarea', label: 'Textarea'}
    ]

    return (
        <div className={styles['add-question-section']}>
            <textarea 
                value={newQuestion.question} 
                onChange={(e) => {setNewQuestion((prev) => {return {...prev, question: e.target.value}})}}
                placeholder='Add your question' 
                className={styles['question-textarea']}
            />
            <Select options={questionType} onChange={(e) => {setNewQuestion((prev) => {return {...prev, type: e.value}})}}/>
            <button className={styles['add-question-button']} onClick={() => {onSubmit(newQuestion.question, newQuestion.type)}}>
                + Add
            </button>
        </div>
    )
}

function QuestionContainer ({item}) {
    return (
        <div className={styles['question-items']}>
            <p>{item.question}</p>
                <FontAwesomeIcon className={styles['ellipsis-container']} icon="fa-solid fa-ellipsis" />
        </div>
    )
}

export default QuestionsPage;