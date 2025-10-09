import styles from './EllipsisMenu.module.css'
import { useState } from 'react'

function EllipsisMenu ({ deleteClinician, id }) {

    return (
        <div>
            <p onClick={() => {deleteClinician(id)}}>
                Delete
            </p>
        </div>
    )
}

function QuestionsEllipsisMenu ({ deleteQuestion, editQuestion, item }) {

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


export {EllipsisMenu, QuestionsEllipsisMenu};