import DataSnapshotCard from "../../Components/DataSnapshotCard"
import "../../CSS/FeedbackReportPage.css"
import DataGraphCard from "../Home/DataGraphCard";
import { getClinicianResponses } from "../../DataCalculations/dataCalculations";
import { useContext } from "react";
import resultsContext from "../../Context/resultsContext";

function FeedbackReportPage () {

    const { results } = useContext(resultsContext)
    let resultArray = results.results;

    let clinicianResponse = getClinicianResponses(resultArray);

    return (
        <div className='reportPageSection'>
            <div className="dataSnapshotDiv">
                <DataSnapshotCard />
                <DataSnapshotCard />
                <DataSnapshotCard />
                <DataSnapshotCard />
            </div>
            <div className="dataFeedbackSection">
                <div className='topLeft feedbackCard'>
                    <h1>Average Satisfaction Score</h1>
                    <div className='graphDiv'>
                        <DataGraphCard />
                    </div>
                </div>
                <div className='topRight feedbackCard'>
                    <h1>Average Scores by Assessment Type</h1>
                    <div className='graphDiv'>
                        <DataGraphCard />
                    </div>                
                </div>
                <div className='bottomLeft feedbackCard'>
                    <h1>Satisfied Responses</h1>
                    <div className='graphDiv'>
                        <div className='graph'>
                            <p>95%</p>
                            <p>Satisfaction</p>
                        </div>
                    </div>                    
                </div>            
                <div className='bottomCentre feedbackCard'>
                    <h1>Monthly Top Performers</h1>
                    <div className='graphDiv'>
                        <ClinicianLeaderBoard results={clinicianResponse}/>
                    </div>
                </div>
                <div className='bottomRight feedbackCard'>
                    <h1>Question 1</h1>
                    <div className='graphDiv'>
                        <div className='graph'>
                            <p>95%</p>
                            <p>Satisfaction</p>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default FeedbackReportPage;



function ClinicianLeaderBoard ({results}) {
    console.log(results[0])
    return (
        <ul className='clinicianLeaderboard'>
            <li className='leaderboardItem'>
                <p>{results[0].name}</p>
                <p>{results[0].count}</p>
            </li>
            <li className='leaderboardItem'>
                <p>{results[1].name}</p>
                <p>{results[1].count}</p>
            </li>
            <li className='leaderboardItem'>
                <p>{results[2].name}</p>
                <p>{results[2].count}</p>
            </li>
            <li className='leaderboardItem'>
                <p>{results[3].name}</p>
                <p>{results[3].count}</p>
            </li>
            <li className='leaderboardItem'>
                <p>{results[4].name}</p>
                <p>{results[4].count}</p>
            </li>
        </ul>
    )
}

<li>
    <p>Dr. Lee</p>
    <p>3.4 Avg</p>
</li>