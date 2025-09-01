import { useContext, useEffect } from 'react';
import CommentCard from '../../Components/CommentCard';
import PageHeader from '../PageComponents/PageHeader';
import resultsContext from '../../Context/resultsContext';
import filterContext from '../../Context/filterContext';
import rawdataReturned from '../../DataCalculations/rawData';

function Comments () {

    const { results, setResults } = useContext(resultsContext)
    const { response } = useContext(filterContext)

    useEffect(() => {
        function filterResponse () {
            if (response === 'Positive') {
                let newList = rawdataReturned.filter(item => item.averageScore > 2.5)
                setResults(newList)
            } else if (response === 'Negative') {
                let newList = rawdataReturned.filter(item => item.averageScore < 2.5)
                setResults(newList)
            } else {
                setResults(rawdataReturned)
            }
        }
        filterResponse()
    }, [response])

    // Move the effects all to a common place

    return (
        <>
            <PageHeader title={'Comments'}/>
            {
                results.map((item) => {return (
                    <CommentCard key={item.id} client={item}/>
                )})
            }
        </>
    )
}

export default Comments;