import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)
import styles from './CliniciansDropdownList.module.css'
import Select from 'react-select'
import { useState } from 'react'

export default function CliniciansDropdownList ({ list, addClinician, deleteClinician }) {

    const [isClinicianOpen, setIsClinicianOpen] = useState(false)

    function addNewClinician (name, role) {
        addClinician(name, role)
        setIsClinicianOpen(prev => !prev)
    }

    return (
        <div className={styles['clinician-card-section']}>
            <div className={styles['button-container']}>
                <button 
                    className={styles['new-clinician-button']} 
                    onClick={() => {setIsClinicianOpen((prev) => {return !prev})}}
                >
                    + Add Clinician
                </button>
                { isClinicianOpen ? <AddClinician addClinician={addNewClinician}/> : null}
                <button className={styles['clinician-dropdown']}>
                    All Clinicians
                    <FontAwesomeIcon icon="fa-solid fa-caret-down" />
                </button>
            </div>
            <div className={styles['clinician-holder']}>
                <div className={`${styles['clinician-card-container']} ${styles['grid-header']}`}>
                    <p>Clinician</p>
                    <p>Role</p>
                </div>
                {
                    list.map((item) => {
                        return (
                            <ClinicianCard item={item} key={item.id} deleteClinician={deleteClinician}/>
                        )
                    })
                }
            </div>            
        </div>
    )

}

function AddClinician ({ addClinician }) {

    const roles = [
        {value: 'physiotherapist', label: 'Physiotherapist'},
        {value: 'physiologist', label: 'Physiologist'},
        {value: 'doctor', label: 'Doctor'},
    ];
    const titles = [
        {value: 'Mr', label: 'Mr'},
        {value: 'Mrs', label: 'Mrs'},
        {value: 'Ms', label: 'Ms'},
        {value: 'Miss', label: 'Miss'},
        {value: 'Dr', label: 'Dr'},
        {value: '', label: 'None'},
    ];

    const [clinicianDetails, setClinicianDetails] = useState({
        title: '',
        name: '',
        role: '',
    })

    return (
        <div className={styles['add-clinician-container']}>
            <p>Clinician Box</p>
            <div className={styles['clinician-input-section']}>
                <Select 
                    options={titles} 
                    onChange={(e) => {setClinicianDetails((prev) => {return {...prev, title: e.value}})}}
                />
                <input 
                    className={styles['clinician-input']} 
                    placeholder='Clinicians Full Name' 
                    value={clinicianDetails.name}
                    onChange={(e) => {setClinicianDetails((prev) => {return {...prev, name: e.target.value}})}}
                />
            </div>
            <Select 
                options={roles}
                onChange={(e) => {setClinicianDetails((prev) => {return {...prev, role: e.value}})}}
            />
            <button className={styles['add-clinician-button']} onClick={() => {addClinician(clinicianDetails.name, clinicianDetails.role)}}>
                Add Clinician
            </button>
        </div>
    )
}

function ClinicianOptions ({ deleteClinician, id }) {

    return (
        <div>
            <p onClick={() => {deleteClinician(id)}}>
                Delete
            </p>
        </div>
    )
}

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
            <div>
            <FontAwesomeIcon className={styles['dot-icons']} icon="fa-solid fa-ellipsis" onClick={() => {setIsOptionsOpen(prev => !prev)}} />
            { isOptionsOpen ? <ClinicianOptions deleteClinician={deleteClinician} id={item.id}/> : null}
            </div>
        </div>
    )
}

