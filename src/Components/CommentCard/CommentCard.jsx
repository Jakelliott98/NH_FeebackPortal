import {formatDate} from "../../DataCalculations/formatDate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
import RatingStarsSection from "./RatingStarsSection";

function CommentCard ({ client, anonymous }) {
    
    const { comments, averageScore, assessmentType, clinician, timestamp } = client;

    return (
        <div className={averageScore > 2.5 ? 'positiveComment' : 'negativeComment'}>
            <p className="commentText">"{comments}"</p>
            <div className={anonymous ? 'commentInfoThree' : 'commentInfo'}>
                <p className='commentsRating'><RatingStarsSection averageRating={averageScore}/></p>
                <p>{assessmentType}</p>
                { anonymous ? null : <p className='commentClinician' >{clinician}</p>}
                <p className='commentTime'>{formatDate(timestamp)}</p>
            </div>
        </div>
    )
    
}

export default CommentCard;