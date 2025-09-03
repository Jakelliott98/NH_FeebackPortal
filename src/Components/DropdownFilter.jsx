import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)
import { useContext, useState } from "react"
import '../CSS/DropdownFilter.css'
import resultsContext from '../Context/resultsContext'

// NEED TO ADD THE CLOSING LOGIC (ONCLICK ELSEWHERE)
// MERGE THE 2 COMPONENTS INTO 1?

let durationArray = ['Week', 'Month', '6 Months', 'Year']

function FilterDropdown () {

    const { results, filterByDuration } = useContext(resultsContext)

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
                    filterByDuration(item)
                    setFilterOpen(false)
                }}>
                {item}
                </ul>)
            })}
        </div>
    )

    return (
        <div className='filterComponent'>
            <div className='filterTitleCard' onClick={() => {setFilterOpen(prev => !prev)}}>
                <div className='titleIconDiv'>
                <FontAwesomeIcon className='dropdownIcon' icon="fa-solid fa-calendar"/>
                <p>{results.durationFilter}</p>
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
    const { filterByAssessment, results } = useContext(resultsContext);
    
    
    let icon = filterOpen ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down";

    let dropdownList = (
        <div className='dropdownOptionComponent'>
            {array.map((item) => {
            return (<ul 
                key={item}
                className='dropdownOption' 
                onClick={() => {
                    filterByAssessment(`${item}`)
                    setFilterOpen(false)}}>{item}</ul>)
            })}
        </div>
    )

    return (
        <div className='filterComponent'>
            <div className='filterTitleCard' onClick={() => {setFilterOpen(prev => !prev)}}>
                <p>{results.assessmentFilter}</p>
                <FontAwesomeIcon className='dropdownIcon' icon={icon} />
            </div >
            <div className={filterOpen ? '' : 'hide'}>
            {filterOpen ? dropdownList : null}
            </div>
         </ div>
    )
    
}

function PositiveNegativeFilter () {

    const { filterByResponse } = useContext(resultsContext);

    
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
                    filterByResponse(item)
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

const drArray = ['Peter', 'Adam', 'Thomas', 'Claire', 'Suzie']

function ClinicianDropdown () {
    
    let listOfDoctors = drArray;
    const [filterOpen, setFilterOpen] = useState(false)
    let icon = filterOpen ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down";

    let dropdownList = (
        <div className='dropdownOptionComponent'>
            {listOfDoctors.map((item) => {
            return (<ul 
                key={item}
                className='dropdownOption' 
                onClick={() => {
                    setFilterOpen(false)
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
                    <p>All Doctors</p>
                </div>
                <FontAwesomeIcon className='dropdownIcon' icon={icon} />
            </div >
            <div className={filterOpen ? '' : 'hide'}>
            {filterOpen ? dropdownList : null}
            </div>
         </ div>
    ) 
}

function SatisfactionRating () {
    
    const [filterOpen, setFilterOpen] = useState(false)
    let icon = filterOpen ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down";

    let dropdownList = (
        <div className='dropdownOptionComponent'>
        </div>
    )

    return (
        <div className='filterComponent'>
            <div className='filterTitleCard' onClick={() => {setFilterOpen(prev => !prev)}}>
                <div className='titleIconDiv'>
                    <p>Rating</p>
                </div>
                <FontAwesomeIcon className='dropdownIcon' icon={icon} />
            </div >
            <div className={filterOpen ? '' : 'hide'}>
            {filterOpen ? dropdownList : null}
            </div>
         </ div>
    ) 
}

function SortBy () {
    
    const [filterOpen, setFilterOpen] = useState(false)
    let icon = filterOpen ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down";
    let optionsArray = ['Rating', 'Doctor', 'Date', 'Satisfaction']

    let dropdownList = (
        <div className='dropdownOptionComponent'>
            {optionsArray.map((item) => {
                return (<ul 
                    key={item}
                    className='dropdownOption' 
                    onClick={() => {
                        setFilterOpen(false)
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
                    <p>Sort By</p>
                </div>
                <FontAwesomeIcon className='dropdownIcon' icon={icon} />
            </div >
            <div className={filterOpen ? '' : 'hide'}>
            {filterOpen ? dropdownList : null}
            </div>
         </ div>
    ) 
}

export  {FilterDropdown, AssessmentDropdown, PositiveNegativeFilter, ClinicianDropdown, SatisfactionRating, SortBy};