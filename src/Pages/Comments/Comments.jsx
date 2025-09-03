import { useContext, useState, useMemo } from 'react';
import CommentCard from '../../Components/CommentCard';
import resultsContext from '../../Context/resultsContext';
import '../../CSS/CommentsPage.css'
import { GenericFilterDropdown } from '../../Components/DropdownFilter';
import { returnDrList, returnOrderedList } from '../../DataCalculations/helperFunctions';

let sortByOptions = ['Clinician (A-Z)', 'Highest Rated','Lowest Rated', 'Most Recent', 'Oldest First']

// Hold a state of the dr name etc.
// Add a function for filtereing the results by the dr.

function Comments () {

    const { filteredResults } = useContext(resultsContext)
    const turnToState = 'All Doctors';
    const ratingsTitle = 'Satisfaction Rating';

    let DoctorList =  useMemo(() => {
        return returnDrList(filteredResults)
    }, [filteredResults])

    const [sortBy, setSortBy] = useState('Sort By');
    const [rating, setRating] = useState('')
    let organisedList = returnOrderedList(sortBy, filteredResults)
    let ratingList = filteredResults.filter((item) => {
        let roundedNumber = Math.round(item.averageScore)
        return roundedNumber == rating;
    })
    console.log(rating)

    return (
        <div className='commentLayout'>
            <div className='CommentFilters'>
                <GenericFilterDropdown dataSet={true} resultFilter={sortBy} arrayData={sortByOptions} filterbyFunction={setSortBy}/>
                <div className='commentDropdowns'>
                <GenericFilterDropdown dataSet={false} resultFilter={ratingsTitle} filterbyFunction={setRating}/>
                <GenericFilterDropdown dataSet={true} resultFilter={turnToState} arrayData={DoctorList} />
                </div>
            </div>
            <div className='commentContainer'>
            {
                organisedList.map((item) => {return (
                    <CommentCard key={item.id} client={item}/>
                )})
            }
            </div>
        </div>
    )
}

export default Comments;