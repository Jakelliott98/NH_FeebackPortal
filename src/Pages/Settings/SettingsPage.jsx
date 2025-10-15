import { useState } from "react"
import CliniciansPage from "./clinicians-page/CliniciansPage"
import QuestionsPage from "./questions-page/QuestionsPage"
import styles from './SettingsPage.module.css'

function SettingsPage () {

    const [currentPage, setCurrentPage] = useState('clinicians');
    
    let activeClinicians = currentPage == 'clinicians' ? `${styles['active-tag']}` : null;
    let activeQuestions = currentPage == 'questions' ? `${styles['active-tag']}` : null;

    return (
        <div className={styles['settings-page']}>
            <div className={styles['setting-header']}>
                <p 
                    className={`${styles['settings-tag']} ${styles['clinicians-tag']} ${activeClinicians}`}
                    onClick={() => {setCurrentPage('clinicians')}}
                >
                    Clinicians
                </p>
                <p 
                    className={`${styles['settings-tag']} ${styles['questions-tag']} ${activeQuestions}`}
                    onClick={() => {setCurrentPage('questions')}}
                >
                    Questions
                </p>
            </div>
            <div className={styles['settings-content-container']}>
                {currentPage == 'clinicians' ? <CliniciansPage /> : currentPage == 'questions' ? <QuestionsPage /> : null}
            </div>
        </div>
    )

}

export default SettingsPage;