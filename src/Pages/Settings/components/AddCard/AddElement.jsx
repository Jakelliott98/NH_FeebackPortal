import styles from './AddElement.module.css'
import Select from "react-select";

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)

function AddElement ({ stateTitle, buttonSelectTitle, clinicianInput, title, onClose, titlesSelect, stateHolder, mainSelect, onChange, addElement }) {

    let clinicianAdd = (
        <div>
            <p>What is clinicians name?</p>
            <div className={styles['input-section']}>
                <Select 
                    options={titlesSelect} 
                    onChange={(e) => {onChange((prev) => {return {...prev, title: e.value}})}}
                />
                <input 
                    className={styles['clinician-input']} 
                    placeholder='Clinicians Full Name' 
                    value={stateHolder.name}
                    onChange={(e) => {onChange((prev) => {return {...prev, name: e.target.value}})}}
                />
            </div>
        </div>
    )

    let questionAdd = (
        <div >
            <p>Add a question title</p>
            <textarea 
                value={stateHolder.question} 
                onChange={(e) => {onChange((prev) => {return {...prev, question: e.target.value}})}}
                placeholder='Add your question' 
                className={styles['question-textarea']}
            />
        </div>
    )

    return (
        <div className={styles['add-element-container']}>
            <FontAwesomeIcon className={styles['close-button']} icon="fa-solid fa-xmark" onClick={() => {onClose(false)}}/>
            <h1>{title}</h1>
            <div>
                <p>{buttonSelectTitle}</p>
                <div className={styles['button-span']}>
                    {mainSelect.map((item) => {
                        return (
                            <button 
                                className={`${styles['select-buttons']} ${stateHolder[stateTitle] == item.value && styles['active-select-button']}`} 
                                onClick={() => {onChange((prev) => {return {...prev, [stateTitle]: item.value}})}}
                            > 
                                {item.label} 
                            </button>
                        )
                    })}
                </div>
            </div>
            { clinicianInput ? clinicianAdd : questionAdd }
            <button className={styles['submit-button']} onClick={() => {addElement(stateHolder.name, stateHolder.role)}}>
                <FontAwesomeIcon icon="fa-solid fa-plus" />
                Add
            </button>
        </div>
    )

}

export default AddElement;