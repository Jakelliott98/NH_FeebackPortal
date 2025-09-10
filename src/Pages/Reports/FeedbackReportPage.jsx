import "../../CSS/FeedbackReportPage.css"
import DataGraphCard from "../Home/DataGraphCard";
import { getClinicianReport } from "../../DataCalculations/dataCalculations";
import { useContext } from "react";
import resultsContext from "../../Context/resultsContext";
import { calculateSatisfactionPercentage } from "../../DataCalculations/dataCalculations";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import ClinicianLeaderboard from "./ClinicianLeaderboard";
import DropdownQuestionComponent from "./DropdownQuestionComponent";
import SatisfactionCircleGraph from "./SatisfactionCircleGraph";

const ScatterGraph = (results, xDataPoint, yDataPoint) => (
        <ScatterChart 
            width={500}
            height={300}
        >
            <CartesianGrid />
                <XAxis type="number" dataKey={`${xDataPoint}`} name="stature"/>
                <YAxis type="number" dataKey={`${yDataPoint}`} name="Results"/>
                <Scatter name="A school" data={results} fill="#8884d8"/>
        </ScatterChart>
    )


function FeedbackReportPage () {

    const { filteredFeedback } = useContext(resultsContext)

    let report = getClinicianReport(filteredFeedback)
    let { positivePercentage } = calculateSatisfactionPercentage(filteredFeedback)

    return (
        <div className='reportPageSection'>
            <div className="dataFeedbackSection">
                <div className='topLeft feedbackCard'>
                    <h1 className='dataTitle'>Average Monthly Satisfaction Score</h1>
                    <div className='dataContainerFeedback'>
                        <DataGraphCard />
                    </div>
                </div>
                <div className='topRight feedbackCard'>
                    <h1 className='dataTitle'>Monthly Feedback Responses</h1>
                    <div className='dataContainerFeedback'>
                    {ScatterGraph(filteredFeedback, 'id', 'averageScore')}
                    </div>                
                </div>
                <SatisfactionCircleGraph positivePercentage={positivePercentage}/> 
                <ClinicianLeaderboard results={report} value={'average'}/>
                <DropdownQuestionComponent />
            </div>
        </div>
    )
}

export default FeedbackReportPage;

