import DataSnapshot from '../Components/DataSnapshot'
import { sortDataTrend } from '../DataCalculations/dataCalculations';
import { useContext, useState } from 'react';
import DataGraph from './Graph';
import resultsContext from '../Context/resultsContext';

function DataCard () {

    const {results} = useContext(resultsContext)

    let responseNumber = results.length;
    let { averageRating, positivePercentage, negativePercentage } = sortDataTrend(results) //Make the initial call for this function in the main file therefore consistent through the webapp
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