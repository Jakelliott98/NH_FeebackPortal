import { useContext, useEffect } from 'react';
import CommentCard from '../../Components/CommentCard';
import PageHeader from '../PageComponents/PageHeader';
import resultsContext from '../../Context/resultsContext';
import filterContext from '../../Context/filterContext';
import rawdataReturned from '../../DataCalculations/rawData';

function Comments () {

    const { results } = useContext(resultsContext)

    return (
        <>
            <PageHeader title={'Comments'}/>
            {
                results.results.map((item) => {return (
                    <CommentCard key={item.id} client={item}/>
                )})
            }
        </>
    )
}

export default Comments;