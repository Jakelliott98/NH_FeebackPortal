import { useContext, useState, useMemo, useEffect } from 'react';
import CommentCard from '../../Components/CommentCard';
import resultsContext from '../../Context/resultsContext';
import '../../CSS/CommentsPage.css'
import { DropdownFilter } from '../../Components/DropdownFilter/DropdownFilter';
import { getCliniciansWithFeedback, getSortedFeedback } from '../../DataCalculations/helperFunctions';

let sortByOptions = ['Clinician (A-Z)', 'Highest Rated','Lowest Rated', 'Most Recent', 'Oldest First']

function CommentsPage () {

    const { filteredFeedback } = useContext(resultsContext)
    const ClinicianTitle = 'All Doctors';
    const ratingsTitle = 'Satisfaction Rating';

    // Remove any feedback whithout a comment
    let feedbacksWithComment = filteredFeedback.filter(item => item.comments !== '')

    // Collect the clinicians who have had a response (Used for the Clinician dropdown filter)
    let cliniciansWithFeedback =  useMemo(() => {
        return getCliniciansWithFeedback(feedbacksWithComment)
    }, [feedbacksWithComment])

    const [sortOption, setSortOption] = useState('Sort By')
    const [rating, setRating] = useState('')
    const [selectedClinicians, setSelectedClinicians] = useState([]);
    const [activeFilters, setActiveFilters] = useState({byClinician: false, byRating: false,})
    
    useEffect(() => {
        if (rating == '') {
            setActiveFilters((prev) => {return {...prev, byRating: false,}})
        } else {
            setActiveFilters((prev) => {return {...prev, byRating: true,}})
        }
        if (selectedClinicians.length == 0) {
            setActiveFilters((prev) => {return {...prev, byClinician: false,}})
        } else {
            setActiveFilters((prev) => {return {...prev, byClinician: true,}})
        }
    }, [rating, selectedClinicians])

    // List returning the data in a sorted manner (First state is regular list)
    let sortedFeedback = getSortedFeedback(sortOption, filterFeedback(feedbacksWithComment, activeFilters, rating, selectedClinicians))

    function addSelectedClinician (clinician) {
        setSelectedClinicians((prev) => {
            if (prev.includes(clinician)) {
                return prev.filter(item => item !== clinician)
            } else {
                return [...prev, clinician]
            }
        })
    }

    function resetCommentFilters () {
        setSelectedClinicians([]);
        setRating('');
        setSortOption('Sort By')
    }

    return (
        <div className='commentLayout'>
            <div className='CommentFilters'>
                <DropdownFilter dataSet={true} resultFilter={sortOption} arrayData={sortByOptions} filterbyFunction={setSortOption}/>
                <div className='commentDropdowns'>
                    <DropdownFilter dataSet={false} resultFilter={ratingsTitle} filterbyFunction={setRating} />
                    <DropdownFilter dataSet={true} filterbyFunction={addSelectedClinician} resultFilter={ClinicianTitle} arrayData={cliniciansWithFeedback} type={'array'} dropdownType={selectedClinicians}/>
                    <button onClick={() => {resetCommentFilters()}}>Reset</button>
                </div>
            </div>
            <div className='commentContainer'>
            {
                sortedFeedback.map((item) => {return (
                    <CommentCard key={item.id} client={item} anonymous={false}/>
                )})
            }
            </div>
        </div>
    )
}

function filterFeedback (feedbackList, state, rating, selectedClinicians) {

    if (state.byRating == false && state.byClinician == false) {
        return feedbackList;
    } else {
        let list = feedbackList;
        if (state.byRating == true) {
            // Filter the list by rating
            list = list.filter(item => Math.round(item.averageScore) == rating)
        }
        if (state.byClinician === true) {
            // Filter the list by selected clinician
            list = list.filter(item =>  selectedClinicians.includes(item.clinician));
        }
        return list;
    }

}

export default CommentsPage;
