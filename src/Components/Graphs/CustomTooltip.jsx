import {formatDate} from '../../Utils/Formatters/formatDate'
import { averageScoreAsPercentage } from '../../Utils/Calculations/calculateAverageScore';
import styles from './CustomTooltip.module.css'

function CustomTooltip ({ active, payload }) {

    if (active) {
    let response = payload[0].payload
    let tooltipScore = response.average_score > 2.5 ? `${styles['positive-tooltip-score']}` : `${styles['negative-tooltip-score']}`;

    return (
        <div className={styles['tooltip-container']}>
            <div className={styles['tooltip-title-section']}>
            <h1 className={styles['tooltip-title']}>{response.name}</h1>
            <p className={styles['tooltip-date']}>{formatDate(response.created_at)}</p>
            </div>
            <div className={styles['tooltip-score-section']}>
                    <p className={styles['satisfaction-title']}>Satisfaction Score</p>
                    <p className={tooltipScore}>{averageScoreAsPercentage(response.average_score)}%</p>
            </div>
            <div className={styles['tooltip-extra-info']}>
                <p className={styles['tooltip-assessment-type']}>{response.assessment_type}</p>
                <p className={styles['tooltip-clinician']}>
                    {response.assessment_type == 'physiotherapy' ? `${response.clinicians.physiotherapist ? response.clinicians.physiotherapist : ''}` : `${response.clinicians.doctor ? response.clinicians.doctor : ''} ${ response.clinicians.physiologist ? '&' : ''} ${response.clinicians.physiologist ? response.clinicians.physiologist : ''}`}
                </p>            
            </div>
        </div>
    ) 
}}

function CustomMonthlyTooltip ({label, payload, active}) {
    if (active) {
    let item= payload[0].payload;
    return (
        <div className={styles['tooltip-container']}>
            <h1>{label}</h1>
            <div className={styles['metric-section']}>
                <p className={styles['metric-title']}>
                    Total Responses: 
                </p>
                <span className={styles['metric-data']}>
                    {item.numberOfResponses}
                </span>
            </div>
            <div className={styles['metric-section']}>
                <p className={styles['metric-title']}>
                    Positive Responses: </p>
                <span className={styles['metric-data']}>
                    {item.positivePercentage}
                    %
                </span>
            </div>
            <div className={styles['metric-section']}>
                <p className={styles['metric-title']}>
                    Negative Responses: </p>
                <span className={styles['metric-data']}>
                    {item.negativePercentage}
                    %
                </span>
            </div>
        </div>
    )}
}

    export {CustomTooltip, CustomMonthlyTooltip};
