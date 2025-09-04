import returnDateFormat from "../DataCalculations/formatDate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

function CommentCard ({ client }) {
    
    const { comments, averageScore, assessmentType, clinician, timestamp } = client;

    return (
        <div className={averageScore > 2.5 ? 'positiveComment' : 'negativeComment'}>
            <p className="commentText">"{comments}"</p>
            <div className='commentInfo'>
                <p className='commentsRating'>Rating: <RatingStars averageRating={averageScore}/></p>
                <p>{assessmentType}</p>
                <p className='commentClinician' >{clinician}</p>
                <p className='commentTime'>{returnDateFormat(timestamp)}</p>
            </div>
        </div>
    )
    
}

export default CommentCard;


function RatingStars ({ averageRating }) {

    let ratingScore = getRatingArray(averageRating)

    function getRatingArray (rating) { //Change naming here

        let ratingsArray = [false, false, false, false, false];

        for (let i = 0; i < 4; i++) {
            if (i < Math.round(rating)) {
                ratingsArray[i] = true;
            } else if (i > Math.round(rating)) {
                ratingsArray[i] = false;
            }
        }  

        return ratingsArray ; 
        
    }

    return (
        <>
            <FontAwesomeIcon icon={ratingScore[0] ? 'fa-star fa-solid' : 'fa-regular fa-star'} className={ratingScore[0] ? 'starIcon' : ''}/>
            <FontAwesomeIcon icon={ratingScore[1] ? 'fa-star fa-solid' : 'fa-regular fa-star'} className={ratingScore[1] ? 'starIcon' : ''}/>
            <FontAwesomeIcon icon={ratingScore[2] ? 'fa-star fa-solid' : 'fa-regular fa-star'} className={ratingScore[2] ? 'starIcon' : ''}/>
            <FontAwesomeIcon icon={ratingScore[3] ? 'fa-star fa-solid' : 'fa-regular fa-star'} className={ratingScore[3] ? 'starIcon' : ''}/>
            <FontAwesomeIcon icon={ratingScore[4] ? 'fa-star fa-solid' : 'fa-regular fa-star'} className={ratingScore[4] ? 'starIcon' : ''}/>
        </>
    )
}