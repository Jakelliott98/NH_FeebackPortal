import { useState } from "react"
import AddElement from "../components/AddCard/AddElement"

function AddQuestion ({ onSubmit, onClose }) {

    const [newQuestion, setNewQuestion] = useState({
        question: '',
        type: '',
    })

    const questionType = [
        {value: 'rating', label: 'Rating'},
        {value: 'textarea', label: 'Textarea'}
    ]

    return (
        <AddElement 
            stateKey='type'
            title='Add Question' 
            stateTitle='type' 
            buttonSelectTitle='What type of question do you want to add?' 
            clinicianInput={false} 
            onClose={onClose} 
            stateHolder={newQuestion}  
            mainSelect={questionType} 
            onChange={setNewQuestion} 
            addElement={onSubmit} 
        />
    )
    
}


export default AddQuestion;