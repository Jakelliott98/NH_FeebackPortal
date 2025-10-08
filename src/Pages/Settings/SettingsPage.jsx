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

    return (
        <CliniciansDropdownList list={clinicians} addClinician={addClinician}/>
    )

}

export default SettingsPage;

function DoctorsDropdown ({doctorsList}) {
    return (
        <>
        <h1>Clinician Dropdown</h1>
        <ul>
        {doctorsList.map((item, index) => {
            return (<p key={index}>{item.clinicians_name}</p>)
        })}
        </ul>
        </>
    )
}

function AddClinician ({onSubmit}) {

    const [clinician, setClinician] = useState({name: '', role: ''})

    function setName (name) {
        setClinician((prev) => {return {...prev, name: name}})
    }

    function setRole (role) {
        setClinician((prev) => { return {...prev, role:role}})
    }

    function resetClinician () {
        setClinician({name: '', role: ''})
    }

    return (
        <div>
            <input placeholder='Clinicians Name' onChange={(e) => {setName(e.target.value)}} value={clinician.name}/>
            <input placeholder='role' onChange={(e) => {setRole(e.target.value)}} value={clinician.role}/>
            <button type='submit' onClick={() => {onSubmit(clinician.name, clinician.role), resetClinician()}}>Add</button>
        </div>
    )
}