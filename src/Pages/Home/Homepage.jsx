import { useContext, useState } from 'react';
import CommentCard from '../../Components/comment-card/CommentCard';
import resultsContext from '../../Context/resultsContext';
import { DataCardSection } from './data-card-section/DataCardSection';
import GraphSection from './home-graph-section/HomeGraphSection';
import styles from './Homepage.module.css'

function Homepage () {

    const { filteredFeedback } = useContext(resultsContext);
    const [selectedChart, setSelectedChart] = useState('Responses')

    return (
        <div className={styles['homepage']}>
            <DataCardSection selectedChart={selectedChart} setSelectedChart={setSelectedChart}/>
            <GraphSection selectedChart={selectedChart}/>
            <div className={styles["comments-div"]}>
                <CommentCard response={filteredFeedback[1]} anonymous={true}/>
                <CommentCard response={filteredFeedback[2]} anonymous={true}/>
            </div>
        </div>
    )
}

export default Homepage;