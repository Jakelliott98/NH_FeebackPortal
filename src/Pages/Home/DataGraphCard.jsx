import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Rectangle } from 'recharts';
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
                <Tooltip />
                 <Bar dataKey="numberOfResponses" fill="#7CDF7C" activeBar={<Rectangle fill="#00a200" />}/>
                 <XAxis dataKey='month'/>
                 <YAxis dataKey='numberOfResponses'/>
            </BarChart>
        </ResponsiveContainer>
    )

    const postiveResponsesChart = (
        <ResponsiveContainer width="100%"height="100%" >
            <BarChart data={positiveResponse}>
                    <Tooltip />
                    <Bar dataKey="data" fill="#7CDF7C" activeBar={<Rectangle fill="#00a200" />}/>
                    <XAxis dataKey='month' />
                    <YAxis />
            </BarChart>
        </ResponsiveContainer>
    )

    const negativeResponsesChart = (
        <ResponsiveContainer width="100%"height="100%" >
            <BarChart data={negativeResponse}>
                <Tooltip />
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