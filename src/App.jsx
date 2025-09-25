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

  console.log(responses)

  const filteredFeedback = useMemo(() => { 

    let filteredResults = results.results;
    filteredResults= filterByResponseType(filteredResults, results.responseFilter)
    filteredResults = filterByAssessmentType(filteredResults, results.assessmentFilter)
    filteredResults = filterByMonth(filteredResults, results.durationFilter)
    return filteredResults;
    
  }, [results, responses]) // Add into a custom hook

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