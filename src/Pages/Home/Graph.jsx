import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { negativeResponse, positiveResponse, monthlyResponse } from '../../DataCalculations/graphData';

function DataGraph ({results, selectedChart}) {

    const responseChart = (
        <>
        <LineChart width={600} height={300} data={results}>
            <Tooltip />
            <YAxis />            
            <Line dataKey="averageScore" />
        </LineChart>
        </>
    );

    const averageChart = (
        <>
        <LineChart width={600} height={300} data={monthlyResponse}>
            <XAxis dataKey="month" />
            <Tooltip />
            <YAxis />            
            <Line dataKey="numberOfResponses" />
        </LineChart>
        </>
    )

    const postiveResponsesChart = (
        <>
        <LineChart width={600} height={300} data={positiveResponse}>
            <XAxis dataKey="month" />
            <Tooltip />
            <YAxis />
            <Line dataKey="data" />
        </LineChart>
        </>
    )

    const negativeResponsesChart = (
        <>
        <LineChart width={600} height={300} data={negativeResponse}>
            <XAxis dataKey="month" />
            <Tooltip />
            <YAxis />
            <Line dataKey="data" />
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
    }
}

    return (
            <div className='graphDiv'>
                {selectChart()}
            </div>
    )
}

export default DataGraph;