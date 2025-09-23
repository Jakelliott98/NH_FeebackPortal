import {formatDate} from "../../Utils/Formatters/formatDate";
import RatingStarsSection from "./RatingStarsSection";
import '../../CSS/components/DataCards.css'


function CommentCard ({ response, anonymous }) {
    
    const { comments, averageScore, assessmentType, doctor, physiotherapist, physiologist, timestamp } = response;

    return (
        <div className={averageScore > 2.5 ? 'positiveComment' : 'negativeComment'}>
            <p className="commentText">"{comments}"</p>
            <div className={anonymous ? 'commentInfoThree' : 'commentInfo'}>
                <p className='commentsRating'><RatingStarsSection averageRating={averageScore}/></p>
                <p>{assessmentType}</p>
                { anonymous ? null : <p className='commentClinician' >{ physiotherapist ? physiotherapist : `${doctor} & ${physiologist}` }</p> }
                <p className='commentTime'>{formatDate(timestamp)}</p>
            </div>
        </div>
    )
    
}

export default CommentCard;