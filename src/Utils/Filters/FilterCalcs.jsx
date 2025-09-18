
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

export {filterQuestionResponses, filterByAssessmentType, filterByResponseType, filterByMonth }