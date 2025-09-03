import { useContext } from 'react';
import CommentCard from '../../Components/CommentCard';
import resultsContext from '../../Context/resultsContext';
import '../../CSS/CommentsPage.css'

function Comments () {

    const { filteredResults } = useContext(resultsContext)

    return (
        <div className='commentLayout'>
            <div>
                <button>Sort By</button>
                <button>Satisfaction Rating</button>
                <button>All Doctors</button>
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