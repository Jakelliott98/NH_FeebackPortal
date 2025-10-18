
import { months, getDateMonth } from "../Formatters/formatDate";

function filterQuestionResponses (data, currentQuestion, assessment) {
  const questionResponses = data
    .filter(item => item.assessment_type.value == assessment) // Returns items which match the current selected assessment type ARRAY of Responses
    .map(item => item.responses) // Returns those responses value in an ARRAY of ARRAYS
    .flat(1) // Flattens to a single array of all question responses
    .filter(item => item.id == currentQuestion.id) // Filters out to return only responses for this question
    .map(item => item.value) // Returns only the values for the responses
  const sum = questionResponses.reduce((a, b) => a + b, 0) // Sums the responses
  return (Math.round((sum / (questionResponses.length * 5)) * 100));
}

const filterByAssessmentType = (results, assessmentFilter) => {return assessmentFilter == 'All Assessments' ? results : results.filter(item => item.assessment_type.value == assessmentFilter)}

function filterByResponseType (results, responseFilter) {
  if (responseFilter !== 'All') {
    if (responseFilter == 'Positive') {
      return results.filter(item => item.average_score > 2.5)
    } else if (responseFilter == 'Negative') {
      return results.filter(item => item.average_score < 2.5)
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
      let itemsMonth = months[getDateMonth(item.created_at)];
      return itemsMonth === selectedMonth;
    })

  return filteredArray;
}

}

export {filterQuestionResponses, filterByAssessmentType, filterByResponseType, filterByMonth }