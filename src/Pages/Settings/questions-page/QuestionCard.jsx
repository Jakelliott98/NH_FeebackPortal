import { useState } from "react";
import styles from './QuestionsPage.module.css'
import { EllipsisMenu } from '../components/EllipsisMenu/EllipsisMenu'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)


function QuestionCard ({item, deleteQuestion, editQuestion}) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles['question-items']}>
            <p>{item.question}</p>
            <div className={styles['ellipsis-container']}>
                <FontAwesomeIcon icon="fa-solid fa-ellipsis" onClick={() => {setIsOpen(prev => !prev)}}/>
                { isOpen ? <EllipsisMenu onDelete={deleteQuestion} item={item} onEdit={editQuestion} edit /> : null }
            </div>
        </div>
    )
}

export default QuestionCard;