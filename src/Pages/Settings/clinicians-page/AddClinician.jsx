import { useState } from "react";
import styles from './ClinicianDropdownList.module.css'
import Select from "react-select";

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)

function AddClinician ({ addClinician, onClose }) {

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
            <FontAwesomeIcon icon="fa-solid fa-xmark" onClick={() => {onClose(false)}}/>
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


export default AddClinician;