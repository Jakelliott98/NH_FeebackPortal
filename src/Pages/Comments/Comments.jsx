import { useContext } from 'react';
import CommentCard from '../../Components/CommentCard';
import resultsContext from '../../Context/resultsContext';
import '../../CSS/CommentsPage.css'
import { GenericFilterDropdown } from '../../Components/DropdownFilter';
import { returnDrList } from '../../DataCalculations/helperFunctions';
import { useMemo } from 'react';

let sortByOptions = ['Rating', 'Doctor', 'Date', 'Satisfaction']

// Hold a state of the dr name etc.
// Add a function for filtereing the results by the dr.

function Comments () {

    const { filteredResults } = useContext(resultsContext)
    const turnToState = 'All Doctors';
    const sortBy = 'Sort By';
    const ratingsTitle = 'Satisfaction Rating';

    let DoctorList =  useMemo(() => {
        return returnDrList(filteredResults)
    }, [filteredResults])

    return (
        <div className='commentLayout'>
            <div className='CommentFilters'>
                <GenericFilterDropdown resultFilter={sortBy} arrayData={sortByOptions} />
                <div className='commentDropdowns'>
                <GenericFilterDropdown resultFilter={ratingsTitle} arrayData={DoctorList}/>
                <GenericFilterDropdown resultFilter={turnToState} arrayData={DoctorList} />
                </div>
            </div>
            <div className='commentContainer'>
            {
                filteredResults.map((item) => {return (
                    <CommentCard key={item.id} client={item}/>
                )})
            }
            </div>
        </div>
    )
}

export default Comments;