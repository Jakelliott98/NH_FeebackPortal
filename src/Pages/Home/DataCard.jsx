import DataCard from '../../Components/DataCardComponents/DataCard'
import { calculateAverageRating, getNumberOfResponses, calculateSatisfactionPercentage } from '../../DataCalculations/dataCalculations';
import { useContext } from 'react';
import resultsContext from '../../Context/resultsContext';

function DataSnapshotDiv ({ selectedChart, setSelectedChart }) {

    const { filteredFeedback } = useContext(resultsContext)

    let numberOfResponses = getNumberOfResponses(filteredFeedback);
    let feedbackAverageRating = calculateAverageRating(filteredFeedback) 
    let {positivePercentage, negativePercentage} = calculateSatisfactionPercentage(filteredFeedback)

    let datacards = returnDataCards(numberOfResponses, feedbackAverageRating, positivePercentage, negativePercentage)

    let colours = ['#8e44ad', '#ffd600', '#cddc39', '#E94984']

    return (
            <div className="dataSnapshotDiv">
                {
                    datacards.map((item, index) => {
                        return (
                            <DataCard 
                                selectedChart={selectedChart} 
                                onClick={() => {setSelectedChart(item.title)}}
                                title={item.title}
                                data={item.data}
                                change={item.change}
                                trend={item.trend}
                                icon={item.icon}
                                text={item.text}
                                colour={colours[index]}
                            /> 
                        )
                    })
                }
            </div>
    )
}

function returnDataCards (numberOfResponses, feedbackAverageRating, positivePercentage, negativePercentage) {
    return [
        {
            title: 'Responses',
            icon: 'fa-solid fa-people-group',
            data: numberOfResponses,
            trend: 'positive',
            change: 2,
            text: 'Number of feedback responses this month',
        },        {
            title: 'Average',
            icon: 'fa-solid fa-star',
            data: feedbackAverageRating,
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

export { DataSnapshotDiv }