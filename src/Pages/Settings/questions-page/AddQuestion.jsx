import { useState } from "react"
import AddElement from "../components/AddCard/AddElement"
import databaseFunction from '../../../Utils/databaseFunctions'

function AddQuestion ({ setIsAddOpen, onClose, assessmentType }) {

    const { insertDataRow } = databaseFunction('Feedback_Form_Questions');

    function addNewQuestion () {
        let addData = { question: newQuestion.question, type: newQuestion.type, assessment_type: assessmentType, id: Date.now() + (Math.floor(Math.random() * 100))}
        insertDataRow(addData)
        setIsAddOpen(prev => !prev)
    }

    const [newQuestion, setNewQuestion] = useState({
        question: '',
        type: '',
    })

    const questionType = [
        {value: 'rating', label: 'Rating'},
        {value: 'textarea', label: 'Textarea'}
    ]

    console.log(newQuestion)

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
            addElement={addNewQuestion} 
        />
    )
    
}


export default AddQuestion;