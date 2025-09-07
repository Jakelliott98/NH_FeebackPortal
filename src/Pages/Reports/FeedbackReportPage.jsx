import { useContext } from "react";
import resultsContext from "../../Context/resultsContext";
import DataSnapshotCard from "../../Components/DataSnapshotCard"
import "../../CSS/FeedbackReportPage.css"
import DataGraphCard from "../Home/DataGraphCard";

function FeedbackReportPage () {

    const { setCurrentPage } = useContext(resultsContext)

    setCurrentPage('Feedback Reports')

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
                        <ClinicianLeaderBoard />
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



function ClinicianLeaderBoard () {
    return (
        <ul className='clinicianLeaderboard'>
            <li className='leaderboardItem'>
                <p>Dr. Lee</p>
                <p>3.4 Avg</p>
            </li>
            <li className='leaderboardItem'>
                <p>Dr. Lee</p>
                <p>3.4 Avg</p>
            </li>
            <li className='leaderboardItem'>
                <p>Dr. Lee</p>
                <p>3.4 Avg</p>
            </li>
            <li className='leaderboardItem'>
                <p>Dr. Lee</p>
                <p>3.4 Avg</p>
            </li>
            <li className='leaderboardItem'>
                <p>Dr. Lee</p>
                <p>3.4 Avg</p>
            </li>
        </ul>
    )
}

<li>
    <p>Dr. Lee</p>
    <p>3.4 Avg</p>
</li>