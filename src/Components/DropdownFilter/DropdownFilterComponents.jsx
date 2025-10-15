import styles from './DropdownFilter.module.css'

function DropdownListCard ({ dropdownOptions, onSelect, currentSelectedOption, dropdownType, cssClass, closeDropdown }) {

    let divClass = cssClass == 'titleFilter' ? `${styles['question-dropdown']} ${styles['dropdown-option-component']}` : `${styles['dropdown-option-component']}` ;

    return (
        <>
            <div className={styles['background-dropdown']} onClick={() => {closeDropdown()}}></div>
            <div className={divClass}>
                {dropdownOptions.map((item) => {
                    return (
                        <ul 
                        key={item}
                        className={
                            dropdownType == 'variable' && currentSelectedOption == item ? `${styles['active']} ${styles['dropdownOption']}` : dropdownType == 'array' && currentSelectedOption.includes(item) ? `${styles['active']} ${styles['dropdownOption']}` : `${styles['dropdownOption']}`
                        }
                        onClick={() => { onSelect(item) }}
                        >
                            {item}
                        </ul>)
                })}
            </div>
        </>
    )
    
}


export { DropdownListCard }
