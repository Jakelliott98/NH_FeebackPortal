import { getCliniciansWithFeedback } from "./helperFunctions";


function getDataTrends (data) {

    return {
        averageRating: getAverageRating(data),
        positiveData: data.filter(item => item.averageScore > 2.5),
        negativeData: data.filter(item => item.averageScore < 2.5),
        positivePercentage: ((data.filter(item => item.averageScore > 2.5).length / data.length) * 100).toFixed(0),
        negativePercentage: ((data.filter(item => item.averageScore < 2.5).length / data.length) * 100).toFixed(0), 
    }
    
}

function getClinicianReport (feedback) {

    let clinicianCount = getCliniciansWithFeedback(feedback)
    let finalReport = clinicianCount.map(item => getCliniciansAverageRating(feedback, item));

    return finalReport;

}

function getCliniciansAverageRating (feedback, clinician) {

    let totalResponses = feedback.filter(item => item.clinician == clinician);
    let averageScore = totalResponses.map(item => item.averageScore).reduce((accumulator, current) => accumulator + current, 0) / totalResponses.length
    let roundedAverage = Math.round(averageScore);
    let clinicianPortal = {
        name: clinician,
        count: totalResponses.length,
        average: roundedAverage,
    }

    return clinicianPortal;

}

function getAverageRating (data) {

    let totalScore = data
    .map((item) => {return item.averageScore})
    .reduce((a, b) => a + b, 0);
    return ((totalScore / (data.length * 5)) * 100).toFixed(0)

}

export { getDataTrends, getClinicianReport }