import { useContext } from 'react';
import CommentCard from '../../Components/CommentCard';
import PageHeader from '../PageComponents/PageHeader';
import resultsContext from '../../Context/resultsContext';

function Comments () {

    const { filteredResults } = useContext(resultsContext)

    return (
        <>
            <PageHeader title={'Comments'}/>
            {
                filteredResults.map((item) => {return (
                    <CommentCard key={item.id} client={item}/>
                )})
            }
        </>
    )
}

export default Comments;