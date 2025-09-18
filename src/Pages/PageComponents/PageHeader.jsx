import { useContext } from 'react'
import { DropdownFilter } from '../../Components/DropdownFilter/DropdownFilter'
import '../../CSS/PageHeader.css'
import resultsContext from '../../Context/resultsContext'
import { getActiveMonths } from '../../Utils/Helpers/helperFunctions'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)

let assessmentOptions = ['All Assessments', 'Health Assessment', 'Physiotherapy'];
let satisfactionOptions = ['All', 'Positive', 'Negative'];


function PageHeader ({title}) {

    return (
        <div className='headerDiv'>
            <h1 className='pageTitle'>{title}</h1>
            <DropdownFiltersComponent title={title} />
        </div>
    )

}

function DropdownFiltersComponent ({title}) {

    const { resetFilter, results, filterByDuration, filterByAssessment, filterByResponse } = useContext(resultsContext)
    const months = getActiveMonths(results.results)
    let satisfactionDropdownFilter = <DropdownFilter isDropdownList={true} dropdownTitle={results.responseFilter} onSelect={filterByResponse} dropdownOptions={satisfactionOptions} currentSelectedOption={results.responseFilter} dropdownType={'variable'}/>

    return (
        <div className='filterContainer'>
            <DropdownFilter iconTag="fa-solid fa-calendar" isDropdownList={true} dropdownTitle={results.durationFilter} onSelect={filterByDuration} dropdownOptions={months} currentSelectedOption={results.durationFilter} dropdownType={'variable'}/>
            <DropdownFilter iconTag="fa-solid fa-stethoscope" isDropdownList={true} dropdownTitle={results.assessmentFilter} onSelect={filterByAssessment} dropdownOptions={assessmentOptions} currentSelectedOption={results.assessmentFilter} dropdownType={'variable'}/>
            {title === 'Comments' ? satisfactionDropdownFilter : null}
            <button className='resetButton' onClick={() => {resetFilter()}}>
                <FontAwesomeIcon icon="fa-solid fa-rotate-right" />
                Reset
            </button>
        </div>
    )
}

export default PageHeader;