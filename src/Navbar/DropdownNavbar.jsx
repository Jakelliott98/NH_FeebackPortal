import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

import { NavLink } from 'react-router-dom'
import '../CSS/pageLayouts/DropdownNavbar.css'
import { useContext } from 'react'
import resultsContext from '../Context/resultsContext'

export function DropdownNav () {

    const { setCurrentPage } = useContext(resultsContext);

    return (
        <nav className='navbarDropdown'>
            <NavLink onClick={() => {setCurrentPage('Home')}} className={({isActive}) => {return isActive ? 'activeNav' : 'navbarOption'}} to='Home'><FontAwesomeIcon className='navbarIcon' icon="fa-solid fa-house" />Home</NavLink>
            <NavLink onClick={() => {setCurrentPage('Reports')}} className={({isActive}) => {return isActive ? 'activeNav' : 'navbarOption'}} to='FeedbackReports'><FontAwesomeIcon className='navbarIcon' icon="fa-solid fa-square-poll-vertical" />Reports</NavLink>
            <NavLink onClick={() => {setCurrentPage('Comments')}} className={({isActive}) => {return isActive ? 'activeNav' : 'navbarOption'}} to='Comments'><FontAwesomeIcon className='navbarIcon' icon="fa-solid fa-comment" />Comments</NavLink>
            <NavLink onClick={() => {setCurrentPage('Settings')}} className={({isActive}) => {return isActive ? 'activeNav' : 'navbarOption'}} to='Settings'><FontAwesomeIcon className='navbarIcon' icon="fa-solid fa-gear" />Settings</NavLink>
        </nav>
    )
}

