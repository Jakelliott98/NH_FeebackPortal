import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { negativeResponse, positiveResponse, monthlyResponse } from '../DataCalculations/graphData';

function DataGraph ({results, selectedChart}) {

    const averageChart = (
        <>
        <p>Average Responses</p>        
        <LineChart width={600} height={300} data={results}>
            <Tooltip />
            <YAxis />            
            <Line dataKey="averageScore" />
        </LineChart>
        </>
    );

    const ResponseChart = (
        <>
        <p>Number of Responses</p>        
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
        <p>Positive Responses</p>        
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
        <p>Negative Responses</p>
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
        case 'averageChart': return averageChart;
        case 'ResponseChart': return ResponseChart;
        case 'postiveResponsesChart': return postiveResponsesChart;
        case 'negativeResponsesChart': return negativeResponsesChart;
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