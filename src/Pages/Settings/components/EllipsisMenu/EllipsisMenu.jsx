import styles from './EllipsisMenu.module.css'
import { useState } from 'react'

function EllipsisMenu ({ onDelete, onEdit, item, edit }) {

    const [isEditOpen, setIsEditOpen] = useState(false)
    const [isDeleteOpen, setIsDeleteOpen] = useState(false)

    function submitEditQuestion (newQuestion, id) {
        onEdit(id, newQuestion)
        setIsEditOpen(false)
    }

    function submitDeleteQuestion (id) {
        onDelete(id)
        setIsDeleteOpen(false)
    }  

    return (
        <div>
            <p onClick={() => {setIsDeleteOpen(prev => !prev)}}> Delete </p>
            { isDeleteOpen ? <DeleteConfirmation item={item} onSubmit={submitDeleteQuestion}/> : null}
            { edit ? <p onClick={() => {setIsEditOpen(prev => !prev)}}> Edit </p> : null }
            { isEditOpen ? <EditBox item={item} onSubmit={submitEditQuestion}/> : null }
        </div>
    )
}

function DeleteConfirmation ({ item, onSubmit }) {

    return (
        <div>
            <p>Are you sure you want to delete?</p>
            <button onClick={() => {onSubmit(item.id)}}>Delete</button>
        </div>
    )
}

function EditBox ({ item, onSubmit }) {

    const [newQuestion, setNewQuestion] = useState(item.question)

    return (
        <div className={styles['edit-container']}>
            <p>Edit the question</p>
            <textarea value={newQuestion} onChange={(e) => {setNewQuestion(e.target.value)}}/>
            <button onClick={() => {onSubmit(newQuestion, item.id)}} >
                Add new edit
            </button>
        </div>
    )
}


export { EllipsisMenu };