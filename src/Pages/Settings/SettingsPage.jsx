import supabase from "../../Utils/Data/fetchAPIData"
import { useState, useEffect } from "react"
import CliniciansDropdownList from "./CliniciansDropdownList/ClinicianDropdownList"

function SettingsPage () {

    const [clinicians, setClinicians] = useState([])

    useEffect(() => {
        async function getClinicians () {
            let { data: Clinicians, error } = await supabase
            .from('Clinicians')
            .select('*')

            if (Clinicians) {
                setClinicians(Clinicians);
            } else {
                console.log(error)
            }
        }
        getClinicians();
    }, [])


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

    return (
        <CliniciansDropdownList list={clinicians} addClinician={addClinician} deleteClinician={deleteClinician}/>
    )

}

export default SettingsPage;