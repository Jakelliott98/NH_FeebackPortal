import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)
import styles from './DropdownFilter.module.css'

function ResetButton ({onClick}) {

    return (
        <button className={styles['reset-button']} onClick={onClick}>
            <FontAwesomeIcon icon="fa-solid fa-rotate-right" />
            Reset
        </button>
    )
}

export default ResetButton;

