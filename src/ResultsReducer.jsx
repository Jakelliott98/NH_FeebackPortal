import { useReducer } from "react";
import rawdataReturned from "./DataCalculations/rawData";

let initializer = {
    results: rawdataReturned,
    assessmentFilter: 'All Assessments',
    responseFilter: 'All',
    durationFilter: 'Month',
}

function ResultsObject () {

    const [results, dispatch] = useReducer(resultsReducer, initializer)

    let filterByAssessment = (assessment) => {
        dispatch({
            type: 'filterByAssessment',
            value: assessment,
        })
    }

    let filterByDuration = (duration) => {
        dispatch({
            type: 'filterByDuration',
            value: duration,
        })
    }

    let filterByResponse = (response) => {
        dispatch({
            type: 'filterByResponse',
            value: response,
        })
    }

    let resetFilter = () => {
        dispatch({
            type:'reset',
        })
    }

    return { results, filterByAssessment, filterByResponse, filterByDuration, resetFilter }

}

function resultsReducer (state, action) {
    switch (action.type) {
        case 'filterByAssessment': {
            return {
                ...state,
                assessmentFilter: action.value,
            }
        }
        case 'filterByDuration': {
            return {
                ...state,
                durationFilter: action.value,
            }
        }
        case 'filterByResponse': {
            return {
                ...state,
                responseFilter: action.value,
            }
        }
        case 'reset': {
            return {
                ...state,
                assessmentFilter: 'All Assessments',
                responseFilter: 'All',
                durationFilter: 'Month',
            }
        }
        default: {
            return state;
        }
    }
}

export default ResultsObject


/* 

Filter on / off

AssessmentFilter
ResponseFilter
DurationFilter
ResetFilters

*/