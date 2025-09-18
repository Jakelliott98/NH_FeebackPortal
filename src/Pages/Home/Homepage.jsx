import { useContext, useState } from 'react';
import CommentCard from '../../Components/CommentCard/CommentCard';
import resultsContext from '../../Context/resultsContext';
import { DataCardSection } from './DataCardSection'
import GraphSection from './HomeGraphSection'

function Homepage () {

    const { filteredFeedback } = useContext(resultsContext);
    const [selectedChart, setSelectedChart] = useState('Responses')

    return (
        <div className='homepage'>
            <DataCardSection selectedChart={selectedChart} setSelectedChart={setSelectedChart}/>
            <GraphSection selectedChart={selectedChart}/>
            <div className="commentsDiv">
                <CommentCard response={filteredFeedback[1]} anonymous={true}/>
                <CommentCard response={filteredFeedback[2]} anonymous={true}/>
            </div>
        </div>
    )
}

export default Homepage;