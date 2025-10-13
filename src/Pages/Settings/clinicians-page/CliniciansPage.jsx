
import styles from './ClinicianDropdownList.module.css'
import { useEffect, useState } from 'react'
import ClinicianCard from './ClinicianCard'
import AddClinician from './AddClinician'
import supabase from '../../../Utils/Data/fetchAPIData'

function CliniciansPage ({ list }) {

    const [isClinicianOpen, setIsClinicianOpen] = useState(false);
    const [clinicianFilter, setClinicianFilter] = useState({
        doctors: false,
        physiologists: false,
        physiotherapists: false,
    });

    async function addClinician (name, role) {
        const { data, error } = await supabase
            .from('Clinicians')
            .insert([{clinicians_name: name, clinicians_role: role, id: Date.now() + (Math.floor(Math.random() * 100))}])
            .select()

            if (error) {
                console.log('Error occured at')
            } else {
                console.log('All addedd succesfully:', data)
            }
    }

    async function deleteClinician (id) {
        const { error } = await supabase 
        .from('Clinicians')
        .delete()
        .eq('id', id)

        if (error) {
            console.log('Error deleting clinician id: ', id)
        } else {
            console.log('Clinician deleted. id:', id)
        }

    }

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
                { isClinicianOpen ? <AddClinician addClinician={addNewClinician} onClose={setIsClinicianOpen}/> : null}
                <div className={styles['assessment-buttons']}>
                    <button className={`${styles['physiologist-button']} ${clinicianFilter.physiologists && styles['active-filter-button']}`} onClick={() => {setClinicianFilter((prev) => {return {...prev, physiologists: !prev.physiologists}})}} >Physiologists</button>
                    <button className={`${styles['doctor-button']} ${clinicianFilter.doctors && styles['active-filter-button']}`} onClick={() => {setClinicianFilter((prev) => {return {...prev, doctors: !prev.doctors}})}} >Doctors</button>
                    <button className={`${styles['physiotherapist-button']} ${clinicianFilter.physiotherapists && styles['active-filter-button']}`} onClick={() => {setClinicianFilter((prev) => {return {...prev, physiotherapists: !prev.physiotherapists}})}} >Physiotherapists</button>

                </div>
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

export default CliniciansPage;