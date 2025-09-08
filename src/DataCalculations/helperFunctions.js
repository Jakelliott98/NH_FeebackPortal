import { getDateMonth, months } from './formatDate'


const getCliniciansWithFeedback = (results) => { return Array.from(new Set(results.map(item => item.clinician)))}

const filterByAssessmentType = (results, assessmentFilter) => {return assessmentFilter == 'All Assessments' ? results : results.filter(item => item.assessmentType == assessmentFilter)}

function filterByResponseType (results, responseFilter) {
  if (responseFilter !== 'All') {
    if (responseFilter == 'Positive') {
      return results.filter(item => item.averageScore > 2.5)
    } else if (responseFilter == 'Negative') {
      return results.filter(item => item.averageScore < 2.5)
    }
  } else {
    return results;
  }
}

function getSortedFeedback (sortBy, results) {

  switch (sortBy) {

    case 'Highest Rated': {
      return results.toSorted((a ,b) => b.averageScore - a.averageScore)
    }
    case 'Lowest Rated': {
      return results.toSorted((a,b) => a.averageScore - b.averageScore)
    }
    case 'Clinician (A-Z)': {
      return results.toSorted((a, b) => {
        if (a.clinician > b.clinician) {
            return 1
        } else if (a.clinician < b.clinician) {
            return -1
        } else {
            return 0
        }
    })
    }
    case 'Most Recent': {
      return results.sort((a, b) => {
        return new Date(b.timestamp) - new Date(a.timestamp)
    })
    }
    case 'Oldest First': {
      return results.sort((a, b) => {
        return new Date(a.timestamp) - new Date(b.timestamp)
    })
    }
    default: return results;
  }
}

function getActiveMonths (data) {
  let numberedMonths = Array.from(new Set(data.map(item => getDateMonth(item.timestamp))));
  numberedMonths.sort((a, b) => a - b)
  let labeledMonths = numberedMonths.map(item => months[item])
  return labeledMonths;
}

function filterByMonth (data) {

}

export { getSortedFeedback, getCliniciansWithFeedback, filterByAssessmentType, filterByResponseType, getActiveMonths }