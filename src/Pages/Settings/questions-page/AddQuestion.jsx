import { useState } from "react"
import styles from './QuestionsPage.module.css'
import Select from 'react-select'


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


export default AddQuestion;