import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)

import { useContext, useState } from "react"
import '../CSS/DropdownFilter.css'
import filterContext from '../Context/filterContext'

// NEED TO ADD THE CLOSING LOGIC (ONCLICK ELSEWHERE)
// MERGE THE 2 COMPONENTS INTO 1?

let durationArray = ['Week', 'Month', '6 Months', 'Year']

function FilterDropdown () {

    const {duration, setDuration} = useContext(filterContext)

    let array = durationArray;
    const [filterOpen, setFilterOpen] = useState(false)

    let icon = filterOpen ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down";

    let dropdownList = (
        <div className='dropdownOptionComponent'>
            {array.map((item) => {
            return (<ul 
                key={item}
                className='dropdownOption' 
                onClick={() => {
                    setDuration(`${item}`)
                    setFilterOpen(false)}}>{item}</ul>)
            })}
        </div>
    )

    return (
        <div className='filterComponent'>
            <div className='filterTitleCard' onClick={() => {setFilterOpen(prev => !prev)}}>
                <div className='titleIconDiv'>
                <FontAwesomeIcon className='dropdownIcon' icon="fa-solid fa-calendar"/>
                <p>{duration}</p>
                </div>
                <FontAwesomeIcon className='dropdownIcon' icon={icon} />
            </div >
            <div className={filterOpen ? '' : 'hide'}>
            {filterOpen ? dropdownList : null}
            </div>
         </ div>
    )
}

function AssessmentDropdown () {
 
    let array = ['All Assessments', 'Health Assessment', 'Physiotherapy'];
    const [filterOpen, setFilterOpen] = useState(false)
    const {assessmentType, setAssessmentType} = useContext(filterContext)

    
    let icon = filterOpen ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down";

    let dropdownList = (
        <div className='dropdownOptionComponent'>
            {array.map((item) => {
            return (<ul 
                key={item}
                className='dropdownOption' 
                onClick={() => {
                    setAssessmentType(`${item}`)
                    setFilterOpen(false)}}>{item}</ul>)
            })}
        </div>
    )

    return (
        <div className='filterComponent'>
            <div className='filterTitleCard' onClick={() => {setFilterOpen(prev => !prev)}}>
                <p>{assessmentType}</p>
                <FontAwesomeIcon className='dropdownIcon' icon={icon} />
            </div >
            <div className={filterOpen ? '' : 'hide'}>
            {filterOpen ? dropdownList : null}
            </div>
         </ div>
    )
    
}

function PositiveNegativeFilter () {

    const { setResponse } = useContext(filterContext)
    
    const [filterOpen, setFilterOpen] = useState(false)
    let array = ['All', 'Positive', 'Negative'];
    let icon = filterOpen ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down";

    let dropdownList = (
        <div className='dropdownOptionComponent'>
            {array.map((item) => {
            return (<ul 
                key={item}
                className='dropdownOption' 
                onClick={() => {
                    setFilterOpen(false)
                    setResponse(item)
                }}
                >
                {item}
                </ul>)
            })}
        </div>
    )

    return (
        <div className='filterComponent'>
            <div className='filterTitleCard' onClick={() => {setFilterOpen(prev => !prev)}}>
                <div className='titleIconDiv'>
                    <p>Positive / Negative</p>
                </div>
                <FontAwesomeIcon className='dropdownIcon' icon={icon} />
            </div >
            <div className={filterOpen ? '' : 'hide'}>
            {filterOpen ? dropdownList : null}
            </div>
         </ div>
    )
}


export  {FilterDropdown, AssessmentDropdown, PositiveNegativeFilter};