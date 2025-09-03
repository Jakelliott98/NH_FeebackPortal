import { useContext } from 'react';
import DataCard from './DataCard';
import PageHeader from '../PageComponents/PageHeader';
import CommentCard from '../../Components/CommentCard';
import resultsContext from '../../Context/resultsContext';

function Home () {

    const { filteredResults } = useContext(resultsContext)
    
    return (
        <div className="home">
            <DataCard />
            <div className="commentsDiv">
                <CommentCard client={filteredResults[1]}/>
                <CommentCard client={filteredResults[2]}/>
            </div>
        </div>
    )
}

export default Home;