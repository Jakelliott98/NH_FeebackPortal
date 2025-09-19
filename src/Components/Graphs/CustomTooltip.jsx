import {formatDate} from '../../Utils/Formatters/formatDate'
import { averageScoreAsPercentage } from '../../Utils/Calculations/calculateAverageScore';

function CustomTooltip ({ active, payload }) {


    if (active) {
    console.log(payload[0].payload)
    let response = payload[0].payload
    let tooltipScore = response.averageScore > 2.5 ? 'positiveTooltipScore' : 'negativeTooltipScore';
    return (
        <div className='tooltipContainer'>
            <div className='tooltipTitleSection'>
            <h1 className='tooltipTitle'>{response.name}</h1>
            <p className='tooltipDate'>{formatDate(response.timestamp)}</p>
            </div>
            <div className='tooltipScoreSection'>
                    <p className='satisfactionTitle'>Satisfaction Score</p>
                    <p className={tooltipScore}>{averageScoreAsPercentage(response.averageScore)}%</p>
            </div>
            <div className='tooltipExtraInfo'>
                <p className='tooltipAssessmentType'>{response.assessmentType}</p>
                <p className='tooltipClinician'>{response.clinician}</p>
            </div>
        </div>
    ) 
}}

function CustomMonthlyTooltip ({label, payload, active}) {
    if (active) {
    let item= payload[0].payload;
    console.log(item)
    return (
        <div className='tooltipContainer'>
            <h1>{label}</h1>
            <div className='metricSection'><p className='metricTitle'>Total Responses: </p><span className='metricData'>{item.numberOfResponses}</span></div>
            <div className='metricSection'><p className='metricTitle'>Positive Responses: </p><span className='metricData'>{item.positive}%</span></div>
            <div className='metricSection'><p className='metricTitle'>Negative Responses: </p><span className='metricData'>{item.negative}%</span></div>
        </div>
    )}
}

    export {CustomTooltip, CustomMonthlyTooltip};
