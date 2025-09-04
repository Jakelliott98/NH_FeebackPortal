import { useContext } from 'react'
import { DropdownFilter } from '../../Components/DropdownFilter/DropdownFilter'
import '../../CSS/PageHeader.css'
import resultsContext from '../../Context/resultsContext'

let durationOptions = ['Week', 'Month', '6 Months', 'Year']
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

    let satisfactionDropdownFilter = <DropdownFilter resultFilter={results.responseFilter} filterbyFunction={filterByResponse} arrayData={satisfactionOptions} />

    return (
        <div className='filterContainer'>
            <DropdownFilter dataSet={true} resultFilter={results.durationFilter} filterbyFunction={filterByDuration} arrayData={durationOptions} />
            <DropdownFilter dataSet={true} resultFilter={results.assessmentFilter} filterbyFunction={filterByAssessment} arrayData={assessmentOptions} />
            {title === 'Comments' ? satisfactionDropdownFilter : null}
            <button onClick={() => {resetFilter()}}>
                Reset
            </button>
        </div>
    )
}

export default PageHeader;