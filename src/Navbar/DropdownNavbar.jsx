import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

import { NavLink } from 'react-router-dom'
import styles from './DropdownNavbar.module.css'

export function DropdownNav () {

    return (
        <nav className={styles['navbar-dropdown']}>
            <NavLink 
                className={({isActive}) => {return isActive ? `${styles['active-nav']}` : `${styles['navbar-option']}`}} 
                to=''
            >
                <FontAwesomeIcon className={styles['navbar-icon']} icon="fa-solid fa-house" />
                Home
            </NavLink>
            <NavLink 
                className={({isActive}) => {return isActive ? `${styles['active-nav']}` : `${styles['navbar-option']}`}} 
                to='FeedbackReports'
            >
                <FontAwesomeIcon className={styles['navbar-icon']} icon="fa-solid fa-square-poll-vertical" />
                Reports
            </NavLink>
            <NavLink 
                className={({isActive}) => {return isActive ? `${styles['active-nav']}` : `${styles['navbar-option']}`}} 
                to='Comments'
            >
                <FontAwesomeIcon className={styles['navbar-icon']} icon="fa-solid fa-comment" />
                Comments
            </NavLink>
            <NavLink 
                className={({isActive}) => {return isActive ? `${styles['active-nav']}` : `${styles['navbar-option']}`}} 
                to='Settings'
            >
                <FontAwesomeIcon className={styles['navbar-icon']} icon="fa-solid fa-gear" />
                Settings
            </NavLink>
        </nav>
    )
}

