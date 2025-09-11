import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { negativeResponse, positiveResponse, monthlyResponse } from '../../DataCalculations/graphData';
import { useContext } from 'react';
import resultsContext from '../../Context/resultsContext';

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
                <p className='tooltipTitle'>{readyItem.name}</p>
                <p className={tooltipScore}>{readyItem.averageScore} Avg</p>
                <div className='tooltipMiniContainer'>
                <p>{readyItem.clinician}</p>
                <p>{readyItem.assessmentType}</p>
                </div>
            </div>
        ) 
    }}

    const responseChart = (
        <>
        <LineChart width={600} height={300} data={results}>
            <Tooltip content={CustomTooltip}/>
            <YAxis domain={[0, 6]}/>
            <XAxis dataKey="id" padding={{ left: 30, right: 30 }} hide={true}/>
            <Line dataKey="averageScore" fill="#00a200"stroke='#00a200' activeDot={{ r: 8 }} />
        </LineChart>
        </>
    );

    const averageChart = (
        <>
        <LineChart width={600} height={300} data={monthlyResponse}>
            <XAxis dataKey="month" padding={{ left: 30, right: 30 }}/>
            <Tooltip/>
            <YAxis />
            <Line dataKey="numberOfResponses" fill="#00a200" stroke='#00a200' activeDot={{ r: 8 }} />
        </LineChart>
        </>
    )

    const postiveResponsesChart = (
        <>
        <LineChart width={600} height={300} data={positiveResponse}>
            <XAxis dataKey="month" padding={{ left: 30, right: 30 }}/>
            <Tooltip />
            <YAxis />
            <Line dataKey="data" fill="#00a200" stroke='#00a200' activeDot={{ r: 8 }} />
        </LineChart>
        </>
    )

    const negativeResponsesChart = (
        <>
        <LineChart width={600} height={300} data={negativeResponse}>
            <XAxis dataKey="month" padding={{ left: 30, right: 30 }}/>
            <Tooltip />
            <YAxis />
            <Line dataKey="data" fill="#00a200" stroke='#00a200' activeDot={{ r: 8 }} />
        </LineChart>
        </>
    )

    function selectChart () {

        switch (selectedChart) {

            case 'Average': return averageChart;
            case 'Reponses': return responseChart;
            case 'Positive': return postiveResponsesChart;
            case 'Negative': return negativeResponsesChart;
            default: return averageChart;

    }}

    return (
            <div className='graphDiv'>
                {selectChart()}
            </div>
    )
}

export default DataGraphCard;