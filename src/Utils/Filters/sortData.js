function getSortedFeedback (sortBy, results) {

  switch (sortBy) {

    case 'Highest Rated': {
      return results.toSorted((a ,b) => b.average_score - a.average_score)
    }
    case 'Lowest Rated': {
      return results.toSorted((a,b) => a.average_score - b.average_score)
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
        return new Date(b.created_at) - new Date(a.created_at)
    })
    }
    case 'Oldest First': {
      return results.sort((a, b) => {
        return new Date(a.created_at) - new Date(b.created_at)
    })
    }
    default: return results;
  }
}

export { getSortedFeedback }