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
                                <QuestionContainer item={item} key={item.id} deleteQuestion={deleteQuestion} editQuestion={editQuestion}/>
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

function EllipsisMenu ({ deleteQuestion, editQuestion, item }) {

    const [isEditOpen, setIsEditOpen] = useState(false)

    function submitEditQuestion (newQuestion, id) {
        editQuestion(id, newQuestion)
        setIsEditOpen(false)
    }

    return (
        <div className={styles['ellipsis-content']}>
            <p onClick={() => {setIsEditOpen(prev => !prev)}}>
                Edit
            </p>
            <p onClick={() => {deleteQuestion(item.id)}}>
                Delete
            </p>
            { isEditOpen ? <EditBox item={item} submitEditQuestion={submitEditQuestion}/> : null }
        </div>
    )
}

function EditBox ({ item, submitEditQuestion }) {

    const [newQuestion, setNewQuestion] = useState(item.question)

    return (
        <div className={styles['edit-container']}>
            <p>Edit the question</p>
            <textarea value={newQuestion} onChange={(e) => {setNewQuestion(e.target.value)}}/>
            <button onClick={() => {submitEditQuestion(newQuestion, item.id)}} >
                Add new edit
            </button>
        </div>
    )
}

function QuestionContainer ({item, deleteQuestion, editQuestion}) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles['question-items']}>
            <p>{item.question}</p>
            <div className={styles['ellipsis-container']}>
                <FontAwesomeIcon icon="fa-solid fa-ellipsis" onClick={() => {setIsOpen(prev => !prev)}}/>
                { isOpen ? <EllipsisMenu deleteQuestion={deleteQuestion} item={item} editQuestion={editQuestion} /> : null }
            </div>
        </div>
    )
}

export default QuestionsPage;