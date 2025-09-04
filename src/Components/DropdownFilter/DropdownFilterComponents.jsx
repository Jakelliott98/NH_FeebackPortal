import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)
import { useState } from 'react'

function DropdownListCard ({array, onClick}) {

    return (
        <div className='dropdownOptionComponent'>
            {array.map((item) => {
                return (
                    <ul 
                    key={item}
                    className='dropdownOption' 
                    onClick={() => { onClick(item) }}
                    >
                        {item}
                    </ul>)
            })}
        </div>
    )
    
}

function RatingFilterCard ({filterbyFunction}) {

    const [isStared, setIsStared] = useState([false, false, false, false, false])

    function filterByRating (rating) {

        let newArr = [false, false, false, false, false]
        for (let i = 0; i < 5; i++) {
            if (i <= rating) {
                newArr[i] = true;
            } else {
                newArr[i] = false;
            }
        }

        filterbyFunction(rating + 1)
        setIsStared(newArr)

    }

    return (
        <div className='dropdownOptionComponent'>
            <FontAwesomeIcon icon={isStared[0] ? 'fa-star fa-solid' : 'fa-regular fa-star'} className={isStared[0] ? 'starIcon' : ''} onClick={() => {filterByRating(0)}}/>
            <FontAwesomeIcon icon={isStared[1] ? 'fa-star fa-solid' : 'fa-regular fa-star'} className={isStared[1] ? 'starIcon' : ''} onClick={() => {filterByRating(1)}}/>
            <FontAwesomeIcon icon={isStared[2] ? 'fa-star fa-solid' : 'fa-regular fa-star'} className={isStared[2] ? 'starIcon' : ''} onClick={() => {filterByRating(2)}}/>
            <FontAwesomeIcon icon={isStared[3] ? 'fa-star fa-solid' : 'fa-regular fa-star'} className={isStared[3] ? 'starIcon' : ''} onClick={() => {filterByRating(3)}}/>
            <FontAwesomeIcon icon={isStared[4] ? 'fa-star fa-solid' : 'fa-regular fa-star'} className={isStared[4] ? 'starIcon' : ''} onClick={() => {filterByRating(4)}}/>
        </div>
    )
}

export { DropdownListCard, RatingFilterCard }