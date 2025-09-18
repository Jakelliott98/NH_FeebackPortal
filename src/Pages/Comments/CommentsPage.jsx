import { useContext, useMemo } from 'react';
import CommentCard from '../../Components/CommentCard/CommentCard';
import resultsContext from '../../Context/resultsContext';
import '../../CSS/CommentsPage.css'
import { DropdownFilter } from '../../Components/DropdownFilter/DropdownFilter';
import { getCliniciansWithFeedback } from '../../Utils/Helpers/helperFunctions'
import { getSortedFeedback } from '../../Utils/Filters/FilterCalcs'
import useCommentFilters from '../../Hooks/useCommentFilters';

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)

let sortByOptions = ['Clinician (A-Z)', 'Highest Rated','Lowest Rated', 'Most Recent', 'Oldest First']

function CommentsPage () {

    const { filteredFeedback } = useContext(resultsContext)
    const ClinicianTitle = 'All Doctors';
    const ratingsTitle = 'Satisfaction Rating';
    const { changeSortOption, changeRatingFilter, addClinicianFilter, resetFilters, commentFilters } = useCommentFilters();
    const { sortOption, rating, selectedClinicians, activeFilters } = commentFilters;

    // Remove any feedback whithout a comment
    let feedbacksWithComment = filteredFeedback.filter(item => item.comments !== '')

    // List returning the data in a sorted manner (First state is regular list)
    let sortedFeedback = getSortedFeedback(sortOption, filterFeedback(feedbacksWithComment, activeFilters, rating, selectedClinicians))

    // Collect the clinicians who have had a response (Used for the Clinician dropdown filter)
    let cliniciansWithFeedback =  useMemo(() => {
        return getCliniciansWithFeedback(sortedFeedback)
    }, [sortedFeedback])

    return (
        <div className='commentLayout'>
            <div className='CommentFilters'>
                <DropdownFilter isDropdownList={true} dropdownTitle={sortOption} dropdownOptions={sortByOptions} onSelect={changeSortOption} dropdownType={'variable'}/>
                <div className='commentDropdowns'>
                    <DropdownFilter isDropdownList={false} dropdownTitle={ratingsTitle} onSelect={changeRatingFilter} currentRating={rating} />
                    <DropdownFilter isDropdownList={true} dropdownTitle={ClinicianTitle} onSelect={addClinicianFilter} dropdownOptions={cliniciansWithFeedback} dropdownType={'array'} currentSelectedOption={selectedClinicians}/>
                    <button className='resetButton' onClick={() => {resetFilters()}}>
                        <FontAwesomeIcon icon="fa-solid fa-rotate-right" />
                        Reset
                    </button>
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
