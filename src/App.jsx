import './App.css'
import { DropdownNav } from './Navbar/DropdownNavbar'
import { Outlet } from 'react-router-dom'
import logo from './SVG/NuffieldLogo.png'
import resultsContext from './Context/resultsContext'
import ResultsObject from './Hooks/useResultsReducer'
import { useMemo } from 'react'
import PageHeader from './Pages/PageComponents/PageHeader'
import {filterByResponseType, filterByAssessmentType, filterByMonth} from './Utils/Filters/FilterCalcs'
import useFetchResults from './Hooks/useFetchResults'

function App() {

  const { filters, filterByAssessment, filterByResponse, filterByDuration, resetFilter } = ResultsObject();
  const responses = useFetchResults()

  const filteredFeedback = useMemo(() => { 

    let filteredResults = responses;
    filteredResults= filterByResponseType(filteredResults, filters.responseFilter)
    filteredResults = filterByAssessmentType(filteredResults, filters.assessmentFilter)
    filteredResults = filterByMonth(filteredResults, filters.durationFilter)
    return filteredResults;
    
  }, [responses, filters])

  return (
    <resultsContext.Provider value={{ responses, filteredFeedback, filters, filterByAssessment, filterByResponse, filterByDuration, resetFilter}} >
      <div className='portal-layout'>
        <div className='sidebar-div'>
          <div className='image-container'>
            <img className='nuffield-logo' src={logo}/>
          </div>  
          <DropdownNav />
        </div>
        <div className='content-div'>
          <PageHeader />
          <div className='content-area'>
            <Outlet />
          </div>
        </div>
      </ div>
    </resultsContext.Provider>
  )
}

export default App;