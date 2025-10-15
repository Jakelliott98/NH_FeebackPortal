import { formatDate } from "../../Utils/Formatters/formatDate";
import StarRatingContainer from "./StarRatingContainer";
import styles from './CommentCard.module.css'


function CommentCard ({ response, anonymous }) {
    
    const { comment, average_score, assessment_type, clinicians, created_at } = response;

    return (
        <div className={average_score > 2.5 ? `${styles['positive-comment']}` : `${styles['negative-comment']}`}>
            <p className={styles['comment-text']}>
                "{comment}"
            </p>
            <div className={anonymous ? `${styles['comment-info-three']}` : `${styles['comment-info']}`}>
                <p className={styles['comments-rating']}>
                    <StarRatingContainer averageRating={average_score}/>
                </p>
                <p>{assessment_type}</p>
                { anonymous ? null : <p className={styles['comment-clinician']} > { clinicians.physiotherapist ? clinicians.physiotherapist : `${clinicians.doctor} & ${clinicians.physiologist}` } </p> }
                <p className={styles['comment-time']}>
                    {formatDate(created_at)}
                </p>
            </div>
        </div>
    )
    
}

export default CommentCard;