import {formatDate} from '../../Utils/Formatters/formatDate'
import { averageScoreAsPercentage } from '../../Utils/Calculations/calculateAverageScore';
import style from './CustomTooltip.module.css'

function CustomTooltip ({ active, payload }) {

    if (active) {
    let response = payload[0].payload
    let tooltipScore = response.average_score > 2.5 ? `${style['positive-tooltip-score']}` : `${style['negative-tooltip-score']}`;

    return (
        <div className={style['tooltip-container']}>
            <div className={style['tooltip-title-section']}>
            <h1 className={style['tooltip-title']}>{response.name}</h1>
            <p className={style['tooltip-date']}>{formatDate(response.created_at)}</p>
            </div>
            <div className={style['tooltip-score-section']}>
                    <p className={style['satisfaction-title']}>Satisfaction Score</p>
                    <p className={tooltipScore}>{averageScoreAsPercentage(response.average_score)}%</p>
            </div>
            <div className={style['tooltip-extra-info']}>
                <p className={style['tooltip-assessment-type']}>{response.assessment_type}</p>
                <p className={style['tooltip-clinician']}>{response.clinicians.doctor ? `${response.clinicians.doctor} & ${response.clinicians.physiologist}` : response.clinicians.physiotherapist}</p>
            </div>
        </div>
    ) 
}}

function CustomMonthlyTooltip ({label, payload, active}) {
    if (active) {
    let item= payload[0].payload;
    return (
        <div className={style['tooltip-container']}>
            <h1>{label}</h1>
            <div className={style['metric-section']}>
                <p className={style['metric-title']}>
                    Total Responses: 
                </p>
                <span className={style['metric-data']}>
                    {item.numberOfResponses}
                </span>
            </div>
            <div className={style['metric-section']}>
                <p className={style['metric-title']}>
                    Positive Responses: </p>
                <span className={style['metric-data']}>
                    {item.positivePercentage}
                    %
                </span>
            </div>
            <div className={style['metric-section']}>
                <p className={style['metric-title']}>
                    Negative Responses: </p>
                <span className={style['metric-data']}>
                    {item.negativePercentage}
                    %
                </span>
            </div>
        </div>
    )}
}

    export {CustomTooltip, CustomMonthlyTooltip};
