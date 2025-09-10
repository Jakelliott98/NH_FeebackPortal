import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)
import { useState } from "react"
import '../../CSS/DropdownFilter.css'
import { DropdownListCard, RatingFilterCard } from './DropdownFilterComponents'

function DropdownFilter ({dropdownTitle, onSelect, dropdownOptions, isDropdownList, currentSelectedOption, dropdownType, currentRating, cssClass}) {

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    
    function handleOptionSelect (item) {
        onSelect(item)
        setIsFilterOpen(false)
    }

    let filterClass = cssClass ? 'titleFilter' : 'filterTitleCard';

    let dropdownCard = isDropdownList ? <DropdownListCard currentSelectedOption={currentSelectedOption} dropdownOptions={dropdownOptions} onSelect={handleOptionSelect} dropdownType={dropdownType}/> : <RatingFilterCard onSelect={handleOptionSelect} currentRating={currentRating}/>;

    return (
        <div className='filterComponent'>

            <div className={filterClass} onClick={() => {setIsFilterOpen(prev => !prev)}}>
                <div className='titleIconDiv'>
                    <FontAwesomeIcon className='dropdownIcon' icon="fa-solid fa-calendar"/>
                    <p>{dropdownTitle}</p>
                </div>
                <FontAwesomeIcon className='dropdownIcon' icon={isFilterOpen ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"} />
            </div >

            <div className={isFilterOpen ? '' : 'hide'}>
                {isFilterOpen ? dropdownCard : null}
            </div>
            
         </ div>
    )

}

export  { DropdownFilter };
