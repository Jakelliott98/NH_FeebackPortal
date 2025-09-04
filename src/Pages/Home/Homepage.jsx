import { useContext } from 'react';
import DataContainer from './DataCard';
import CommentCard from '../../Components/CommentCard';
import resultsContext from '../../Context/resultsContext';

function Homepage () {

    const { filteredResults } = useContext(resultsContext)
    
    return (
        <div className="home">
            <DataContainer />
            <div className="commentsDiv">
                <CommentCard client={filteredResults[1]}/>
                <CommentCard client={filteredResults[2]}/>
            </div>
        </div>
    )
}

export default Homepage;