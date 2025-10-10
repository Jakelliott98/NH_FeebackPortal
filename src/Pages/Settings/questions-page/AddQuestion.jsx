import { useState } from "react"
import styles from './QuestionsPage.module.css'
import Select from 'react-select'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)

function AddQuestion ({ onSubmit, onClose }) {

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
            <FontAwesomeIcon icon="fa-solid fa-xmark" onClick={() =>{onClose(false)}}/>
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