function filterComments (feedbackList, state, rating, selectedClinicians) {

    if (state.byRating == false && state.byClinician == false) {
        return feedbackList;
    } else {
        if (state.byRating == true) {
            return feedbackList.filter(item => Math.round(item.averageScore) == rating)
        }
        if (state.byClinician === true) {
            return feedbackList.filter(item =>  selectedClinicians.includes(item.clinician));
        }
    }

}


export default filterComments;