function filterComments (feedbackList, state, rating, selectedClinicians) {

    if (state.byRating == false && state.byClinician == false) {
        return feedbackList;
    } else {
        if (state.byRating == true) {
            return feedbackList.filter(item => Math.round(item.average_score) == rating)
        }
        if (state.byClinician === true) {
            let physiologistFeedback = feedbackList.filter(item =>  selectedClinicians.includes(item.clinicians.physiologist));
            let doctorFeedback = feedbackList.filter(item =>  selectedClinicians.includes(item.clinicians.doctor));
            let physiotherapistFeedback = feedbackList.filter(item =>  selectedClinicians.includes(item.clinicians.physiotherapist));
            return Array.from(new Set(physiologistFeedback.concat(doctorFeedback).concat(physiotherapistFeedback)))
        }
    }

}

export default filterComments;