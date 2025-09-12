import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)

function DropdownListCard ({dropdownOptions, onSelect, currentSelectedOption, dropdownType, cssClass}) {

    let divClass = cssClass == 'titleFilter' ? 'QuestionDropdown dropdownOptionComponent' : 'dropdownOptionComponent' ;

    return (
        <div className={divClass}>
            {dropdownOptions.map((item) => {
                return (
                    <ul 
                    key={item}
                    className={
                        dropdownType == 'variable' && currentSelectedOption == item ? 'active dropdownOption' : dropdownType == 'array' && currentSelectedOption.includes(item) ? 'active dropdownOption' : 'dropdownOption'
                    }
                    onClick={() => { onSelect(item) }}
                    >
                        {item}
                    </ul>)
            })}
        </div>
    )
    
}

function RatingFilterCard ({onSelect, currentRating}) {

    let isStared = [false, false, false, false, false]
    
    for (let i = 0; i < 6; i++) {
            if (i <= currentRating) {
                isStared[i - 1] = true;
            } else {
                isStared[i -1] = false;
            }
        }

    return (
        <div className='dropdownOptionComponent ratingContainer'>
            <FontAwesomeIcon icon={isStared[0] ? 'fa-star fa-solid' : 'fa-regular fa-star'} className={isStared[0] ? 'starIcon ratingIcon' : 'ratingIcon'} onClick={() => {onSelect(1)}}/>
            <FontAwesomeIcon icon={isStared[1] ? 'fa-star fa-solid' : 'fa-regular fa-star'} className={isStared[1] ? 'starIcon ratingIcon' : 'ratingIcon'} onClick={() => {onSelect(2)}}/>
            <FontAwesomeIcon icon={isStared[2] ? 'fa-star fa-solid' : 'fa-regular fa-star'} className={isStared[2] ? 'starIcon ratingIcon' : 'ratingIcon'} onClick={() => {onSelect(3)}}/>
            <FontAwesomeIcon icon={isStared[3] ? 'fa-star fa-solid' : 'fa-regular fa-star'} className={isStared[3] ? 'starIcon ratingIcon' : 'ratingIcon'} onClick={() => {onSelect(4)}}/>
            <FontAwesomeIcon icon={isStared[4] ? 'fa-star fa-solid' : 'fa-regular fa-star'} className={isStared[4] ? 'starIcon ratingIcon' : 'ratingIcon'} onClick={() => {onSelect(5)}}/>
        </div>
    )
}

export { DropdownListCard, RatingFilterCard }
