import { useContext } from 'react';
import CommentCard from '../../Components/CommentCard';
import resultsContext from '../../Context/resultsContext';
import '../../CSS/CommentsPage.css'
import { ClinicianDropdown, SatisfactionRating, SortBy } from '../../Components/DropdownFilter';

function Comments () {

    const { filteredResults } = useContext(resultsContext)

    return (
        <div className='commentLayout'>
            <div className='CommentFilters'>
                <SortBy />
                <div className='commentDropdowns'>
                <SatisfactionRating />
                <ClinicianDropdown />
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