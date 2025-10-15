
import { useEffect, useState } from "react";
import supabase from "../Utils/Data/fetchAPIData";

function useFetchResults () {

    let [responses, setResponses] = useState([]);

    useEffect(() => {

        async function importFeedbackDatabase () {
        let { data: Feedback_Response_Database, error } = await supabase
        .from('Feedback_Response_Database')
        .select('*')
        setResponses(Feedback_Response_Database)

        if (error) {
            console.log('Error Occured:', error)
        } else {
            console.log('Succesful Import of Database')
        }
        }

        importFeedbackDatabase();

    }, [])

   return responses

}

export default useFetchResults;