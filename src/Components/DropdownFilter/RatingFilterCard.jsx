import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)

function RatingFilterCard ({onSelect, currentRating, closeDropdown}) {

    let isStared = [false, false, false, false, false]
    
    for (let i = 0; i < 6; i++) {
            if (i <= currentRating) {
                isStared[i - 1] = true;
            } else {
                isStared[i -1] = false;
            }
        }

    return (
        <RatingFilterList isStared={isStared} onSelect={onSelect} closeDropdown={closeDropdown}/>
    )
}

function RatingFilterList ({isStared, onSelect, closeDropdown}) {
    return (
    <>
        <div className='backgroundDropdown' onClick={() => {closeDropdown()}}></div>
        <div className='dropdownOptionComponent ratingContainer'>
            <FontAwesomeIcon icon='fa-star fa-solid' className={isStared[0] ? 'starIcon ratingIcon' : 'ratingIcon'} onClick={() => {onSelect(1)}}/>
            <FontAwesomeIcon icon='fa-star fa-solid' className={isStared[1] ? 'starIcon ratingIcon' : 'ratingIcon'} onClick={() => {onSelect(2)}}/>
            <FontAwesomeIcon icon='fa-star fa-solid' className={isStared[2] ? 'starIcon ratingIcon' : 'ratingIcon'} onClick={() => {onSelect(3)}}/>
            <FontAwesomeIcon icon='fa-star fa-solid' className={isStared[3] ? 'starIcon ratingIcon' : 'ratingIcon'} onClick={() => {onSelect(4)}}/>
            <FontAwesomeIcon icon='fa-star fa-solid' className={isStared[4] ? 'starIcon ratingIcon' : 'ratingIcon'} onClick={() => {onSelect(5)}}/>
        </div>
    </>
    )
}

export default RatingFilterCard;