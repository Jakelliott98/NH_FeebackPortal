import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)
import { useState } from "react"
import { DropdownListCard } from './DropdownFilterComponents'
import RatingFilterCard from './RatingFilterCard'
import styles from './DropdownFilter.module.css'

function DropdownFilter ({dropdownTitle, onSelect, dropdownOptions, isDropdownList, currentSelectedOption, dropdownType, currentRating, cssClass, iconTag}) {

    const [isOpen, setIsOpen] = useState(false);
    
    function handleOptionSelect (item) {
        onSelect(item)
        setIsOpen(false)
    }

    function closeDropdown () {setIsOpen(false)};

    let filterClass = cssClass ? `${styles['titleFilter']}` : `${styles['filter-title-card']}`;

    let dropdownCard = isDropdownList ? 
        ( <DropdownListCard closeDropdown={closeDropdown} currentSelectedOption={currentSelectedOption} dropdownOptions={dropdownOptions} onSelect={handleOptionSelect} dropdownType={dropdownType} cssClass={cssClass}/> ) 
        : ( <RatingFilterCard closeDropdown={() => {closeDropdown()}} onSelect={handleOptionSelect} currentRating={currentRating}/> ) ;

    return (
        <div className={styles['filter-component']}>
            <div className={filterClass} onClick={() => {setIsOpen(prev => !prev)}} >
                <div className={styles['title-icon-div']}>
                    <FontAwesomeIcon className={styles['dropdown-icon']} icon={iconTag} />
                    <p>{dropdownTitle}</p>
                </div>
                <FontAwesomeIcon className={styles['dropdown-icon']} icon={isOpen ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"} />
            </div >
            <div className={ isOpen ? null : `${styles['hide']}`}>
                { isOpen ? dropdownCard : null }
            </div>
         </ div>
    )

}

export  { DropdownFilter };
