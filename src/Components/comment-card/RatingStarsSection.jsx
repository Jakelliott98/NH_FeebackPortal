import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
import styles from './CommentCard.module.css'


function RatingStarsSection ({ averageRating }) {

    let ratingsArray = [false, false, false, false, false];

    for (let i = 0; i < 5; i++) {
        if (i < Math.round(averageRating)) {
            ratingsArray[i] = true;
        } else if (i > Math.round(averageRating)) {
            ratingsArray[i] = false;
        }
    }  
        
    return (
        <RatingStarsList ratingScore={ratingsArray}/>
    )
}

function RatingStarsList ({ratingScore}) {

    return (
        <>
            <FontAwesomeIcon icon='fa-star fa-solid' className={ratingScore[0] ? `${styles['starIcon']}` : `${styles['unStaredIcon']}`}/>
            <FontAwesomeIcon icon='fa-star fa-solid' className={ratingScore[1] ? `${styles['starIcon']}` : `${styles['unStaredIcon']}`}/>
            <FontAwesomeIcon icon='fa-star fa-solid' className={ratingScore[2] ? `${styles['starIcon']}` : `${styles['unStaredIcon']}`}/>
            <FontAwesomeIcon icon='fa-star fa-solid' className={ratingScore[3] ? `${styles['starIcon']}` : `${styles['unStaredIcon']}`}/>
            <FontAwesomeIcon icon='fa-star fa-solid' className={ratingScore[4] ? `${styles['starIcon']}` : `${styles['unStaredIcon']}`}/>
        </>
    )

}

export default RatingStarsSection;