import supabase from "../../Utils/Data/fetchAPIData"
import { useState, useEffect } from "react"
import CliniciansPage from "./clinicians-page/CliniciansPage"
import QuestionsPage from "./questions-page/QuestionsPage"
import styles from './SettingsPage.module.css'

function SettingsPage () {

    const [clinicians, setClinicians] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [currentPage, setCurrentPage] = useState('clinicians');

    useEffect(() => {
        async function getQuestion () {
            let { data: Feedback_Form_Questions, error } = await supabase
            .from('Feedback_Form_Questions')
            .select('*')

            if (error) {
                console.log('Error fetching questions')
            } else {
                setQuestions(Feedback_Form_Questions)
            }
        }
        getQuestion()
    }, [])

    useEffect(() => {
        async function getClinicians () {
            let { data: Clinicians, error } = await supabase
            .from('Clinicians')
            .select('*')

            if (Clinicians) {
                setClinicians(Clinicians);
            } else {
                console.log(error)
            }
        }
        getClinicians();
    }, [])

    let cliniciansPage = (
        <CliniciansPage clinicians={clinicians} />
    )

    let questionsPage = (
        <QuestionsPage questions={questions}/>
    )
    
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
                {currentPage == 'clinicians' ? cliniciansPage : currentPage == 'questions' ? questionsPage : null}
            </div>
        </div>
    )

}

export default SettingsPage;