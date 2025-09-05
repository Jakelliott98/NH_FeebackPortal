import { useContext, useState, useMemo, useEffect } from 'react';
import CommentCard from '../../Components/CommentCard';
import resultsContext from '../../Context/resultsContext';
import '../../CSS/CommentsPage.css'
import { DropdownFilter } from '../../Components/DropdownFilter/DropdownFilter';
import { getCliniciansWithFeedback, getSortedFeedback } from '../../DataCalculations/helperFunctions';
import useCommentFilters from '../../Hooks/useCommentFilters';

let sortByOptions = ['Clinician (A-Z)', 'Highest Rated','Lowest Rated', 'Most Recent', 'Oldest First']

function CommentsPage () {

    const { filteredFeedback } = useContext(resultsContext)
    const ClinicianTitle = 'All Doctors';
    const ratingsTitle = 'Satisfaction Rating';
    let { changeSortOption, changeRatingFilter, addClinicianFilter, resetFilters, commentFilters } = useCommentFilters();

    // Remove any feedback whithout a comment
    let feedbacksWithComment = filteredFeedback.filter(item => item.comments !== '')

    // Collect the clinicians who have had a response (Used for the Clinician dropdown filter)
    let cliniciansWithFeedback =  useMemo(() => {
        return getCliniciansWithFeedback(feedbacksWithComment)
    }, [feedbacksWithComment])

    // List returning the data in a sorted manner (First state is regular list)
    let sortedFeedback = getSortedFeedback(commentFilters.sortOption, filterFeedback(feedbacksWithComment, commentFilters.activeFilters, commentFilters.rating, commentFilters.selectedClinicians))


    return (
        <div className='commentLayout'>
            <div className='CommentFilters'>
                <DropdownFilter dataSet={true} resultFilter={commentFilters.sortOption} arrayData={sortByOptions} filterbyFunction={changeSortOption}/>
                <div className='commentDropdowns'>
                    <DropdownFilter dataSet={false} resultFilter={ratingsTitle} filterbyFunction={changeRatingFilter} />
                    <DropdownFilter dataSet={true} filterbyFunction={addClinicianFilter} resultFilter={ClinicianTitle} arrayData={cliniciansWithFeedback} type={'array'} dropdownType={commentFilters.selectedClinicians}/>
                    <button onClick={() => {resetFilters()}}>Reset</button>
                </div>
            </div>
            <div className='commentContainer'>
            {
                sortedFeedback.map((item) => {return (
                    <CommentCard key={item.id} client={item} anonymous={false}/>
                )})
            }
            </div>
        </div>
    )
}

function filterFeedback (feedbackList, state, rating, selectedClinicians) {

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

export default CommentsPage;
