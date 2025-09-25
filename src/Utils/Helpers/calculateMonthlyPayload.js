import { calculateAverageScore } from "../Calculations/calculateAverageScore";
import calculateSatisfactionPercentage from "../Calculations/calculateSatisfactionPercentage";
import { getDateMonth, months } from "../Formatters/formatDate";

function calculateMonthlyPayload (responses) {

    let monthlyResponses = {};

    responses.forEach((item) => {
        let monthIndex = getDateMonth(item.created_at);
        let itemsMonthNumber = getDateMonth(item.created_at);
        let itemsMonth = months[itemsMonthNumber];

        if (monthlyResponses[itemsMonth]) {
            monthlyResponses[itemsMonth].responses.push(item);
        } else {
            monthlyResponses[itemsMonth] = {
                month: itemsMonth,
                responses: [item],
                monthIndex,
            };
        }
    })

    let monthlyPayload = Object.keys(monthlyResponses).map((key) => {

        let numberOfResponses = monthlyResponses[key].responses.length;
        let {positivePercentage, negativePercentage} = calculateSatisfactionPercentage(monthlyResponses[key].responses);
        let averageScore = calculateAverageScore(monthlyResponses[key].responses)

        return {
            ...monthlyResponses[key],
            numberOfResponses,
            averageScore,
            positivePercentage,
            negativePercentage,
        }

    })

    return monthlyPayload.sort((a, b) => a.monthKey - b.monthKey);

}



export default calculateMonthlyPayload;