import { getCliniciansWithFeedback } from "./helperFunctions";

function getClinicianReport (feedback) {

    let clinicianCount = getCliniciansWithFeedback(feedback)
    let finalReport = clinicianCount.map(item => getCliniciansAverageRating(feedback, item));

    return finalReport;

}

function getCliniciansAverageRating (feedback, clinician) {

    let totalResponses = feedback.filter(item => item.clinician == clinician);
    let averageScore = totalResponses.map(item => item.averageScore).reduce((accumulator, current) => accumulator + current, 0) / totalResponses.length
    let averagePercentage = Math.round((averageScore / 5) * 100);
    let clinicianPortal = {
        name: clinician,
        count: totalResponses.length,
        average: averagePercentage,
    }

    return clinicianPortal;

}

// NEW CALCULATIONS

function getNumberOfResponses (feedback) {
    return feedback.length;
};

function calculateAverageRating (data) {

    let totalScore = data
        .map((item) => {return item.averageScore})
        .reduce((a, b) => a + b, 0);
    return ((totalScore / (data.length * 5)) * 100).toFixed(0)

}

function calculateSatisfactionPercentage (data) {
    return {
        positiveData: data.filter(item => item.averageScore > 2.5),
        negativeData: data.filter(item => item.averageScore < 2.5),
        positivePercentage: ((data.filter(item => item.averageScore > 2.5).length / data.length) * 100).toFixed(0),
        negativePercentage: ((data.filter(item => item.averageScore < 2.5).length / data.length) * 100).toFixed(0), 
    }
}

function filterQuestionResponses (data, question) {
    let dataArray = data.map(item => item.responses[question]);
    let totalScore = dataArray.reduce((a, b) => a + b, 0);
    return (Math.round((totalScore / (dataArray.length * 5)) * 100));
}


export { getClinicianReport, getNumberOfResponses, calculateAverageRating, calculateSatisfactionPercentage, filterQuestionResponses }