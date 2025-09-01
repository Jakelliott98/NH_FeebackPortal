import { useContext } from 'react';
import DataCard from './DataCard';
import PageHeader from '../PageComponents/PageHeader';
import CommentCard from '../../Components/CommentCard';
import resultsContext from '../../Context/resultsContext';

function Home () {

    const { results } = useContext(resultsContext)
    
    return (
        <div className="home">
            <PageHeader title={'Home'}/>
            <DataCard />
            <div className="commentsDiv">
                <CommentCard client={results.results[1]}/>
                <CommentCard client={results.results[2]}/>
            </div>
        </div>
    )
}

export default Home;