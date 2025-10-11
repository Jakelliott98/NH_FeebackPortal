import { useContext, useState } from 'react';
import CommentCard from '../../Components/comment-card/CommentCard';
import resultsContext from '../../Context/resultsContext';
import { DataCardSection } from './data-card-section/DataCardSection';
import GraphSection from './home-graph-section/HomeGraphSection';
import styles from './Homepage.module.css'

function Homepage () {

    const { filteredFeedback } = useContext(resultsContext);
    const [selectedChart, setSelectedChart] = useState('Responses')

    const displayComments = filteredFeedback.length <= 1 ? [filteredFeedback[0]] : [filteredFeedback[0], filteredFeedback[1]];

    let commentDiv = displayComments.map((item) => { return (<CommentCard response={item} anonymous={true}/>) });
    let noComments = ( <p> There are no comments </p> );

    return (
        <div className={styles['homepage']}>
            <DataCardSection selectedChart={selectedChart} setSelectedChart={setSelectedChart}/>
            <GraphSection selectedChart={selectedChart}/>
            <div className={styles["comments-div"]}>
                { filteredFeedback.length == 0 ? noComments : commentDiv }
            </div>
        </div>
    )
}

export default Homepage;