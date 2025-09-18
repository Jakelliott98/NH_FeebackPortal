import {formatDate} from '../../Utils/Formatters/formatDate'
import { useContext } from 'react';
import resultsContext from '../../Context/resultsContext';

function CustomTooltip ({ label, active }) {

    let { filteredFeedback } = useContext(resultsContext)

    if (active) {
    let item = filteredFeedback.filter(item => item.id === label);
    let readyItem = item[0];
    let tooltipScore = readyItem.averageScore > 2.5 ? 'positiveTooltipScore' : 'negativeTooltipScore';
    return (
        <div className='tooltipContainer'>
            <div className='tooltipTitleSection'>
            <h1 className='tooltipTitle'>{readyItem.name}</h1>
            <p className='tooltipDate'>{formatDate(readyItem.timestamp)}</p>
            </div>
            <div className='tooltipScoreSection'>
                    <p className='satisfactionTitle'>Satisfaction Score</p>
                    <p className={tooltipScore}>75%</p>
            </div>
            <div className='tooltipExtraInfo'>
                <p className='tooltipAssessmentType'>{readyItem.assessmentType}</p>
                <p className='tooltipClinician'>{readyItem.clinician}</p>
            </div>
        </div>
    ) 
}}

function CustomMonthlyTooltip ({label}) {
    return (
        <div className='tooltipContainer'>
            <h1>{label}</h1>
            <div className='metricSection'><p className='metricTitle'>Total Responses: </p><span className='metricData'>50</span></div>
            <div className='metricSection'><p className='metricTitle'>Positive Responses: </p><span className='metricData'>50%</span></div>
            <div className='metricSection'><p className='metricTitle'>Negative Responses: </p><span className='metricData'>50%</span></div>
        </div>
    )
}

    export {CustomTooltip, CustomMonthlyTooltip};
