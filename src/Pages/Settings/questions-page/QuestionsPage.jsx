import styles from './QuestionsPage.module.css'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)

function QuestionsPage ({ questions }) {
    return (
        <div className={styles['questions-page-container']}>
            <div className={styles['buttons-container']}>
                <button className={styles['add-button']}>
                    + Add Question
                </button>
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
                                <QuestionContainer item={item}/>
                            )
                        })
                    }
                </div>
            </div>
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