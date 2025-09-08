import { useReducer } from "react";

const initialState = {
    sortOption: 'Sort By',
    rating: '',
    selectedClinicians: [],
    activeFilters: {
        byClinician: false, 
        byRating: false,
    },
}

function useCommentFilters () {

    const [commentFilters, dispatch] = useReducer(CommentFilterReducer, initialState)

    function changeSortOption (newOption) {
        dispatch({
            type: 'setSortOption',
            value: newOption,
        })
    }

    function changeRatingFilter (newRating) {
        dispatch({
            type: 'setRating',
            value: newRating,
        })
    }

    function addClinicianFilter (clinician) {
        dispatch({
            type: 'setSelectedClinician',
            value: clinician,
        })
    }

    function resetFilters () {dispatch({type:'resetFilters'})}

    return {changeSortOption, changeRatingFilter, addClinicianFilter, resetFilters, commentFilters};

}

function CommentFilterReducer (state, action) {

    switch (action.type) {

        case 'setSortOption': {
            return {
                ...state,
                sortOption: action.value,
            }
        }

        case 'setRating': {
            return {
                ...state,
                rating: action.value == state.rating ? '' : action.value,
                activeFilters: {
                    ...state.activeFilters,
                    byRating: action.value == state.rating ? false : true,
                },
            }        
        }

        case 'setSelectedClinician': {
            if (state.selectedClinicians.includes(action.value)) {
                return {
                    ...state,
                    selectedClinicians: state.selectedClinicians.filter(item => item !== action.value),
                    activeFilters: {
                        ...state.activeFilters,
                        byClinician: state.selectedClinicians.filter(item => item !== action.value).length == 0 ? false : true, 
                    } 
                } 
            } else {
                return {
                    ...state,
                    selectedClinicians: [...state.selectedClinicians, action.value],
                    activeFilters: {
                        ...state.activeFilters,
                        byClinician: true, 
                    } 
                } 
            }      
        }

        case 'resetFilters': {
            return initialState
        }

        default: {
            return state;
        }

    }

}

export default useCommentFilters;