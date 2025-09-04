import { useContext } from 'react'
import { DropdownFilter } from '../../Components/DropdownFilter/DropdownFilter'
import '../../CSS/PageHeader.css'
import resultsContext from '../../Context/resultsContext'

let durationArray = ['Week', 'Month', '6 Months', 'Year']
let assessmentarray = ['All Assessments', 'Health Assessment', 'Physiotherapy'];
let responseArray = ['All', 'Positive', 'Negative'];


function PageHeader ({title}) {
    return (
    <div className='headerDiv'>
        <h1 className='pageTitle'>{title}</h1>
        <FilterOptions title={title} />
    </div>
    )
}

function FilterOptions ({title}) {

    const { resetFilter, results, filterByDuration, filterByAssessment, filterByResponse } = useContext(resultsContext)

    let positiveNegative = <DropdownFilter resultFilter={results.responseFilter} filterbyFunction={filterByResponse} arrayData={responseArray} />

    return (
    <div className='filterContainer'>
        <DropdownFilter dataSet={true} resultFilter={results.durationFilter} filterbyFunction={filterByDuration} arrayData={durationArray} />
        <DropdownFilter dataSet={true} resultFilter={results.assessmentFilter} filterbyFunction={filterByAssessment} arrayData={assessmentarray} />
        {title === 'Comments' ? positiveNegative : null}
        <button onClick={() => {
            resetFilter()
        }}>Reset</button>
    </div>
    )
}

export default PageHeader;