
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

    const { user, isLoaded: isUserLoaded } = useUser()

    useEffect(() => {

        if (isSessionLoaded && isUserLoaded) {

        const client = createClerkSupabaseClient()
        const users_site_id = user.publicMetadata.site_id;

        async function importFeedbackDatabase () {
            let { data: Feedback_Response_Database, error } = await client
            .from('Feedback_Response_Database')
            .select('*')
            .eq('site_id', `${users_site_id}`)

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