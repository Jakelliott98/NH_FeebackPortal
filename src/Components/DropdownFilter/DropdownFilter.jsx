import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)
import { useState } from "react"
import '../../CSS/DropdownFilter.css'
import { DropdownListCard, RatingFilterCard } from './DropdownFilterComponents'

function DropdownFilter ({resultFilter, filterbyFunction, arrayData, dataSet}) {

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    let filterArrowIcon = isFilterOpen ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down";
    
    function settingFilter (item) {
        filterbyFunction(item)
        setIsFilterOpen(false)
    }

    let dropdownList = dataSet ? <DropdownListCard array={arrayData} onClick={settingFilter}/> : <RatingFilterCard filterbyFunction={filterbyFunction}/>;

    return (
        <div className='filterComponent'>
            <div className='filterTitleCard' onClick={() => {setIsFilterOpen(prev => !prev)}}>
                <div className='titleIconDiv'>
                    <FontAwesomeIcon className='dropdownIcon' icon="fa-solid fa-calendar"/>
                    <p>{resultFilter}</p>
                </div>
                <FontAwesomeIcon className='dropdownIcon' icon={filterArrowIcon} />
            </div >
            <div className={isFilterOpen ? '' : 'hide'}>
                {isFilterOpen ? dropdownList : null}
            </div>
         </ div>
    )

}

export  { DropdownFilter };