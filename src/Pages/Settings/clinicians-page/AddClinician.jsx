import { useState } from "react";
import AddElement from "../components/AddCard/AddElement";

function AddClinician ({ onSubmit, onClose }) {

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
            addElement={onSubmit} 
            titlesSelect={titles} // Independent
        />
    )
}


export default AddClinician;