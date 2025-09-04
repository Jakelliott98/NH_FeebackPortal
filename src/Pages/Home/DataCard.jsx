import DataSnapshotCard from '../../Components/DataSnapshotCard'
import { sortDataTrend } from '../../DataCalculations/dataCalculations';
import { useContext, useState } from 'react';
import DataGraphCard from './DataGraphCard';
import resultsContext from '../../Context/resultsContext';

function DataContainer () {

    const { filteredResults } = useContext(resultsContext)

    let responseNumber = filteredResults.length;
    let { averageRating, positivePercentage, negativePercentage } = sortDataTrend(filteredResults) //Make the initial call for this function in the main file therefore consistent through the webapp
    const [selectedChart, setSelectedChart] = useState('Average')

    return (
        <div>
            <div className="dataSnapshotDiv">
                <DataSnapshotCard selectedChart={selectedChart} onClick={() => {setSelectedChart('Reponses')}} title={'Reponses'} data={responseNumber} change={'2%'} trend={'positive'}/>
                <DataSnapshotCard selectedChart={selectedChart} onClick={() => {setSelectedChart('Average')}} title={'Average'} data={averageRating + '%'} change={'14%'} trend={'negative'}/>
                <DataSnapshotCard selectedChart={selectedChart} onClick={() => {setSelectedChart('Positive')}} title={'Positive'} data={positivePercentage + '%'} change={'25%'} trend={'positive'}/>
                <DataSnapshotCard selectedChart={selectedChart} onClick={() => {setSelectedChart('Negative')}} title={'Negative'} data={negativePercentage + '%'} change={'3%'} trend={'negative'}/>
            </div>
            <div className='graphContainer'>
                <DataGraphCard results={filteredResults} selectedChart={selectedChart}/>
            </div>
        </div>
    )
}

export default DataContainer;