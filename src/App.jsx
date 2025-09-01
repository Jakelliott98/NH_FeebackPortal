import './App.css'
import { DropdownNav } from './Navbar/DropdownNavbar'
import { Outlet } from 'react-router-dom'
import logo from './SVG/NuffieldLogo.png'
import resultsContext from './Context/resultsContext'
import ResultsObject from './ResultsReducer'
import { useMemo } from 'react'

function App() {

    const { results, filterByAssessment, filterByResponse, filterByDuration, resetFilter } = ResultsObject();

    const filteredResults = useMemo(() => {
      let newResults = results.results;
      newResults= checkResponseType(newResults, results.responseFilter)
      newResults = checkAssessmentType(newResults, results.assessmentFilter)
      return newResults;
    }, [results])

  return (
    <resultsContext.Provider value={{filteredResults, results, filterByAssessment, filterByResponse, filterByDuration, resetFilter}} >
      <div className='portalLayout'>
        <div className='sidebarDiv'>
          <div className='imageContainer'><img className='nuffieldLogo' src={logo}/></div>  
          <DropdownNav />
        </div>
        <div className='contentDiv'>
          <Outlet />
        </div>
      </ div>
    </resultsContext.Provider>
  )
}

export default App;


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

function checkResultDates () {

}
