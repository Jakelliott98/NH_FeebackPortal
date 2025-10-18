
import { useEffect, useState } from "react";
import supabase from "../Utils/Data/fetchAPIData";

function useFetchResults () {

    let [responses, setResponses] = useState({
        value: [], 
        loading: true, 
        error: false
    });

    useEffect(() => {

        async function importFeedbackDatabase () {
        let { data: Feedback_Response_Database, error } = await supabase
        .from('Feedback_Response_Database')
        .select('*')

        if (error) {
            setResponses({value: [], loading: true, error: true})
        } else {
            setResponses({value: Feedback_Response_Database, loading: false, error: false})
        }
        }

        importFeedbackDatabase();

    }, [])

   return responses;

}

export default useFetchResults;