import returnDateFormat from "../DataCalculations/dateConverted";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

function CommentCard ({client}) {

    let isPositive = client.averageScore > 2.5 ? true : false;
    let positiveClass = isPositive ? 'positiveComment' : 'negativeComment';
    
    return (
        <div className={positiveClass}>
            <p className="commentText">"{client.comments}"</p>
            <div className='commentInfo'>
                <p className='commentsRating'>Rating: <RatingStars /></p>
                <p>{client.assessmentType}</p>
                <p className='commentClinician' >{client.clinician}</p>
                <p className='commentTime'>{returnDateFormat(client.timestamp)}</p>
            </div>
        </div>
    )
}

export default CommentCard;


function RatingStars () {
    return (
        <>
        <FontAwesomeIcon icon="fa-solid fa-star" className='starIcon'/>
        <FontAwesomeIcon icon="fa-solid fa-star" className='starIcon'/>
        <FontAwesomeIcon icon="fa-solid fa-star" className='starIcon'/>
        <FontAwesomeIcon icon="fa-regular fa-star" className=''/>
        <FontAwesomeIcon icon="fa-regular fa-star" className=''/>
        </>
    )
}