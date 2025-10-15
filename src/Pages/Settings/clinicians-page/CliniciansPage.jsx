
import styles from './ClinicianDropdownList.module.css'
import { useMemo, useState } from 'react'
import ClinicianCard from './ClinicianCard'
import AddClinician from './AddClinician'
import useFetchDatabase from '../../../Hooks/useFetchDatabase'
import databaseFunction from '../../../Utils/databaseFunctions'

function CliniciansPage () {

    const [isAddOpen, setIsAddOpen] = useState(false);
    const [clinicianFilter, setClinicianFilter] = useState({ doctor: false, physiologist: false, physiotherapist: false });

    const { insertDataRow, deleteDataRow } = databaseFunction('Clinicians')
    const clinicians = useFetchDatabase('Clinicians');

    function addNewClinician (name, role) {
        let addData = {clinicians_name: name, clinicians_role: role, id: Date.now() + (Math.floor(Math.random() * 100))}
        insertDataRow(addData)
        setIsAddOpen(prev => !prev)
    }

    const filteredClinicians = useMemo(() => {
            let filteredList = clinicians.filter((item) => {
                return clinicianFilter[item.clinicians_role];
            })
            return filteredList.length == 0 ? clinicians : filteredList;
    }, [clinicians, clinicianFilter])

    return (
        <div className={styles['clinician-card-section']}>
            <div className={styles['button-container']}>
                <button 
                    className={styles['new-clinician-button']} 
                    onClick={() => {setIsAddOpen((prev) => {return !prev})}}
                >
                    + Add Clinician
                </button>
                { isAddOpen ? <AddClinician onSubmit={addNewClinician} onClose={setIsAddOpen}/> : null}
                <div className={styles['assessment-buttons']}>
                    <button className={`${styles['physiologist-button']} ${clinicianFilter.physiologist && styles['active-filter-button']}`} onClick={() => {setClinicianFilter((prev) => {return {...prev, physiologist: !prev.physiologist}})}} >Physiologists</button>
                    <button className={`${styles['doctor-button']} ${clinicianFilter.doctor && styles['active-filter-button']}`} onClick={() => {setClinicianFilter((prev) => {return {...prev, doctor: !prev.doctor}})}} >Doctors</button>
                    <button className={`${styles['physiotherapist-button']} ${clinicianFilter.physiotherapist && styles['active-filter-button']}`} onClick={() => {setClinicianFilter((prev) => {return {...prev, physiotherapist: !prev.physiotherapist}})}} >Physiotherapists</button>

                </div>
            </div>
            <div className={styles['clinician-holder']}>
                <div className={`${styles['clinician-card-container']} ${styles['grid-header']}`}>
                    <p>Clinician</p>
                    <p>Role</p>
                </div>
                {
                    filteredClinicians.map((item) => {
                        return (
                            <ClinicianCard item={item} key={item.id} deleteClinician={deleteDataRow}/>
                        )
                    })
                }
            </div>            
        </div>
    )

}

export default CliniciansPage;