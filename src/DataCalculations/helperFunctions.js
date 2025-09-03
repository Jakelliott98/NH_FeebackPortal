function returnDrList (results) {
  const list = new Set(results.map(item => item.clinician))
  return Array.from(list);
}

function checkAssessmentType (results, assessmentFilter) {
  if (assessmentFilter !== 'All Assessments') {
        return results.filter(item => item.assessmentType == assessmentFilter)
  } else {
    return results;
  }
}

function checkResponseType (results, responseFilter) {
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

export { returnDrList, checkAssessmentType, checkResponseType }