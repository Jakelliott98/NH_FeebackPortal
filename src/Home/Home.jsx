import {AssessmentDropdown, FilterDropdown} from '../Components/DropdownFilter'

import DataSnapshot from '../Components/DataSnapshot'
import { sortDataTrend } from '../DataCalculations/dataCalculations';
import rawdataReturned from '../DataCalculations/rawData';
import { useEffect, useState } from 'react';

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
    

    let responseNumber = results.length;
    let { averageRating, positivePercentage, negativePercentage } = sortDataTrend(results)
    

    return (
        <div className="home">
            <div className='headerDiv'>
                <h1>Home</h1>
                <FilterDropdown onChange={setDuration} duration={duration}/>
                <AssessmentDropdown assessmentType={assessmentType} onChange={setAssessmentType} />
            </div>
            <div className="dataSnapshotDiv">
                <DataSnapshot title={'Reponses'} data={responseNumber} change={'2%'} trend={'positive'}/>
                <DataSnapshot title={'Average'} data={averageRating + '%'} change={'14%'} trend={'negative'}/>
                <DataSnapshot title={'Positive'} data={positivePercentage + '%'} change={'25%'} trend={'positive'}/>
                <DataSnapshot title={'Negative'} data={negativePercentage + '%'} change={'3%'} trend={'negative'}/>
            </div>
            {/*
            <div className="graphDiv">
                
            </div>
            <div className="commentsDiv">
                <div>
                    <p>Comment would go in here...</p>
                    <p>01 January 2026</p>
                </div>
            </div>
            */}
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