import {formatDate} from "../../Utils/Formatters/formatDate";
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