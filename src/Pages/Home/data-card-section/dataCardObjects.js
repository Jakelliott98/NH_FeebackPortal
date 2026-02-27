import { calculateAverageScore } from '../../../Utils/Calculations/calculateAverageScore'
import calculateSatisfactionPercentage from '../../../Utils/Calculations/calculateSatisfactionPercentage';

function dataCardObjects (filteredFeedback) {

    const {positivePercentage, negativePercentage} = calculateSatisfactionPercentage(filteredFeedback)

    return [
        {
            title: 'Responses',
            icon: 'fa-solid fa-people-group',
            data: filteredFeedback.length,
            text: 'The total number of responses collected during the selected time period.',
        },        {
            title: 'Satisfaction',
            icon: 'fa-solid fa-star',
            data: `${calculateAverageScore(filteredFeedback)}%`,
            text: 'The overall average score of all responses, shown as a percentage.',
        },        {
            title: 'Positive',
            icon: 'fa-solid fa-face-smile',
            data: `${positivePercentage}%`,
            text: 'The number of responses marked as satisfied or above the positive threshold.',
        },        {
            title: 'Negative',
            icon: 'fa-solid fa-face-frown',
            data: `${negativePercentage}%`,
            text: 'The number of responses marked as dissatisfied or below the negative threshold.',
        }
    ]
}

export default dataCardObjects;