
import styles from './ClinicianDropdownList.module.css'
import { useEffect, useMemo, useState } from 'react'
import ClinicianCard from './ClinicianCard'
import AddClinician from './AddClinician'
import supabase from '../../../Utils/Data/fetchAPIData'

function CliniciansPage ({ list }) {

    const [isClinicianOpen, setIsClinicianOpen] = useState(false);
    const [clinicianFilter, setClinicianFilter] = useState({
        doctor: false,
        physiologist: false,
        physiotherapist: false,
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

    const filteredClinicians = useMemo(() => {
            let filteredList = list.filter((item) => {
                // Check if their role is truthy
                return clinicianFilter[item.clinicians_role];
            })
            return filteredList.length == 0 ? list : filteredList;
    }, [list, clinicianFilter])

    console.log(filteredClinicians) 

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
                            <ClinicianCard item={item} key={item.id} deleteClinician={deleteClinician}/>
                        )
                    })
                }
            </div>            
        </div>
    )

}

export default CliniciansPage;