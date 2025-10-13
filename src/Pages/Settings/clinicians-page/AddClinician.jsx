import { useState } from "react";
import AddElement from "../components/AddCard/AddElement";

function AddClinician ({ addClinician, onClose }) {

        const [selectedButton, setSelectedButton] = useState('physiologist');


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

    const [clinicianDetails, setClinicianDetails] = useState({
        title: '',
        name: '',
        role: '',
    })

    return (
        <AddElement selectedButton={selectedButton} setSelectedButton={setSelectedButton} buttonSelectTitle='Clinician Type' clinicianInput title='Add a clinician' onClose={onClose} titlesSelect={titles} stateHolder={clinicianDetails}  mainSelect={roles}  onChange={setClinicianDetails} addElement={addClinician} />
    )
}


export default AddClinician;