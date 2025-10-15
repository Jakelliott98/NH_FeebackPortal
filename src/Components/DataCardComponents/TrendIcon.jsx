import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
import styles from './DataCards.module.css'


function TrendIcon ({trend, change}) {

    return (
        <div className={ `${styles['snapshot-data-card']} ${styles[`${trend}`]} ` }>
            <FontAwesomeIcon 
                icon={ trend === 'positive' ? 'fa-solid fa-arrow-trend-up' : 'fa-solid fa-arrow-trend-down' } 
            />
            <p> {change}% </p>
        </div>
    )
}

export default TrendIcon;