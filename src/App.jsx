import './App.css'
import { DropdownNav } from './Navbar/dropdownNav'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <DropdownNav />
      <Outlet />
    </>
  )
}

export default App
