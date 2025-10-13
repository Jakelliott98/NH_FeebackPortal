import styles from './ClinicianDropdownList.module.css'
import { useState } from 'react'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)
import {EllipsisMenu} from '../components/EllipsisMenu/EllipsisMenu'

function ClinicianCard ({item, deleteClinician}) {

    const [isEllipsisOpen, setIsEllipsisOpen] = useState(false)

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
            <div className={styles['ellipsis-container']}>
                <div className={styles['ellipsis-wrapper']}>
                    <FontAwesomeIcon className={styles['ellipsis']} icon="fa-solid fa-ellipsis" onClick={() => {setIsEllipsisOpen(prev => !prev)}} />
                    <div className={styles['ellipsis-dropdown']} >
                        { isEllipsisOpen && <EllipsisMenu onDelete={deleteClinician} item={item} edit={false} onClose={setIsEllipsisOpen}/> }
                    </div>
                </div>
            </div>
        </div>
    )
    
}


export default ClinicianCard;