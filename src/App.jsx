import './App.css'
import { DropdownNav } from './Navbar/DropdownNavbar'
import { Outlet } from 'react-router-dom'
import logo from './SVG/NuffieldLogo.png'
import resultsContext from './Context/resultsContext'
import ResultsObject from './ResultsReducer'
import { useMemo } from 'react'
import './CSS/DataCards.css'
import PageHeader from './Pages/PageComponents/PageHeader'
import { checkAssessmentType, checkResponseType } from './DataCalculations/helperFunctions'

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