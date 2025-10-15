import { useState, useEffect } from "react";
import supabase from "../../Utils/Data/fetchAPIData";

function useFetchDatabase (from) {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function getClinicians () {
            let { data: Clinicians, error } = await supabase
            .from(from)
            .select('*')

            if (Clinicians) {
                setData(Clinicians);
            } else {
                console.log(error)
            }
        }
        getClinicians();
    }, [from])

    return data;

}   

export default useFetchDatabase;