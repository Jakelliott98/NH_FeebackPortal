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
    let organisedList = returnOrderedList(sortBy, filteredResults)
    
    return (
        <div className='commentLayout'>
            <div className='CommentFilters'>
                <GenericFilterDropdown resultFilter={sortBy} arrayData={sortByOptions} filterbyFunction={setSortBy}/>
                <div className='commentDropdowns'>
                <GenericFilterDropdown resultFilter={ratingsTitle} arrayData={DoctorList}/>
                <GenericFilterDropdown resultFilter={turnToState} arrayData={DoctorList} />
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