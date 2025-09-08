import { useContext } from 'react'
import { DropdownFilter } from '../../Components/DropdownFilter/DropdownFilter'
import '../../CSS/PageHeader.css'
import resultsContext from '../../Context/resultsContext'
import { getActiveMonths } from '../../DataCalculations/helperFunctions'

let durationOptions = ['July', 'August', 'September', 'October']
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

    const { filteredFeedback ,resetFilter, results, filterByDuration, filterByAssessment, filterByResponse } = useContext(resultsContext)
    const months = getActiveMonths(filteredFeedback)
    let satisfactionDropdownFilter = <DropdownFilter dataSet={true} resultFilter={results.responseFilter} filterbyFunction={filterByResponse} arrayData={satisfactionOptions} dropdownType={'responseFilter'} type={'variable'}/>

    return (
        <div className='filterContainer'>
            <DropdownFilter dataSet={true} resultFilter={results.durationFilter} filterbyFunction={filterByDuration} arrayData={months} dropdownType={'durationFilter'} type={'variable'}/>
            <DropdownFilter dataSet={true} resultFilter={results.assessmentFilter} filterbyFunction={filterByAssessment} arrayData={assessmentOptions} dropdownType={'assessmentFilter'} type={'variable'}/>
            {title === 'Comments' ? satisfactionDropdownFilter : null}
            <button onClick={() => {resetFilter()}}>
                Reset
            </button>
        </div>
    )
}

export default PageHeader;