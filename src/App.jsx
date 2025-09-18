import './App.css'
import { DropdownNav } from './Navbar/DropdownNavbar'
import { Outlet } from 'react-router-dom'
import logo from './SVG/NuffieldLogo.png'
import resultsContext from './Context/resultsContext'
import ResultsObject from './Hooks/useResultsReducer'
import { useMemo, useState } from 'react'
import PageHeader from './Pages/PageComponents/PageHeader'
import {filterByResponseType, filterByAssessmentType, filterByMonth} from './Utils/Filters/FilterCalcs'

function App() {

  const { results, filterByAssessment, filterByResponse, filterByDuration, resetFilter } = ResultsObject();

  const filteredFeedback = useMemo(() => { 

    let filteredResults = results.results;
    filteredResults= filterByResponseType(filteredResults, results.responseFilter)
    filteredResults = filterByAssessmentType(filteredResults, results.assessmentFilter)
    filteredResults = filterByMonth(filteredResults, results.durationFilter)
    return filteredResults;
    
  }, [results])

  const [currentPage, setCurrentPage] = useState('Home')

  return (
    <resultsContext.Provider value={{setCurrentPage, filteredFeedback, results, filterByAssessment, filterByResponse, filterByDuration, resetFilter}} >
      <div className='portalLayout'>
        <div className='sidebarDiv'>
          <div className='imageContainer'>
            <img className='nuffieldLogo' src={logo}/>
          </div>  
          <DropdownNav />
        </div>
        <div className='contentDiv'>
          <PageHeader title={currentPage}/>
          <div className='contentArea'>
            <Outlet />
          </div>
        </div>
      </ div>
    </resultsContext.Provider>
  )
}

export default App;