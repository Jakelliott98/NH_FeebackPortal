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

    const [isEllipsisOpen, setIsEllipsisOpen] = useState(false)

    return (
        <div className={styles['question-items']}>
            <p>{item.question}</p>
            <div className={styles['ellipsis-container']}>
                <div className={styles['ellipsis-wrapper']}>
                    <FontAwesomeIcon className={styles['ellipsis']} icon="fa-solid fa-ellipsis" onClick={() => {setIsEllipsisOpen(prev => !prev)}} />
                    <div className={styles['ellipsis-dropdown']} >
                        { isEllipsisOpen ? <EllipsisMenu onDelete={deleteQuestion} item={item} onEdit={editQuestion} edit onClose={setIsEllipsisOpen}/> : null }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard;