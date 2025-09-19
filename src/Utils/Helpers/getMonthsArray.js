import { calculateAverageScore } from "../Calculations/calculateAverageScore";
import calculateSatisfactionPercentage from "../Calculations/calculateSatisfactionPercentage";
import { getDateMonth, months } from "../Formatters/formatDate";

function calculateMonthlyData (responses) {

    let monthlyResponses = {};

    responses.forEach((item) => {
        let itemsMonthNumber = getDateMonth(item.timestamp);
        let itemsMonth = months[itemsMonthNumber];

        if (monthlyResponses[itemsMonth]) {
            monthlyResponses[itemsMonth].responses.push(item);
        } else {
            monthlyResponses[itemsMonth] = {
                month: itemsMonth,
                responses: [item],
                monthKey: itemsMonthNumber,
            };
        }
    })

    let monthArr = Object.keys(monthlyResponses).map((key) => {

        let numberResponses = monthlyResponses[key].responses.length;
        let {positivePercentage, negativePercentage} = calculateSatisfactionPercentage(monthlyResponses[key].responses);
        let averageScore = calculateAverageScore(monthlyResponses[key].responses)

        return {
            month: monthlyResponses[key].month,
            monthKey: monthlyResponses[key].monthKey,
            responses: monthlyResponses[key].responses,
            numberOfResponses: numberResponses,
            average: averageScore,
            positive: positivePercentage,
            negative: negativePercentage,
        }
    })



    return monthArr.sort((a, b) => a.monthKey - b.monthKey);

}



export default calculateMonthlyData;


// Function where it takes last 3 amount of months --> and draws the graphs

// {Month, responses}