import "./FeedbackReportPage.css"
import DataGraphCard from "../Home/home-graph-section/DataGraphCard";
import ClinicianLeaderboard from "./ClinicianLeaderboard/ClinicianLeaderboard";
import DropdownQuestionComponent from "./DropdownQuestionComponent/DropdownQuestionComponent";
import SatisfactionCircleGraph from "./SatisfactionCircleGraphs/SatisfactionCircleGraph";
import ScatterGraph from "./FeedbackScatterGraph";
import styles from './FeedbackReportPage.module.css'

function FeedbackReportPage () {

    return (
        <div className={styles['report-page-section']}>
            <div className={styles["data-feedback-section"]}>
                <div className={`top-left ${styles['feedback-card']}`}>
                    <h1 className={styles['data-title']}>Average Monthly Satisfaction Score</h1>
                    <div className={styles['data-container-feedback']}>
                        <DataGraphCard />
                    </div>
                </div>
                <div className={`top-right ${styles['feedback-card']}`}>
                    <h1 className={styles['data-title']}>Monthly Feedback Responses</h1>
                    <div className={styles['data-container-feedback']}>
                        <ScatterGraph />
                    </div>                
                </div>
                <SatisfactionCircleGraph /> 
                <ClinicianLeaderboard />
                <DropdownQuestionComponent />
            </div>
        </div>
    )
}

export default FeedbackReportPage;
