import { useContext } from 'react'
import {AssessmentDropdown, FilterDropdown, PositiveNegativeFilter} from '../Components/DropdownFilter'
import '../Components/PageHeader/PageHeader.css'
import filterContext from '../Context/filterContext'

function PageHeader ({title}) {
    return (
    <div className='headerDiv'>
        <h1 className='pageTitle'>{title}</h1>
        <FilterOptions title={title} />
    </div>
    )
}

function FilterOptions ({title}) {

    const {setDuration, setAssessmentType, setResponse} = useContext(filterContext)

    return (
    <div className='filterContainer'>
        <FilterDropdown />
        <AssessmentDropdown />
        {title === 'Comments' ? <PositiveNegativeFilter /> : null}
        <button onClick={() => {
            setAssessmentType('All Assessments')
            setDuration('Month')
            setResponse('All')
        }}>Reset</button>
    </div>
    )
}

export default PageHeader;