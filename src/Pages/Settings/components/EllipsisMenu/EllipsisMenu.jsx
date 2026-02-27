import styles from './EllipsisMenu.module.css'
import { useState } from 'react'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)

function EllipsisMenu ({ onDelete, onEdit, item, edit, onClose }) {

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
        <div className={styles['ellipsis-section']}>
            <p className={styles['ellipsis-tag']} onClick={() => {setIsDeleteOpen(prev => !prev)}}> Delete </p>
            { isDeleteOpen ? <DeleteConfirmation onClose={setIsDeleteOpen} item={item} onSubmit={submitDeleteQuestion}/> : null}
            { edit ? <p className={styles['ellipsis-tag']} onClick={() => {setIsEditOpen(prev => !prev)}}> Edit </p> : null }
            { isEditOpen ? <EditBox onClose={setIsEditOpen} item={item} onSubmit={submitEditQuestion}/> : null }
        </div>
    )
}

function DeleteConfirmation ({ item, onSubmit, onClose }) {

    return (
        <div className={styles['delete-container']}>
            <FontAwesomeIcon className={styles['close-button']}  icon="fa-solid fa-xmark" onClick={() => {onClose(false)}}/>
            <p>Are you sure you want to delete?</p>
            <button className={styles['submit-button']} onClick={() => {onSubmit(item.id)}}>Delete</button>
        </div>
    )
}

function EditBox ({ item, onSubmit, onClose }) {

    const [newQuestion, setNewQuestion] = useState(item.question)

    return (
        <div className={styles['edit-container']}>
            <FontAwesomeIcon className={styles['close-button']}  icon="fa-solid fa-xmark" onClick={() => {onClose(false)}}/>
            <h1>Edit</h1>
            <textarea className={styles['textArea']} value={newQuestion} onChange={(e) => {setNewQuestion(e.target.value)}}/>
            <button className={styles['submit-button']} onClick={() => {onSubmit(newQuestion, item.id)}} >
                Save
            </button>
        </div>
    )
}


export { EllipsisMenu };