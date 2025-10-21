
import { useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js'
import { useSession, useUser } from '@clerk/clerk-react'

function useFetchResults () {

    const { session: session, isLoaded: isSessionLoaded } = useSession()
    const [responses, setResponses] = useState({
        value: [], 
        loading: true, 
        error: false
    });

    function createClerkSupabaseClient () {

        return createClient(
            import.meta.env.VITE_SUPABASE_URL,
            import.meta.env.VITE_SUPABASE_KEY,
            {
                async accessToken() {
                    return session?.getToken() ?? null
                },
            },
        )
    }

    const { isLoaded: isUserLoaded, isSignedIn: isUserSignedIn } = useUser()

    useEffect(() => {

        if (isSessionLoaded && isUserLoaded && isUserSignedIn) {

        const client = createClerkSupabaseClient()
        
        async function importFeedbackDatabase () {
            let { data: Feedback_Response_Database, error } = await client
            .from('Feedback_Response_Database')
            .select('*')

            if (error) {
                setResponses({value: [], loading: true, error: true})
            } else {
                setResponses({value: Feedback_Response_Database, loading: false, error: false})
            }
            }

            importFeedbackDatabase();
        
        }

    }, [ isSessionLoaded ])

   return {responses, session};

}

export default useFetchResults;