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
            text: 'Number of feedback responses this month',
        },        {
            title: 'Average',
            icon: 'fa-solid fa-star',
            data: calculateAverageScore(filteredFeedback),
            trend: 'positive',
            change: 7,
            text: 'Average feedback response score this month',
        },        {
            title: 'Positive',
            icon: 'fa-solid fa-face-smile',
            data: positivePercentage,
            trend: 'negative',
            change: 12,
            text: 'Percentage of positive feedbaxck (> 2.5 score) this month',
        },        {
            title: 'Negative',
            icon: 'fa-solid fa-face-frown',
            data: negativePercentage,
            trend: 'negative',
            change: 23,
            text: 'Percentage of negative feedbaxck (< 2.5 score) this month',
        }
    ]
}

export { DataCardSection }