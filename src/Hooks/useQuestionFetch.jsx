import { useEffect, useState } from "react";
import supabase from "../Utils/Data/fetchAPIData";

function useQuestionFetch () {

    const [questions, setQuestions] = useState({value: [], loading: true, error: false})

    useEffect(() => {
        
        async function fetchQuestions () {
            const { data, error } = await supabase
            .from('Feedback_Form_Questions')
            .select('*')

            if (error) {
                setQuestions({value: [], loading: true, error: false})
                console.log('Error thrown when fetching questions:', error)
            } else {
                setQuestions({value: data, loading: false, error: false})
            }
        }

        fetchQuestions();

    }, [])

    return questions;

}

export default useQuestionFetch;