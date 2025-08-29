import {AssessmentDropdown, FilterDropdown} from '../Components/DropdownFilter'

function HomeHeader ({title, duration, setAssessmentType, setDuration, assessmentType}) {
    return (
    <div className='headerDiv'>
        <h1>{title}</h1>
        <FilterDropdown onChange={setDuration} duration={duration}/>
        <AssessmentDropdown assessmentType={assessmentType} onChange={setAssessmentType} />
    </div>
    )
}

export default HomeHeader;