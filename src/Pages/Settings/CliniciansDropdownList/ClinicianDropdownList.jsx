import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)
import styles from './CliniciansDropdownList.module.css'

export default function CliniciansDropdownList ({ list }) {

    return (
        <div className={styles['settings-clinician-section']}>
            <div className={styles['clinician-card-section']}>
                <div>
                    <button className={styles['new-clinician-button']}>+ Add Clinician</button>
                    <div className={styles['clinician-holder']}>
                        <div className={`${styles['clinician-card-container']} ${styles['grid-header']}`}>
                            <p>Clinician</p>
                            <p>Role</p>
                            <p className={styles['status-header']}>Status</p>
                            <p className={styles['rating-header']}>Rating</p>
                        </div>
                        {
                            list.map((item) => {
                                return (
                                    <ClinicianCard item={item}/>
                                )
                            })
                        }
                    </div>
                </div>
                </div>
            </div>
    )

}


function ClinicianCard ({item}) {

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
            <p className={styles['status-section']}>
                <FontAwesomeIcon className={styles['active-dot']} icon="fa-solid fa-circle" />
                Active
            </p>
            <p className={styles['rating-section']}>4.5</p>
            <FontAwesomeIcon className={styles['dot-icons']} icon="fa-solid fa-ellipsis" />
        </div>
    )
}