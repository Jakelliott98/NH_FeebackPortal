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
                <p className='commentsRating'>Rating: <RatingStars averageRating={client.averageScore}/></p>
                <p>{client.assessmentType}</p>
                <p className='commentClinician' >{client.clinician}</p>
                <p className='commentTime'>{returnDateFormat(client.timestamp)}</p>
            </div>
        </div>
    )
}

export default CommentCard;


function RatingStars ({averageRating}) {

    let stars = decideStars(averageRating)

    function decideStars (rating) {
        let array = [false, false, false, false, false];
        let roundedRating = Math.round(rating)

        for (let i = 0; i < 4; i++) {
            if (i < roundedRating) {
                array[i] = true;
            } else if (i > roundedRating) {
                array[i] = false;
            }
        }  
        return array ; 
        }


    let solidStar = 'fa-star fa-solid';
    let regularStar = 'fa-regular fa-star';

    return (
        <>
            <FontAwesomeIcon icon={stars[0] ? solidStar : regularStar} className={stars[0] ? 'starIcon' : ''}/>
            <FontAwesomeIcon icon={stars[1] ? solidStar : regularStar} className={stars[1] ? 'starIcon' : ''}/>
            <FontAwesomeIcon icon={stars[2] ? solidStar : regularStar} className={stars[2] ? 'starIcon' : ''}/>
            <FontAwesomeIcon icon={stars[3] ? solidStar : regularStar} className={stars[3] ? 'starIcon' : ''}/>
            <FontAwesomeIcon icon={stars[4] ? solidStar : regularStar} className={stars[4] ? 'starIcon' : ''}/>
        </>
    )
}