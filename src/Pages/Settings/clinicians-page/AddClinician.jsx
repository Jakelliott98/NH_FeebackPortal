import { useState } from "react";
import AddElement from "../components/AddCard/AddElement";
import databaseFunction from '../../../Utils/databaseFunctions'

function AddClinician ({ setIsAddOpen, onClose }) {

    const { insertDataRow } = databaseFunction('Clinicians')

    function addNewClinician () {
        let addData = {clinicians_name: clinicianDetails.name, clinicians_role: clinicianDetails.role, title: clinicianDetails.title, id: Date.now() + (Math.floor(Math.random() * 100))}
        insertDataRow(addData)
        setIsAddOpen(prev => !prev)
    }

    const [clinicianDetails, setClinicianDetails] = useState({
        title: '',
        name: '',
        role: '',
    })

    const roles = [
        {value: 'physiologist', label: 'Physiologist'},
        {value: 'doctor', label: 'Doctor'},
        {value: 'physiotherapist', label: 'Physiotherapist'},
    ];

    const titles = [
        {value: 'Mr', label: 'Mr'},
        {value: 'Mrs', label: 'Mrs'},
        {value: 'Ms', label: 'Ms'},
        {value: 'Miss', label: 'Miss'},
        {value: 'Dr', label: 'Dr'},
        {value: '', label: 'None'},
    ];

    return (
        <AddElement
            stateKey='title'
            title='Add a clinician' 
            stateTitle='role' 
            buttonSelectTitle='Clinician Type' 
            clinicianInput 
            onClose={onClose} 
            stateHolder={clinicianDetails}  
            mainSelect={roles}  
            onChange={setClinicianDetails} 
            addElement={addNewClinician} 
            titlesSelect={titles} // Independent
        />
    )
}


export default AddClinician;