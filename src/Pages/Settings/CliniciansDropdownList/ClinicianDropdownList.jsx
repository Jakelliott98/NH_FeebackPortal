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
            <div className={styles['clinician-section-header']}>
                <p className={styles['clinician-count']}>
                    Number of clinicians: 
                    <span> {list.length}</span>
                </p>
                <button className={styles['clinician-dropdown']}>
                    All Clinicians
                    <FontAwesomeIcon icon="fa-solid fa-caret-down" />
                </button>
            </div>
            <div className={styles['clinician-card-section']}>
                <button className={styles['new-clinician-button']}>
                    + Add Clinician
                </button>
                <AddClinician/>
                <div className={styles['clinician-holder']}>
                    <div className={`${styles['clinician-card-container']} ${styles['grid-header']}`}>
                        <p>Clinician</p>
                        <p>Role</p>
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
    )

}

function AddClinician () {
    return (
        <div>
            <p></p>
            <input placeholder='Clinicians Full Name'/>
            <select/>
            <select></select>
            <button>Add Clinician</button>
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
            <FontAwesomeIcon className={styles['dot-icons']} icon="fa-solid fa-ellipsis" />
        </div>
    )
}

