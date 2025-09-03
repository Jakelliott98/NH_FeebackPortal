import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)
import { useState } from "react"
import '../CSS/DropdownFilter.css'

function GenericFilterDropdown ({resultFilter, filterbyFunction, arrayData}) {

    const [filterOpen, setFilterOpen] = useState(false);
    let icon = filterOpen ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down";
    
    function settingFilter (item) {
        filterbyFunction(item)
        setFilterOpen(false)
    }

    let dropdownList = <DropdownListDisplay array={arrayData} onClick={settingFilter}/>

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

export  { GenericFilterDropdown };