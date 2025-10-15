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


    let lastMonthsResults = {
        averageScore: calculateAverageScore(lastMonthsData),
        positiveScore: calculateSatisfactionPercentage(lastMonthsData).positivePercentage,
        negativeScore: calculateSatisfactionPercentage(lastMonthsData).negativePercentage,    
    }


    function returnDifference (oldNumber, newNumber) {
        return (( newNumber - oldNumber ) / oldNumber) * 100
    }

    let differenceOfScores = {
        numberResponses: Math.floor(returnDifference(lastMonthsData.length, thisMonthsData.length)),
        averageScore: Math.floor(returnDifference(lastMonthsResults.averageScore, thisMonthsResults.averageScore)),
        positiveScore: Math.floor(returnDifference(lastMonthsResults.positiveScore, thisMonthsResults.positiveScore)),
        negativeScore: Math.floor(returnDifference(lastMonthsResults.negativeScore, thisMonthsResults.negativeScore)),
    }
    let positiveTrend = {
        numberResponses: differenceOfScores.numberResponses > 0 ? 'positive' : 'negative',
        averageScore: differenceOfScores.averageScore > 0 ? 'positive' : 'negative',
        positiveScore: differenceOfScores.positiveScore > 0 ? 'positive' : 'negative',
        negativeScore: differenceOfScores.negativeScore < 0 ? 'positive' : 'negative',
    }

    return {differenceOfScores, positiveTrend};

}

export default calculateTrendChange;