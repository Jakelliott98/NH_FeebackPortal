import { useContext } from 'react';
import DataContainer from './DataCard';
import CommentCard from '../../Components/CommentCard';
import resultsContext from '../../Context/resultsContext';

function Homepage () {

    const { filteredFeedback } = useContext(resultsContext)
    
    return (
        <div className="home">
            <DataContainer />
            <div className="commentsDiv">
                <CommentCard client={filteredFeedback[1]} anonymous={true}/>
                <CommentCard client={filteredFeedback[2]} anonymous={true}/>
            </div>
        </div>
    )
}

export default Homepage;