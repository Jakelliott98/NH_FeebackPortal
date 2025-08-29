import DataSnapshot from '../Components/DataSnapshot'
import { sortDataTrend } from '../DataCalculations/dataCalculations';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { useState } from 'react';

let monthlyResponse = [
    {
    month: 'January',
    numberOfResponses: 34,
    },{
    month: 'February',
    numberOfResponses: 32,
    },{
    month: 'March',
    numberOfResponses: 67,
    }
]

let positiveResponse = [
    {
    month: 'January',
    data: 78,
    },{
    month: 'February',
    data: 43,
    },{
    month: 'March',
    data: 65,
    }
]


let negativeResponse = [
    {
    month: 'January',
    data: 23,
    },{
    month: 'February',
    data: 98,
    },{
    month: 'March',
    data: 76,
    }
]


function DataCard ({results}) {

    let responseNumber = results.length;
    let { averageRating, positivePercentage, negativePercentage } = sortDataTrend(results)
    const [selectedChart, setSelectedChart] = useState('averageChart')

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
        <div>
            <div className="dataSnapshotDiv">
                <DataSnapshot onClick={() => {setSelectedChart('averageChart')}} title={'Reponses'} data={responseNumber} change={'2%'} trend={'positive'}/>
                <DataSnapshot onClick={() => {setSelectedChart('ResponseChart')}} title={'Average'} data={averageRating + '%'} change={'14%'} trend={'negative'}/>
                <DataSnapshot onClick={() => {setSelectedChart('postiveResponsesChart')}} title={'Positive'} data={positivePercentage + '%'} change={'25%'} trend={'positive'}/>
                <DataSnapshot onClick={() => {setSelectedChart('negativeResponsesChart')}} title={'Negative'} data={negativePercentage + '%'} change={'3%'} trend={'negative'}/>
            </div>
            <div className='graphDiv'>
                {selectChart()}
            </div>
        </div>
    )
}

export default DataCard;