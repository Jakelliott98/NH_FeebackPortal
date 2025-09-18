import DataCard from '../../Components/DataCardComponents/DataCard'
import { useContext } from 'react';
import resultsContext from '../../Context/resultsContext';
import { calculateAverageScore } from '../../Utils/Calculations/calculateAverageScore'
import calculateSatisfactionPercentage from '../../Utils/Calculations/calculateSatisfactionPercentage';

function DataCardSection ({ selectedChart, setSelectedChart }) {

    const { filteredFeedback } = useContext(resultsContext)
    let colours = ['#8e44ad', '#ffd600', '#cddc39', '#E94984']

    return (
            <div className="dataSnapshotDiv">
                {
                    returnDataCards(filteredFeedback).map((item, index) => {
                        return (
                            <DataCard 
                                selectedChart={selectedChart} 
                                onClick={() => {setSelectedChart(item.title)}}
                                item={item}
                                colour={colours[index]}
                            /> 
                        )
                    })
                }
            </div>
    )
}

function returnDataCards (filteredFeedback) {

    const {positivePercentage, negativePercentage} = calculateSatisfactionPercentage(filteredFeedback)

    return [
        {
            title: 'Responses',
            icon: 'fa-solid fa-people-group',
            data: filteredFeedback.length,
            trend: 'positive',
            change: 2, // Add the change function
            text: 'The total number of responses collected during the selected time period.',
        },        {
            title: 'Average',
            icon: 'fa-solid fa-star',
            data: calculateAverageScore(filteredFeedback),
            trend: 'positive',
            change: 7,
            text: 'The overall average score of all responses, shown as a percentage.',
        },        {
            title: 'Positive',
            icon: 'fa-solid fa-face-smile',
            data: positivePercentage,
            trend: 'negative',
            change: 12,
            text: 'The number of responses marked as satisfied or above the positive threshold.',
        },        {
            title: 'Negative',
            icon: 'fa-solid fa-face-frown',
            data: negativePercentage,
            trend: 'negative',
            change: 23,
            text: 'The number of responses marked as dissatisfied or below the negative threshold.',
        }
    ]
}

export { DataCardSection }