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
            <NavLink className={({isActive}) => {return isActive ? 'activeNav' : 'navbarOption'}} to='Home'><FontAwesomeIcon className='navbarIcon' icon="fa-solid fa-house" />Home</NavLink>
            <NavLink className={({isActive}) => {return isActive ? 'activeNav' : 'navbarOption'}} to='FeedbackReports'><FontAwesomeIcon className='navbarIcon' icon="fa-solid fa-box-archive" />Feedback Reports</NavLink>
            <NavLink className={({isActive}) => {return isActive ? 'activeNav' : 'navbarOption'}} to='Comments'><FontAwesomeIcon className='navbarIcon' icon="fa-solid fa-comment" />Comments</NavLink>
        </nav>
    )
}

/* Figure out activeClassName */