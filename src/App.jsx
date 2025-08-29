import './App.css'
import { DropdownNav } from './Navbar/DropdownNavbar'
import { Outlet } from 'react-router-dom'
import logo from './SVG/NuffieldLogo.png'
import filterContext from './Context/filterContext'
import resultsContext from './Context/resultsContext'
import { useState } from 'react'
import rawdataReturned from './DataCalculations/rawData'

function App() {

    let [duration, setDuration] = useState('Month');
    let [assessmentType, setAssessmentType] = useState("All Assessments");
    let [response, setResponse] = useState('All')
    let [results, setResults] = useState(rawdataReturned)


  return (
    <resultsContext.Provider value={{results, setResults}} >
    <filterContext.Provider value={{duration, setDuration, assessmentType, setAssessmentType, response, setResponse}}>
      <div className='portalLayout'>
        <div className='sidebarDiv'>
          <div className='imageContainer'><img className='nuffieldLogo' src={logo}/></div>  
          <DropdownNav />
        </div>
        <div className='contentDiv'>
          <Outlet />
        </div>
      </ div>
    </filterContext.Provider>
    </resultsContext.Provider>
  )
}

export default App
