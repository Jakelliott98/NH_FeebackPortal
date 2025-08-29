import DataSnapshot from '../Components/DataSnapshot'
import { sortDataTrend } from '../DataCalculations/dataCalculations';
import { useState } from 'react';
import DataGraph from './Graph';

function DataCard ({results}) {

    let responseNumber = results.length;
    let { averageRating, positivePercentage, negativePercentage } = sortDataTrend(results)
    const [selectedChart, setSelectedChart] = useState('averageChart')





    return (
        <div>
            <div className="dataSnapshotDiv">
                <DataSnapshot onClick={() => {setSelectedChart('averageChart')}} title={'Reponses'} data={responseNumber} change={'2%'} trend={'positive'}/>
                <DataSnapshot onClick={() => {setSelectedChart('ResponseChart')}} title={'Average'} data={averageRating + '%'} change={'14%'} trend={'negative'}/>
                <DataSnapshot onClick={() => {setSelectedChart('postiveResponsesChart')}} title={'Positive'} data={positivePercentage + '%'} change={'25%'} trend={'positive'}/>
                <DataSnapshot onClick={() => {setSelectedChart('negativeResponsesChart')}} title={'Negative'} data={negativePercentage + '%'} change={'3%'} trend={'negative'}/>
            </div>
            <DataGraph results={results} selectedChart={selectedChart}/>
        </div>
    )
}

export default DataCard;