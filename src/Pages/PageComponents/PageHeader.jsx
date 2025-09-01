import { useContext } from 'react'
import {AssessmentDropdown, FilterDropdown, PositiveNegativeFilter} from '../../Components/DropdownFilter'
import '../../Components/PageHeader/PageHeader.css'
import resultsContext from '../../Context/resultsContext'

function PageHeader ({title}) {
    return (
    <div className='headerDiv'>
        <h1 className='pageTitle'>{title}</h1>
        <FilterOptions title={title} />
    </div>
    )
}

function FilterOptions ({title}) {

    const { resetFilter } = useContext(resultsContext)

    return (
    <div className='filterContainer'>
        <FilterDropdown />
        <AssessmentDropdown />
        {title === 'Comments' ? <PositiveNegativeFilter /> : null}
        <button onClick={() => {
            resetFilter()
        }}>Reset</button>
    </div>
    )
}

export default PageHeader;