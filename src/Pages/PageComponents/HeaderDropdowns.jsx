import { useContext } from 'react'
import { DropdownFilter } from '../../Components/DropdownFilter/DropdownFilter'
import resultsContext from '../../Context/resultsContext'
import { getActiveMonths } from '../../Utils/Helpers/helperFunctions'
import ResetButton from '../../Components/DropdownFilter/ResetButton';
import styles from './HeaderDropdown.module.css'
import { UserButton } from '@clerk/clerk-react';


let assessmentOptions = ['All Assessments', 'Health Assessment', 'Physiotherapy'];
let satisfactionOptions = ['All', 'Positive', 'Negative'];

function DropdownFiltersComponent ({title}) {

    const { responses, resetFilter, filters, filterByDuration, filterByAssessment, filterByResponse } = useContext(resultsContext)
    const months = getActiveMonths(responses.value)
    let satisfactionDropdownFilter = <DropdownFilter isDropdownList={true} dropdownTitle={filters.responseFilter} onSelect={filterByResponse} dropdownOptions={satisfactionOptions} currentSelectedOption={filters.responseFilter} dropdownType={'variable'}/>

    return (
        <div className={styles['filter-container']}>
            <DropdownFilter iconTag="fa-solid fa-calendar" isDropdownList={true} dropdownTitle={filters.durationFilter} onSelect={filterByDuration} dropdownOptions={months} currentSelectedOption={filters.durationFilter} dropdownType={'variable'}/>
            <DropdownFilter iconTag="fa-solid fa-stethoscope" isDropdownList={true} dropdownTitle={filters.assessmentFilter} onSelect={filterByAssessment} dropdownOptions={assessmentOptions} currentSelectedOption={filters.assessmentFilter} dropdownType={'variable'}/>
            {title === 'Comments' ? satisfactionDropdownFilter : null}
            <ResetButton onClick={resetFilter}/>
            <UserButton />
        </div>
    )
}

export { DropdownFiltersComponent }