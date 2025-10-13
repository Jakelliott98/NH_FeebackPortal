import { useState } from "react"
import AddElement from "../components/AddCard/AddElement"

function AddQuestion ({ onSubmit, onClose }) {

    const [selectedButton, setSelectedButton] = useState('rating');

    const [newQuestion, setNewQuestion] = useState({
        question: '',
        type: '',
    })

    const questionType = [
        {value: 'rating', label: 'Rating'},
        {value: 'textarea', label: 'Textarea'}
    ]

    return (
        <AddElement stateTitle='type' selectedButton={selectedButton} setSelectedButton={setSelectedButton} buttonSelectTitle='What type of question do you want to add?' clinicianInput={false} title='Add Question' onClose={onClose} stateHolder={newQuestion}  mainSelect={questionType}  onChange={setNewQuestion} addElement={onSubmit} />
    )
    
}


export default AddQuestion;