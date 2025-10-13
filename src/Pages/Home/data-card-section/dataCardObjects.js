import { calculateAverageScore } from '../../../Utils/Calculations/calculateAverageScore'
import calculateSatisfactionPercentage from '../../../Utils/Calculations/calculateSatisfactionPercentage';
import calculateTrendChange from '../../../Utils/Calculations/calculateTrendChange';

function dataCardObjects (filteredFeedback, responses, filters) {

    const {positivePercentage, negativePercentage} = calculateSatisfactionPercentage(filteredFeedback)

    let trendChange = calculateTrendChange(responses, filters)

    return [
        {
            title: 'Responses',
            icon: 'fa-solid fa-people-group',
            data: filteredFeedback.length,
            trend: 'positive',
            change: 2, // Add the change function
            text: 'The total number of responses collected during the selected time period.',
        },        {
            title: 'Average Satisfaction',
            icon: 'fa-solid fa-star',
            data: `${calculateAverageScore(filteredFeedback)}%`,
            trend: 'positive',
            change: trendChange.averageScore,
            text: 'The overall average score of all responses, shown as a percentage.',
        },        {
            title: 'Positive Responses',
            icon: 'fa-solid fa-face-smile',
            data: `${positivePercentage}%`,
            trend: 'positive', //function checkTrend
            change: trendChange.positiveScore, //function calculateTrendChange
            text: 'The number of responses marked as satisfied or above the positive threshold.',
        },        {
            title: 'Negative Responses',
            icon: 'fa-solid fa-face-frown',
            data: `${negativePercentage}%`,
            trend: 'negative',
            change: trendChange.negativeScore,
            text: 'The number of responses marked as dissatisfied or below the negative threshold.',
        }
    ]
}

export default dataCardObjects;