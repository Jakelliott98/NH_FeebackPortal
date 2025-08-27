import './App.css'
import { DropdownNav } from './Navbar/DropdownNavbar'
import { Outlet } from 'react-router-dom'
import logo from './SVG/NuffieldLogo.png'

function App() {

  return (
    <div className='portalLayout'>
      <div className='sidebarDiv'>
        <div className='imageContainer'><img className='nuffieldLogo' src={logo}/></div>  
        <DropdownNav />
      </div>
      <div className='contentDiv'>
        <Outlet />
      </div>
    </ div>
  )
}

export default App
