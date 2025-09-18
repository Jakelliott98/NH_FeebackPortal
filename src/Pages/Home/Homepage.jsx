import { useContext, useState } from 'react';
import CommentCard from '../../Components/CommentCard';
import resultsContext from '../../Context/resultsContext';
import { DataSnapshotDiv } from './DataCard'
import GraphSection from './HomeGraphSection'

function Homepage () {

    const { filteredFeedback } = useContext(resultsContext);
    const [selectedChart, setSelectedChart] = useState('Responses')

    return (
        <div className='homepage'>
            <DataSnapshotDiv selectedChart={selectedChart} setSelectedChart={setSelectedChart}/>
            <GraphSection selectedChart={selectedChart}/>
            <div className="commentsDiv">
                <CommentCard client={filteredFeedback[1]} anonymous={true}/>
                <CommentCard client={filteredFeedback[2]} anonymous={true}/>
            </div>
        </div>
    )
}

export default Homepage;