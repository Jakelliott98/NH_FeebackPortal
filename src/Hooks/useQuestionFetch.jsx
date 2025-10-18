import { useEffect, useState } from "react";
import supabase from "../Utils/Data/fetchAPIData";

function useQuestionFetch () {

    const [questions, setQuestions] = useState([])

    useEffect(() => {
        
        async function fetchQuestions () {
            const { data, error } = await supabase
            .from('Feedback_Form_Questions')
            .select('*')

            if (error) {
                console.log('Error thrown when fetching questions:', error)
            } else {
                setQuestions(data)
            }
        }

        fetchQuestions();

    }, [])

    return questions

}

export default useQuestionFetch;