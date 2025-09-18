import { useContext } from 'react'
import { DropdownFilter } from '../../Components/DropdownFilter/DropdownFilter'
import resultsContext from '../../Context/resultsContext'
import { getActiveMonths } from '../../Utils/Helpers/helperFunctions'
import ResetButton from '../../Components/DropdownFilter/ResetButton';

let assessmentOptions = ['All Assessments', 'Health Assessment', 'Physiotherapy'];
let satisfactionOptions = ['All', 'Positive', 'Negative'];

function DropdownFiltersComponent ({title}) {

    const { resetFilter, results, filterByDuration, filterByAssessment, filterByResponse } = useContext(resultsContext)
    const months = getActiveMonths(results.results)
    let satisfactionDropdownFilter = <DropdownFilter isDropdownList={true} dropdownTitle={results.responseFilter} onSelect={filterByResponse} dropdownOptions={satisfactionOptions} currentSelectedOption={results.responseFilter} dropdownType={'variable'}/>

    return (
        <div className='filterContainer'>
            <DropdownFilter iconTag="fa-solid fa-calendar" isDropdownList={true} dropdownTitle={results.durationFilter} onSelect={filterByDuration} dropdownOptions={months} currentSelectedOption={results.durationFilter} dropdownType={'variable'}/>
            <DropdownFilter iconTag="fa-solid fa-stethoscope" isDropdownList={true} dropdownTitle={results.assessmentFilter} onSelect={filterByAssessment} dropdownOptions={assessmentOptions} currentSelectedOption={results.assessmentFilter} dropdownType={'variable'}/>
            {title === 'Comments' ? satisfactionDropdownFilter : null}
            <ResetButton onClick={resetFilter}/>
        </div>
    )
}

export { DropdownFiltersComponent }

// Remove Button into own component