import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, far, fab)
import styles from './ClinicianDropdownList.module.css'
import { useState } from 'react'
import ClinicianCard from './ClinicianCard'
import AddClinician from './AddClinicianCard'
import supabase from '../../../Utils/Data/fetchAPIData'

function CliniciansPage ({ list }) {

    const [isClinicianOpen, setIsClinicianOpen] = useState(false)

    async function addClinician (name, role) {
        const { data, error } = await supabase
            .from('Clinicians')
            .insert([{clinicians_name: name, clinicians_role: role}])
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

export default CliniciansPage;