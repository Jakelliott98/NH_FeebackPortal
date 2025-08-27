import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)

import { useState } from "react"
import '../CSS/DropdownFilter.css'

// NEED TO ADD THE CLOSING LOGIC (ONCLICK ELSEWHERE)
// MERGE THE 2 COMPONENTS INTO 1?

let durationArray = ['Week', 'Month', '6 Months', 'Year']
let HealthAssessments = ['All Assessments', 'Health Assessments', 'Physiotherapy']

function FilterDropdown () {

    let array = durationArray;
    const [activeFilter, setActiveFilter] = useState('7 Days')
    const [filterOpen, setFilterOpen] = useState(false)

    let icon = filterOpen ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down";

    let dropdownList = (
        <div className='dropdownOptionComponent'>
            {array.map((item) => {
            return (<ul 
                key={item}
                className='dropdownOption' 
                onClick={() => {
                    setActiveFilter(`${item}`)
                    setFilterOpen(false)}}>{item}</ul>)
            })}
        </div>
    )

    return (
        <div className='filterComponent'>
            <div className='filterTitleCard' onClick={() => {setFilterOpen(prev => !prev)}}>
                <div className='titleIconDiv'>
                <FontAwesomeIcon className='dropdownIcon' icon="fa-solid fa-calendar"/>
                <p>{activeFilter}</p>
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
 
    let array = ['All Assessments', 'Health Assessments', 'Physiotherapy'];
    const [activeFilter, setActiveFilter] = useState('All Assessments')
    const [filterOpen, setFilterOpen] = useState(false)
    
    let icon = filterOpen ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down";

    let dropdownList = (
        <div className='dropdownOptionComponent'>
            {array.map((item) => {
            return (<ul 
                key={item}
                className='dropdownOption' 
                onClick={() => {
                    setActiveFilter(`${item}`)
                    setFilterOpen(false)}}>{item}</ul>)
            })}
        </div>
    )

    return (
        <div className='filterComponent'>
            <div className='filterTitleCard' onClick={() => {setFilterOpen(prev => !prev)}}>
                <p>{activeFilter}</p>
                <FontAwesomeIcon className='dropdownIcon' icon={icon} />
            </div >
            <div className={filterOpen ? '' : 'hide'}>
            {filterOpen ? dropdownList : null}
            </div>
         </ div>
    )
    
}


export  {FilterDropdown, AssessmentDropdown};