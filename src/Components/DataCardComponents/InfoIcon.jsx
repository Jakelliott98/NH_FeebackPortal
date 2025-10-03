import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

import styles from './DataCards.module.css'


import { useState } from 'react'

function InfoIcon ({text}) {
    
    const [activeHover, setActiveHover] = useState(false)
    const activateHover = () => {setActiveHover(true)};
    const deactivateHover = () => {setActiveHover(false)};

    return (
        <>
        <div className={styles['info-icon']} onMouseEnter={() => {activateHover()}} onMouseLeave={() => {deactivateHover()}}>
            <FontAwesomeIcon icon="fa-solid fa-question" />
        </div>
        <div className={activeHover ? `${styles['hidden-text']} ${styles['show-text']}` : `${styles['hidden-text']} ${styles['hide-text']}`}>{text}</div>
        </>
    )
}

export default InfoIcon;