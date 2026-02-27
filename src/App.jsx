import './App.css'
import { DropdownNav } from './Navbar/DropdownNavbar'
import { Outlet } from 'react-router-dom'
import logo from './SVG/NuffieldLogo.png'
import ResultsObject from './Hooks/useResultsReducer'
import { useMemo } from 'react'
import PageHeader from './Pages/PageComponents/PageHeader'
import {filterByResponseType, filterByAssessmentType, filterByMonth} from './Utils/Filters/FilterCalcs'
import useFetchResults from './Hooks/useFetchResults'
import LoadingPage from './Components/loading-page/LoadingPage'
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';
import resultsContext from './Context/resultsContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

function App() {

  const { filters, filterByAssessment, filterByResponse, filterByDuration, resetFilter } = ResultsObject();
  const { responses } = useFetchResults();


  const filteredFeedback = useMemo(() => { 

    let filteredResults = responses.value;
    filteredResults= filterByResponseType(filteredResults, filters.responseFilter)
    filteredResults = filterByAssessmentType(filteredResults, filters.assessmentFilter)
    filteredResults = filterByMonth(filteredResults, filters.durationFilter)
    return filteredResults;
    
  }, [responses, filters])

  let loadingPage = (
    <LoadingPage />
  )

  let application = (
    <resultsContext.Provider value={{ responses, filteredFeedback, filters, filterByAssessment, filterByResponse, filterByDuration, resetFilter}} >
      <div className='portal-layout'>
        <div className='sidebar-div'>
          <FontAwesomeIcon icon="fa-solid fa-bars" className="nav-button"/>
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

  return (
    <header>
      <div className='signIn-page'>
        <div className='signIn-card'>
          <SignedOut>
            <h1 className='signIn-title'>Welcome to the Feedback Portal!</h1>
            <p className='signIn-text'>Login to see the responses for the Forms</p>
            <SignInButton mode="modal">
              <button className='signIn-button'>
                Sign In
              </button>
            </SignInButton>
            <div className='demo-card'>
              <h2 className='demo-title'>To view the demo site use the following details</h2>
              <p className='demo-user'>Username: </p>
              <p className='demo-pass'>Password: </p>
            </div>
            <div>
              <p>To fill out the form follow the link below:</p>
              <button>Form</button>
            </div>
          </SignedOut>
        </div>
      </div>
      <SignedIn>
        { responses.loading ? loadingPage : application }
      </SignedIn>
    </header>
  )


} 

export default App;