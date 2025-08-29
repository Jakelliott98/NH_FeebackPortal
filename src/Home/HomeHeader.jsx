import {AssessmentDropdown, FilterDropdown, PositiveNegativeFilter} from '../Components/DropdownFilter'
import '../Components/PageHeader/PageHeader.css'

function PageHeader ({title}) {
    return (
    <div className='headerDiv'>
        <h1 className='pageTitle'>{title}</h1>
        <FilterOptions title={title} />
    </div>
    )
}

function FilterOptions ({title}) {


    return (
    <div className='filterContainer'>
        <FilterDropdown />
        <AssessmentDropdown />
        {title === 'Comments' ? <PositiveNegativeFilter /> : null}
    </div>
    )
}

export default PageHeader;