import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)

function ResetButton ({onClick}) {

    return (
        <button className='resetButton' onClick={onClick}>
            <FontAwesomeIcon icon="fa-solid fa-rotate-right" />
            Reset
        </button>
    )
}

export default ResetButton;

