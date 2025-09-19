
function DropdownListCard ({dropdownOptions, onSelect, currentSelectedOption, dropdownType, cssClass, closeDropdown}) {

    let divClass = cssClass == 'titleFilter' ? 'QuestionDropdown dropdownOptionComponent' : 'dropdownOptionComponent' ;

    return (
        <>
            <div className='backgroundDropdown' onClick={() => {closeDropdown()}}></div>
            <div className={divClass}>
                {dropdownOptions.map((item) => {
                    return (
                        <ul 
                        key={item}
                        className={
                            dropdownType == 'variable' && currentSelectedOption == item ? 'active dropdownOption' : dropdownType == 'array' && currentSelectedOption.includes(item) ? 'active dropdownOption' : 'dropdownOption'
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
