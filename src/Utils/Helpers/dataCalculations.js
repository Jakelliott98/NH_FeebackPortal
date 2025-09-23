import { getCliniciansWithFeedback } from "./helperFunctions";
import { calculateClinicianScore } from '../Calculations/calculateAverageScore'

function getClinicianReport (feedback) {

    let physiologistWithFeedback = getCliniciansWithFeedback(feedback).physiologist.map(item => calculateClinicianScore(feedback, item, 'physiologist'));
    let doctorsWithFeedback = getCliniciansWithFeedback(feedback).doctors.map(item => calculateClinicianScore(feedback, item, 'doctor'));
    let physiotherapistWithFeedback = getCliniciansWithFeedback(feedback).physiotherapist.map(item => calculateClinicianScore(feedback, item, 'physiotherapist'));

    return physiologistWithFeedback.concat(doctorsWithFeedback).concat(physiotherapistWithFeedback);

}

export { getClinicianReport }