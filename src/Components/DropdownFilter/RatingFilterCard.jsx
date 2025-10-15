import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)
import styles from './DropdownFilter.module.css'

function RatingFilterCard ({ onSelect, currentRating, closeDropdown }) {

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
        <div className='background-dropdown' onClick={() => {closeDropdown()}}></div>
        <div className={`${styles['dropdown-option-component']} ${styles['rating-container']}`}>
            <FontAwesomeIcon icon='fa-star fa-solid' className={isStared[0] ? `${styles['star-icon']} ${styles['rating-icon']}` : `${styles['rating-icon']}`} onClick={() => {onSelect(1)}}/>
            <FontAwesomeIcon icon='fa-star fa-solid' className={isStared[1] ? `${styles['star-icon']} ${styles['rating-icon']}` : `${styles['rating-icon']}`} onClick={() => {onSelect(2)}}/>
            <FontAwesomeIcon icon='fa-star fa-solid' className={isStared[2] ? `${styles['star-icon']} ${styles['rating-icon']}` : `${styles['rating-icon']}`} onClick={() => {onSelect(3)}}/>
            <FontAwesomeIcon icon='fa-star fa-solid' className={isStared[3] ? `${styles['star-icon']} ${styles['rating-icon']}` : `${styles['rating-icon']}`} onClick={() => {onSelect(4)}}/>
            <FontAwesomeIcon icon='fa-star fa-solid' className={isStared[4] ? `${styles['star-icon']} ${styles['rating-icon']}` : `${styles['rating-icon']}`} onClick={() => {onSelect(5)}}/>
        </div>
    </>
    )
}

export default RatingFilterCard;