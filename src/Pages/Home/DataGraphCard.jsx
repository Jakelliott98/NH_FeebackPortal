import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Rectangle } from 'recharts';
import { negativeResponse, positiveResponse, monthlyResponse } from '../../DataCalculations/graphData';
import { useContext } from 'react';
import resultsContext from '../../Context/resultsContext';
import { formatDate } from '../../DataCalculations/formatDate';

function DataGraphCard ({results, selectedChart}) {

    let { filteredFeedback } = useContext(resultsContext)

    function findTooltipClient (label) {
        let item =  filteredFeedback.filter(item => item.id === label)
        return item;
    }

    function CustomTooltip ({ label, active }) {
        if (active) {
        let item = findTooltipClient(label)
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

    const responseChart = (
        <ResponsiveContainer width="100%"height="100%" >
            <LineChart data={results} >
                <Tooltip content={CustomTooltip}/>
                <YAxis domain={[0, 6]}/>
                <XAxis dataKey="id" padding={{ left: 30, right: 30 }} hide={true}/>
                <Line dataKey="averageScore" fill="#7CDF7C" stroke='#7CDF7C' activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );

    // CHANGE TOOLTIP TO PERCENTAGE
    const averageChart = (
        <ResponsiveContainer width="100%"height="100%" >
            <BarChart data={monthlyResponse}>
                <Tooltip content={CustomMonthlyTooltip}/>
                 <Bar dataKey="numberOfResponses" fill="#7CDF7C" activeBar={<Rectangle fill="#00a200" />}/>
                 <XAxis dataKey='month'/>
                 <YAxis dataKey='numberOfResponses'/>
            </BarChart>
        </ResponsiveContainer>
    )

    const postiveResponsesChart = (
        <ResponsiveContainer width="100%"height="100%" >
            <BarChart data={positiveResponse}>
                <Tooltip content={CustomMonthlyTooltip}/>
                <Bar dataKey="data" fill="#7CDF7C" activeBar={<Rectangle fill="#00a200" />}/>
                <XAxis dataKey='month' />
                <YAxis />
            </BarChart>
        </ResponsiveContainer>
    )

    const negativeResponsesChart = (
        <ResponsiveContainer width="100%"height="100%" >
            <BarChart data={negativeResponse}>
                <Tooltip content={CustomMonthlyTooltip}/>
                <Bar dataKey="data" fill="#7CDF7C" activeBar={<Rectangle fill="#00a200" />}/>
                <XAxis dataKey='month' />
                <YAxis />
            </BarChart>
        </ResponsiveContainer>
    )

    function selectChart (selectedChart) {

        switch (selectedChart) {

            case 'Average': return averageChart;
            case 'Responses': return responseChart;
            case 'Positive': return postiveResponsesChart;
            case 'Negative': return negativeResponsesChart;
            default: return averageChart;

    }}

    return (
            <div className='graphDiv'>
                {selectChart(selectedChart)}
            </div>
    )
}

export default DataGraphCard;