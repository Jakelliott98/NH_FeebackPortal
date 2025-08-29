import { useContext } from 'react';
import CommentCard from '../Components/CommentCard';
import HomeHeader from "../Home/HomeHeader";
import resultsContext from '../Context/resultsContext';

function Comments () {

    const {results} = useContext(resultsContext)

    return (
        <>
            <HomeHeader title={'Comments'}/>
            {
                results.map((item) => {return (
                    <CommentCard client={item}/>
                )})
            }
        </>
    )
}

export default Comments;