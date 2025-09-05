import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)
import { useState } from "react"
import '../../CSS/DropdownFilter.css'
import { DropdownListCard, RatingFilterCard } from './DropdownFilterComponents'

function DropdownFilter ({resultFilter, filterbyFunction, arrayData, dataSet, dropdownType, type}) {

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    
    function handleFilterClick (item) {
        filterbyFunction(item)
        setIsFilterOpen(false)
    }

    let dropdownList = dataSet ? <DropdownListCard dropdownType={dropdownType} array={arrayData} onClick={handleFilterClick} type={type}/> : <RatingFilterCard filterbyFunction={filterbyFunction}/>;

    return (
        <div className='filterComponent'>
            <div className='filterTitleCard' onClick={() => {setIsFilterOpen(prev => !prev)}}>
                <div className='titleIconDiv'>
                    <FontAwesomeIcon className='dropdownIcon' icon="fa-solid fa-calendar"/>
                    <p>{resultFilter}</p>
                </div>
                <FontAwesomeIcon className='dropdownIcon' icon={isFilterOpen ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"} />
            </div >
            <div className={isFilterOpen ? '' : 'hide'}>
                {isFilterOpen ? dropdownList : null}
            </div>
         </ div>
    )

}

export  { DropdownFilter };