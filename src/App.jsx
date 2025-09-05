import './App.css'
import { DropdownNav } from './Navbar/DropdownNavbar'
import { Outlet } from 'react-router-dom'
import logo from './SVG/NuffieldLogoWhite.png'
import resultsContext from './Context/resultsContext'
import ResultsObject from './Hooks/useResultsReducer'
import { useMemo } from 'react'
import './CSS/DataCards.css'
import PageHeader from './Pages/PageComponents/PageHeader'
import { filterByAssessmentType, filterByResponseType } from './DataCalculations/helperFunctions'

function App() {

    const { results, filterByAssessment, filterByResponse, filterByDuration, resetFilter } = ResultsObject();

    const filteredFeedback = useMemo(() => { //filteredFeedback

      let filteredResults = results.results; //startingFeedback
      filteredResults= filterByResponseType(filteredResults, results.responseFilter)
      filteredResults = filterByAssessmentType(filteredResults, results.assessmentFilter)
      return filteredResults;
      
    }, [results])

  return (
    <resultsContext.Provider value={{filteredFeedback, results, filterByAssessment, filterByResponse, filterByDuration, resetFilter}} >
      <div className='portalLayout'>
        <div className='sidebarDiv'>
          <div className='imageContainer'><img className='nuffieldLogo' src={logo}/></div>  
          <DropdownNav />
        </div>
        <div className='contentDiv'>
          <PageHeader title={'Home'}/>
          <div className='contentArea'>
            <Outlet />
          </div>
        </div>
      </ div>
    </resultsContext.Provider>
  )
}

export default App;