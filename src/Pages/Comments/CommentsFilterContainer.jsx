import ResetButton from '../../Components/DropdownFilter/ResetButton';
import { DropdownFilter } from '../../Components/DropdownFilter/DropdownFilter';
import { useContext, useMemo } from 'react';
import commentsContext from '../../Context/commentsContext';
import { getCliniciansWithFeedback } from '../../Utils/Helpers/helperFunctions';
import styles from './CommentsPage.module.css'

let sortByOptions = ['Clinician (A-Z)', 'Highest Rated','Lowest Rated', 'Most Recent', 'Oldest First']

function CommentFilterContainer () {

    const { changeSortOption, changeRatingFilter, addClinicianFilter, resetFilters, commentFilters, sortedFeedback} = useContext(commentsContext)
    const { sortOption, rating, selectedClinicians } = commentFilters;

    let cliniciansWithFeedback =  useMemo(() => {
        return getCliniciansWithFeedback(sortedFeedback)
    }, [])

    return (
            <div className={styles['comment-filters']}>
                <DropdownFilter isDropdownList={true} dropdownTitle={sortOption} dropdownOptions={sortByOptions} onSelect={changeSortOption} dropdownType={'variable'}/>
                <div className={styles['comment-dropdowns']}>
                    <DropdownFilter isDropdownList={false} dropdownTitle={'Satisfaction Rating'} onSelect={changeRatingFilter} currentRating={rating} />
                    <DropdownFilter isDropdownList={true} dropdownTitle={'All Doctors'} onSelect={addClinicianFilter} dropdownOptions={cliniciansWithFeedback.allClinicians} dropdownType={'array'} currentSelectedOption={selectedClinicians}/>
                    <ResetButton onClick={resetFilters} />
                </div>
            </div>
    )
}

export default CommentFilterContainer;