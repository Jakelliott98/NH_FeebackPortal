import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)

import { useState } from "react"
import '../CSS/DropdownFilter.css'

// NEED TO ADD THE CLOSING LOGIC (ONCLICK ELSEWHERE)

function FilterDropdown () {

    const [activeFilter, setActiveFilter] = useState('7 Days')
    const [filterOpen, setFilterOpen] = useState(false)
    
    let icon = filterOpen ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down";

    let dropdownList = (
        <div className='dropdownOptionComponent'>
            <ul className='dropdownOption' onClick={() => {setActiveFilter('7 Days'); setFilterOpen(false)}}>Last Week</ul>
            <ul className='dropdownOption' onClick={() => {setActiveFilter('This Month'); setFilterOpen(false)}}>Last Month</ul>
            <ul className='dropdownOption' onClick={() => {setActiveFilter('6 Months'); setFilterOpen(false)}}>6 Months</ul>
            <ul className='dropdownOption' onClick={() => {setActiveFilter('This Year'); setFilterOpen(false)}}>Year</ul>
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



export default FilterDropdown;