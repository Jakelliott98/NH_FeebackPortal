
import { months, getDateMonth } from "../Formatters/formatDate";

function filterQuestionResponses (data, question) {
    let dataArray = data.map(item => item.responses[question]);
    let totalScore = dataArray.reduce((a, b) => a + b, 0);
    return (Math.round((totalScore / (dataArray.length * 5)) * 100));
}

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

function filterByMonth (results, selectedMonth) {

  if (selectedMonth === 'Month') {
    return results;
  } else {
    let filteredArray = results.filter((item) => {
      let itemsMonth = months[getDateMonth(item.timestamp)];
      return itemsMonth === selectedMonth;
    })
    return filteredArray;
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

export {filterQuestionResponses, filterByAssessmentType, filterByResponseType, filterByMonth, getSortedFeedback }