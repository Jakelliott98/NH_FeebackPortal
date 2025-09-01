import './App.css'
import { DropdownNav } from './Navbar/DropdownNavbar'
import { Outlet } from 'react-router-dom'
import logo from './SVG/NuffieldLogo.png'
import resultsContext from './Context/resultsContext'
import ResultsObject from './ResultsReducer'

function App() {

    const { results, filterByAssessment, filterByResponse, filterByDuration, resetFilter } = ResultsObject();
    console.log(results)

  return (
    <resultsContext.Provider value={{results, filterByAssessment, filterByResponse, filterByDuration, resetFilter}} >
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

export default App
