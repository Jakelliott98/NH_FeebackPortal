import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
import { Link } from 'react-router-dom'

export function DropdownNav () {

    return (
        <nav>
            <Link to='Home'><FontAwesomeIcon icon="fa-solid fa-house" />Home</Link>
            <Link to='Reports'><FontAwesomeIcon icon="fa-solid fa-box-archive" />Reports</Link>
            <Link to='Physio'><FontAwesomeIcon icon="fa-solid fa-user-injured" />Physio</Link>
            <Link to='HealthAssessments'><FontAwesomeIcon icon="fa-solid fa-stethoscope" />HA's</Link>
            <Link to='Comments'><FontAwesomeIcon icon="fa-solid fa-comment" />Comments</Link>
        </nav>
    )
}