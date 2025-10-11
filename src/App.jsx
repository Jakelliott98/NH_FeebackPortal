import './App.css'
import { DropdownNav } from './Navbar/DropdownNavbar'
import { Outlet } from 'react-router-dom'
import logo from './SVG/NuffieldLogo.png'
import resultsContext from './Context/resultsContext'
import ResultsObject from './Hooks/useResultsReducer'
import { useMemo, useState, useEffect } from 'react'
import PageHeader from './Pages/PageComponents/PageHeader'
import {filterByResponseType, filterByAssessmentType, filterByMonth} from './Utils/Filters/FilterCalcs'
import supabase from './Utils/Data/fetchAPIData'

function App() {

  const { results, filterByAssessment, filterByResponse, filterByDuration, resetFilter } = ResultsObject();
  let [responses, setResponses] = useState([]);

  useEffect(() => {

    async function importFeedbackDatabase () {
      let { data: Feedback_Response_Database, error } = await supabase
      .from('Feedback_Response_Database')
      .select('*')
      setResponses(Feedback_Response_Database)

      if (error) {
        console.log('Error Occured:', error)
      } else {
        console.log('Succesful Import of Database')
      }
    }
    importFeedbackDatabase();

    
  }, [])

  const filteredFeedback = useMemo(() => { 

    let filteredResults = results.results;
    filteredResults= filterByResponseType(filteredResults, results.responseFilter)
    filteredResults = filterByAssessmentType(filteredResults, results.assessmentFilter)
    filteredResults = filterByMonth(filteredResults, results.durationFilter)
    return filteredResults;
    
  }, [results])

  return (
    <resultsContext.Provider value={{ filteredFeedback, results, filterByAssessment, filterByResponse, filterByDuration, resetFilter}} >
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