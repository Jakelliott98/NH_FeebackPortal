import './App.css'
import { DropdownNav } from './Navbar/DropdownNavbar'
import { Outlet } from 'react-router-dom'
import logo from './SVG/NuffieldLogo.png'

function App() {

  return (
    <div className='portalLayout'>
      <div className='upperDiv'>
        <div className='imageContainer'><img className='nuffieldLogo' src={logo}/></div>  
        <div></div>
      </div>
      <div className='contentDiv'>
        <DropdownNav />
        <Outlet />
      </div>
    </ div>
  )
}

export default App
