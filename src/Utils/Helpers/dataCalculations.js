import { getCliniciansWithFeedback } from "./helperFunctions";
import { calculateClinicianScore } from '../Calculations/calculateAverageScore'

function getClinicianReport (feedback) {

    return getCliniciansWithFeedback(feedback)
        .map(item => calculateClinicianScore(feedback, item));

}

export { getClinicianReport }