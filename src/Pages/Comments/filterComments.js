


function filterComments (feedbackList, state, rating, selectedClinicians) {

    if (state.byRating == false && state.byClinician == false) {
        return feedbackList;
    } else {
        let list = feedbackList;
        if (state.byRating == true) {
            // Filter the list by rating
            list = list.filter(item => Math.round(item.averageScore) == rating)
        }
        if (state.byClinician === true) {
            // Filter the list by selected clinician
            list = list.filter(item =>  selectedClinicians.includes(item.clinician));
        }
        return list;
    }

}


export default filterComments;