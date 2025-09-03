import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)
import { useState } from "react"
import '../CSS/DropdownFilter.css'

function GenericFilterDropdown ({resultFilter, filterbyFunction, arrayData, dataSet}) {

    const [filterOpen, setFilterOpen] = useState(false);
    let icon = filterOpen ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down";
    
    function settingFilter (item) {
        filterbyFunction(item)
        setFilterOpen(false)
    }

    let dropdownList = dataSet ? <DropdownListDisplay array={arrayData} onClick={settingFilter}/> : <RatingDisplay filterbyFunction={filterbyFunction}/>;

    return (
        <div className='filterComponent'>
            <div className='filterTitleCard' onClick={() => {setFilterOpen(prev => !prev)}}>
                <div className='titleIconDiv'>
                <FontAwesomeIcon className='dropdownIcon' icon="fa-solid fa-calendar"/>
                <p>{resultFilter}</p>
                </div>
                <FontAwesomeIcon className='dropdownIcon' icon={icon} />
            </div >
            <div className={filterOpen ? '' : 'hide'}>
            {filterOpen ? dropdownList : null}
            </div>
         </ div>
    )

}

function DropdownListDisplay ({array, onClick}) {
    return (
        <div className='dropdownOptionComponent'>
            {array.map((item) => {
            return (<ul 
                key={item}
                className='dropdownOption' 
                onClick={() => {
                    onClick(item)
                }}>
                {item}
                </ul>)
            })}
        </div>
    )
}

function RatingDisplay ({filterbyFunction}) {
    const [stars, setStars] = useState([true, true, true, false, false])

    let solidStar = 'fa-star fa-solid';
    let regularStar = 'fa-regular fa-star';

    function rateTheStars (rating) {
        let newArr = [false, false, false, false, false]
        for (let i = 0; i < 5; i++) {
            if (i <= rating) {
                newArr[i] = true;
            } else {
                newArr[i] = false;
            }
        }
        filterbyFunction(rating + 1)
        setStars(newArr)
    }

    return (
        <div className='dropdownOptionComponent'>
            <FontAwesomeIcon icon={stars[0] ? solidStar : regularStar} className={stars[0] ? 'starIcon' : ''} onClick={() => {rateTheStars(0)}}/>
            <FontAwesomeIcon icon={stars[1] ? solidStar : regularStar} className={stars[1] ? 'starIcon' : ''} onClick={() => {rateTheStars(1)}}/>
            <FontAwesomeIcon icon={stars[2] ? solidStar : regularStar} className={stars[2] ? 'starIcon' : ''} onClick={() => {rateTheStars(2)}}/>
            <FontAwesomeIcon icon={stars[3] ? solidStar : regularStar} className={stars[3] ? 'starIcon' : ''} onClick={() => {rateTheStars(3)}}/>
            <FontAwesomeIcon icon={stars[4] ? solidStar : regularStar} className={stars[4] ? 'starIcon' : ''} onClick={() => {rateTheStars(4)}}/>
        </div>
    )
}

export  { GenericFilterDropdown };