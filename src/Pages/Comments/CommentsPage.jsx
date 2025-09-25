import { useContext } from 'react';
import CommentCard from '../../Components/CommentCard/CommentCard';
import resultsContext from '../../Context/resultsContext';
import '../../CSS/pageLayouts/CommentsPage.css'
import { getSortedFeedback } from '../../Utils/Filters/sortData'
import useCommentFilters from '../../Hooks/useCommentFilters';
import CommentFilterContainer from './CommentsFilterContainer';
import filterComments from './filterComments';
import commentsContext from '../../Context/commentsContext';

function CommentsPageLogic () {

    const { filteredFeedback } = useContext(resultsContext)
    const { changeSortOption, changeRatingFilter, addClinicianFilter, resetFilters, commentFilters } = useCommentFilters();
    const { sortOption, rating, selectedClinicians, activeFilters } = commentFilters;

    let feedbacksWithComment = filteredFeedback.filter(item => item.comment !== '') // Remove any feedback whithout a comment
    let sortedFeedback = getSortedFeedback(sortOption, filterComments(feedbacksWithComment, activeFilters, rating, selectedClinicians))

    return (
        <commentsContext.Provider value={{ commentFilters, changeSortOption, changeRatingFilter, addClinicianFilter, resetFilters, sortedFeedback }}>
            <CommentsPage />
        </commentsContext.Provider>
    )
}

function CommentsPage () {

    const { sortedFeedback } = useContext(commentsContext)

    return (
        <div className='commentLayout'>
            <CommentFilterContainer />
            <div className='commentContainer'>
            {
                sortedFeedback.map((item) => {
                    return (
                        <CommentCard key={item.id} response={item} anonymous={false}/>
                )})
            }
            </div>
        </div>
    )
}



export default CommentsPageLogic;
