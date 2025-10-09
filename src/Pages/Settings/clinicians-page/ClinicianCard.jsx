import styles from './ClinicianDropdownList.module.css'
import { useState } from 'react'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)
import {EllipsisMenu} from '../components/EllipsisMenu'

function ClinicianCard ({item, deleteClinician}) {

    const [isOptionsOpen, setIsOptionsOpen] = useState(false)

    return (
        <div className={styles['clinician-card-container']}>
            <p>
                {item.clinicians_name}
            </p>
            <div>
                <div className={`${styles['clinician-role-section']} ${styles[`${item.clinicians_role}`]}`}>
                    <FontAwesomeIcon className={styles['role-icon']} icon="fa-solid fa-stethoscope" />
                    <p>{item.clinicians_role}</p>
                </div>
            </div>
            <div className={styles['dot-icons-container']}>
            <FontAwesomeIcon className={styles['dot-icons']} icon="fa-solid fa-ellipsis" onClick={() => {setIsOptionsOpen(prev => !prev)}} />
            { isOptionsOpen ? <EllipsisMenu deleteClinician={deleteClinician} id={item.id}/> : null}
            </div>
        </div>
    )
    
}


export default ClinicianCard;