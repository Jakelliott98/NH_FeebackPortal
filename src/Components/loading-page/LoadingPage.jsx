import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

import styles from './LoadingPage.module.css'

function LoadingPage () {

  return (
    <div className={styles['loading-layout']}>
      <div className={styles['loading-container']}>
        <p className={styles['loading-text']}>Fetching your data, hold tight!</p>
        <FontAwesomeIcon className={styles['loading-icon']} icon="fa-solid fa-heart-pulse" />
      </div>
    </div>
  )
}

export default LoadingPage;