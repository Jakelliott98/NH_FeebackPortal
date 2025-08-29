import rawdataReturned from '../DataCalculations/rawData';
import { useEffect, useState } from 'react';
import DataCard from './DataCard';
import HomeHeader from './HomeHeader';
import CommentCard from './CommentCard';

function Home () {

    let [results, setResults] = useState(rawdataReturned)
    let [duration, setDuration] = useState('Week');
    let [assessmentType, setAssessmentType] = useState("All Assessments");

    useEffect(() => {
        function filterResults () {
            if (assessmentType === 'All Assessments') {
                setResults(rawdataReturned)
            } else {
                let newData = rawdataReturned.filter((item) => {return item.assessmentType === assessmentType})
                setResults(newData)
            }
        }
        filterResults()
    }, [assessmentType])
    
    return (
        <div className="home">
            <HomeHeader title={'Home'} duration={duration} setDuration={setDuration} setAssessmentType={setAssessmentType} assessmentType={assessmentType}/>
            <DataCard results={results}/>
            <div className="commentsDiv">
                <CommentCard client={results[1]}/>
                <CommentCard client={results[2]}/>
            </div>
        </div>
    )
}

export default Home;

/*

    Home Component
        Header
            Title
            Duration
        DataSnapshot
            4 x Component snapshots
                Title
                Data
                Data Difference
        Graph
        Comments
            2 x Components Comments
                Comment
                Data



*/