import { getDateMonth, months } from "../Formatters/formatDate";
import calculateSatisfactionPercentage from "./calculateSatisfactionPercentage";
import { calculateAverageScore } from "./calculateAverageScore";

function calculateTrendChange ( responses, filters ) {

    let currentMonth = filters.durationFilter == 'Month' ? getDateMonth(new Date()) : months.indexOf(filters.durationFilter);
    let previousMonth = currentMonth == 0 ? 11 : currentMonth - 1;

    let thisMonthsData = responses.filter((item) => {
        let itemsMonth = getDateMonth(item.created_at);
        return itemsMonth == currentMonth && item;
    })

    let lastMonthsData = responses.filter((item) => {
        let itemsMonth = getDateMonth(item.created_at);
        return itemsMonth == previousMonth;
    })

    let thisMonthsResults = {
        averageScore: calculateAverageScore(thisMonthsData),
        positiveScore: calculateSatisfactionPercentage(thisMonthsData).positivePercentage,
        negativeScore: calculateSatisfactionPercentage(thisMonthsData).negativePercentage,
    } 

    console.log(thisMonthsResults)

    let lastMonthsResults = {
        averageScore: calculateAverageScore(lastMonthsData),
        positiveScore: calculateSatisfactionPercentage(lastMonthsData).positivePercentage,
        negativeScore: calculateSatisfactionPercentage(lastMonthsData).negativePercentage,    
    }

    console.log(lastMonthsResults)

    function returnDifference (oldNumber, newNumber) {
        return (( newNumber - oldNumber ) / oldNumber) * 100
    }

    let differenceOfScores = {
        averageScore: returnDifference(lastMonthsResults.averageScore, thisMonthsResults.averageScore),
        positiveScore: returnDifference(lastMonthsResults.positiveScore, thisMonthsResults.positiveScore),
        negativeScore: returnDifference(lastMonthsResults.negativeScore, thisMonthsResults.negativeScore),
    }

    console.log(differenceOfScores)

    return differenceOfScores;

}

export default calculateTrendChange;