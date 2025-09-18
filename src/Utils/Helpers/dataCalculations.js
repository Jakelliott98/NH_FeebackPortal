import { getCliniciansWithFeedback } from "./helperFunctions";

function getClinicianReport (feedback) {

    let clinicianCount = getCliniciansWithFeedback(feedback)
    let finalReport = clinicianCount.map(item => getCliniciansAverageRating(feedback, item));

    return finalReport;

}

// Move using CalculateAverageScore
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

export { getClinicianReport }