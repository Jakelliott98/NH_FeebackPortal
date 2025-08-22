import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
import { NavLink } from 'react-router-dom'
import '../CSS/DropdownNavbar.css'

export function DropdownNav () {

    return (
        <nav className='navbarDropdown'>
            <NavLink activeClassName='activeBar' className='navbarOption' to='Home'><FontAwesomeIcon className='navbarIcon' icon="fa-solid fa-house" />Home</NavLink>
            <NavLink activeClassName='activeBar' className='navbarOption' to='Reports'><FontAwesomeIcon className='navbarIcon' icon="fa-solid fa-box-archive" />Reports</NavLink>
            <NavLink activeClassName='activeBar' className='navbarOption' to='Physio'><FontAwesomeIcon className='navbarIcon' icon="fa-solid fa-user-injured" />Physio</NavLink>
            <NavLink activeClassName='activeBar' className='navbarOption' to='HealthAssessments'><FontAwesomeIcon className='navbarIcon' icon="fa-solid fa-stethoscope" />HA's</NavLink>
            <NavLink activeClassName='activeBar' className='navbarOption' to='Comments'><FontAwesomeIcon className='navbarIcon' icon="fa-solid fa-comment" />Comments</NavLink>
        </nav>
    )
}

/* Figure out activeClassName */