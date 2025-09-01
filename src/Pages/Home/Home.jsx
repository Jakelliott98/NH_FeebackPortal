import rawdataReturned from '../../DataCalculations/rawData';
import { useContext, useEffect } from 'react';
import DataCard from './DataCard';
import PageHeader from '../PageComponents/PageHeader';
import CommentCard from '../../Components/CommentCard';
import filterContext from '../../Context/filterContext';
import resultsContext from '../../Context/resultsContext';

function Home () {

    const {assessmentType } = useContext(filterContext)
    const {results, setResults} = useContext(resultsContext)

    useEffect(() => {
        function filterAssessments () {
            if (assessmentType === 'All Assessments') {
                setResults(rawdataReturned)
            } else {
                let newData = rawdataReturned.filter((item) => {return item.assessmentType === assessmentType})
                setResults(newData)
            }
        }
        filterAssessments()
    }, [assessmentType])

    
    return (
        <div className="home">
            <PageHeader title={'Home'}/>
            <DataCard />
            <div className="commentsDiv">
                <CommentCard client={results[1]}/>
                <CommentCard client={results[2]}/>
            </div>
        </div>
    )
}

export default Home;