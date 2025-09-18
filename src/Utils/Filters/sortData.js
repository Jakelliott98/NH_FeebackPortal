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

export { getSortedFeedback }