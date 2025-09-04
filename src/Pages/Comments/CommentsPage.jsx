import { useContext, useState, useMemo } from 'react';
import CommentCard from '../../Components/CommentCard';
import resultsContext from '../../Context/resultsContext';
import '../../CSS/CommentsPage.css'
import { DropdownFilter } from '../../Components/DropdownFilter/DropdownFilter';
import { getCliniciansWithFeedback, getSortedFeedback } from '../../DataCalculations/helperFunctions';

let sortByOptions = ['Clinician (A-Z)', 'Highest Rated','Lowest Rated', 'Most Recent', 'Oldest First']

function CommentsPage () {

    const { filteredFeedback } = useContext(resultsContext)
    const turnToState = 'All Doctors';
    const ratingsTitle = 'Satisfaction Rating';

    // Remove any responses whithout a comment
    let feedbacksWithComment = filteredFeedback.filter(item => item.comments !== '')

    // Collect the Dr's who have had a response for the Clinician dropdown filter
    let cliniciansWithFeedback =  useMemo(() => {
        return getCliniciansWithFeedback(filteredFeedback)
    }, [filteredFeedback])

    const [sortOption, setSortOption] = useState('Sort By')
    const [rating, setRating] = useState('')

    // List returning the data in a sorted manner (First state is regular list)
    let sortedFeedback = getSortedFeedback(sortOption, feedbacksWithComment)

    // List of results filtered by anything below the set Rating filter
    let sortedFeedbackByRating = filteredFeedback.filter(item => Math.round(item.averageScore) == rating)

    return (
        <div className='commentLayout'>
            <div className='CommentFilters'>
                <DropdownFilter dataSet={true} resultFilter={sortOption} arrayData={sortByOptions} filterbyFunction={setSortOption}/>
                <div className='commentDropdowns'>
                    <DropdownFilter dataSet={false} resultFilter={ratingsTitle} filterbyFunction={setRating}/>
                    <DropdownFilter dataSet={true} resultFilter={turnToState} arrayData={cliniciansWithFeedback} />
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

export default CommentsPage;