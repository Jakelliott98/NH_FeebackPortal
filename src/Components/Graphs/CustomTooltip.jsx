import {formatDate} from '../../Utils/Formatters/formatDate'
import { averageScoreAsPercentage } from '../../Utils/Calculations/calculateAverageScore';

function CustomTooltip ({ active, payload }) {

    if (active) {
    let response = payload[0].payload
    let tooltipScore = response.average_score > 2.5 ? 'positiveTooltipScore' : 'negativeTooltipScore';
    return (
        <div className='tooltipContainer'>
            <div className='tooltipTitleSection'>
            <h1 className='tooltipTitle'>{response.name}</h1>
            <p className='tooltipDate'>{formatDate(response.created_at)}</p>
            </div>
            <div className='tooltipScoreSection'>
                    <p className='satisfactionTitle'>Satisfaction Score</p>
                    <p className={tooltipScore}>{averageScoreAsPercentage(response.average_score)}%</p>
            </div>
            <div className='tooltipExtraInfo'>
                <p className='tooltipAssessmentType'>{response.assessment_type}</p>
                <p className='tooltipClinician'>{response.clinicians.doctor ? `${response.clinicians.doctor} & ${response.clinicians.physiologist}` : response.clinicians.physiotherapist}</p>
            </div>
        </div>
    ) 
}}

function CustomMonthlyTooltip ({label, payload, active}) {
    if (active) {
    let item= payload[0].payload;
    return (
        <div className='tooltipContainer'>
            <h1>{label}</h1>
            <div className='metricSection'><p className='metricTitle'>Total Responses: </p><span className='metricData'>{item.average_score}</span></div>
            <div className='metricSection'><p className='metricTitle'>Positive Responses: </p><span className='metricData'>{item.positivePercentage}%</span></div>
            <div className='metricSection'><p className='metricTitle'>Negative Responses: </p><span className='metricData'>{item.negativePercentage}%</span></div>
        </div>
    )}
}

    export {CustomTooltip, CustomMonthlyTooltip};
