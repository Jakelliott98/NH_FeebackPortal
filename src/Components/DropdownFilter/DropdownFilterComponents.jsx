import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)
import { useState } from 'react'
import { useContext } from 'react'
import resultsContext from '../../Context/resultsContext'

function DropdownListCard ({array, onClick, dropdownType, type}) {

    const { results } = useContext(resultsContext)

    // Type prop = decides between array or variables for the active class on the dropdown
    // dropdownType prop = gives the state of the active filter for comparison to be made

    return (
        <div className='dropdownOptionComponent'>
            {array.map((item) => {
                return (
                    <ul 
                    key={item}
                    className={
                        type == 'variable' && results[dropdownType] == item ? 'active dropdownOption' : type == 'array' && dropdownType.includes(item) ? 'active dropdownOption' : 'dropdownOption'
                    }
                    onClick={() => { onClick(item) }}
                    >
                        {item}
                    </ul>)
            })}
        </div>
    )
    
}

function RatingFilterCard ({filterbyFunction, rating}) {


    let isStared = [false, false, false, false, false]
    
    for (let i = 0; i < 6; i++) {
            if (i <= rating) {
                isStared[i - 1] = true;
            } else {
                isStared[i -1] = false;
            }
        }
/*
    function filterByRating (rating) {

        let newArr = [false, false, false, false, false]
        for (let i = 0; i < 5; i++) {
            if (i <= rating) {
                newArr[i] = true;
            } else {
                newArr[i] = false;
            }
        }

        setIsStared(newArr)

    }
*/
    return (
        <div className='dropdownOptionComponent'>
            <FontAwesomeIcon icon={isStared[0] ? 'fa-star fa-solid' : 'fa-regular fa-star'} className={isStared[0] ? 'starIcon' : ''} onClick={() => {filterbyFunction(1)}}/>
            <FontAwesomeIcon icon={isStared[1] ? 'fa-star fa-solid' : 'fa-regular fa-star'} className={isStared[1] ? 'starIcon' : ''} onClick={() => {filterbyFunction(2)}}/>
            <FontAwesomeIcon icon={isStared[2] ? 'fa-star fa-solid' : 'fa-regular fa-star'} className={isStared[2] ? 'starIcon' : ''} onClick={() => {filterbyFunction(3)}}/>
            <FontAwesomeIcon icon={isStared[3] ? 'fa-star fa-solid' : 'fa-regular fa-star'} className={isStared[3] ? 'starIcon' : ''} onClick={() => {filterbyFunction(4)}}/>
            <FontAwesomeIcon icon={isStared[4] ? 'fa-star fa-solid' : 'fa-regular fa-star'} className={isStared[4] ? 'starIcon' : ''} onClick={() => {filterbyFunction(5)}}/>
        </div>
    )
}

export { DropdownListCard, RatingFilterCard }