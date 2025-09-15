import { useContext, useState } from 'react';
import CommentCard from '../../Components/CommentCard';
import resultsContext from '../../Context/resultsContext';
import { DataSnapshotDiv, DataGraphContainer } from './DataCard'

function Homepage () {

    const { filteredFeedback } = useContext(resultsContext);
    const [selectedChart, setSelectedChart] = useState('Average')

    
    return (
        <div className='homepage'>
            <DataSnapshotDiv selectedChart={selectedChart} setSelectedChart={setSelectedChart}/>
            <DataGraphContainer selectedChart={selectedChart}/>
            <div className="commentsDiv">
                <CommentCard client={filteredFeedback[1]} anonymous={true}/>
                <CommentCard client={filteredFeedback[2]} anonymous={true}/>
            </div>
        </div>
    )
}

export default Homepage;