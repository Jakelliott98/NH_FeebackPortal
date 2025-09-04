import DataSnapshotCard from '../../Components/DataSnapshotCard'
import { getDataTrends } from '../../DataCalculations/dataCalculations';
import { useContext, useState } from 'react';
import DataGraphCard from './DataGraphCard';
import resultsContext from '../../Context/resultsContext';

function DataContainer () {

    const { filteredFeedback } = useContext(resultsContext)

    let feedbackCount = filteredFeedback.length;
    let { averageRating, positivePercentage, negativePercentage } = getDataTrends(filteredFeedback) //Make the initial call for this function in the main file therefore consistent through the webapp
    const [selectedChart, setSelectedChart] = useState('Average')

    return (
        <div>
            <div className="dataSnapshotDiv">
                <DataSnapshotCard selectedChart={selectedChart} onClick={() => {setSelectedChart('Reponses')}} title={'Reponses'} data={feedbackCount} change={'2%'} trend={'positive'}/>
                <DataSnapshotCard selectedChart={selectedChart} onClick={() => {setSelectedChart('Average')}} title={'Average'} data={averageRating + '%'} change={'14%'} trend={'negative'}/>
                <DataSnapshotCard selectedChart={selectedChart} onClick={() => {setSelectedChart('Positive')}} title={'Positive'} data={positivePercentage + '%'} change={'25%'} trend={'positive'}/>
                <DataSnapshotCard selectedChart={selectedChart} onClick={() => {setSelectedChart('Negative')}} title={'Negative'} data={negativePercentage + '%'} change={'3%'} trend={'negative'}/>
            </div>
            <div className='graphContainer'>
                <DataGraphCard results={filteredFeedback} selectedChart={selectedChart}/>
            </div>
        </div>
    )
}

export default DataContainer;