import {formatDate} from "../../Utils/Formatters/formatDate";
import RatingStarsSection from "./RatingStarsSection";
import '../../CSS/components/DataCards.css'


function CommentCard ({ response, anonymous }) {
    
    const { comment, average_score, assessment_type, clinicians, created_at } = response;

    return (
        <div className={average_score > 2.5 ? 'positiveComment' : 'negativeComment'}>
            <p className="commentText">"{comment}"</p>
            <div className={anonymous ? 'commentInfoThree' : 'commentInfo'}>
                <p className='commentsRating'><RatingStarsSection averageRating={average_score}/></p>
                <p>{assessment_type}</p>
                { anonymous ? null : <p className='commentClinician' >{ clinicians.physiotherapist ? clinicians.physiotherapist : `${clinicians.doctor} & ${clinicians.physiologist}` }</p> }
                <p className='commentTime'>{formatDate(created_at)}</p>
            </div>
        </div>
    )
    
}

export default CommentCard;