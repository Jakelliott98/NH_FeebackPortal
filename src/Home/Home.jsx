import {AssessmentDropdown, FilterDropdown} from '../Components/DropdownFilter'

import DataSnapshot from '../Components/DataSnapshot'
import { negativeResponses, positiveResponses, returnAverage, returnComments, totalResponses } from '../DataCalculations/dataCalculations';

function Home () {

    let averageRating = returnAverage();
    let responseNumber = totalResponses;
    let positiveResponse = positiveResponses();
    let negativeReposonse = negativeResponses();
    let comments = returnComments();

    return (
        <div className="home">
            <div className='headerDiv'>
                <h1>Home</h1>
                <FilterDropdown />
                <AssessmentDropdown />
            </div>
            <div className="dataSnapshotDiv">
                <DataSnapshot title={'Reponses'} data={responseNumber} change={'2%'} trend={'positive'}/>
                <DataSnapshot title={'Average'} data={averageRating + '%'} change={'14%'} trend={'negative'}/>
                <DataSnapshot title={'Positive'} data={positiveResponse} change={'25%'} trend={'positive'}/>
                <DataSnapshot title={'Negative'} data={negativeReposonse} change={'3%'} trend={'negative'}/>
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