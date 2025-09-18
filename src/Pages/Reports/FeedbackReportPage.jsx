import "../../CSS/FeedbackReportPage.css"
import DataGraphCard from "../Home/DataGraphCard";
import { useContext } from "react";
import resultsContext from "../../Context/resultsContext";
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip } from 'recharts';
import ClinicianLeaderboard from "./ClinicianLeaderboard";
import DropdownQuestionComponent from "./DropdownQuestionComponent";
import SatisfactionCircleGraph from "./SatisfactionCircleGraph";
import calculateSatisfactionPercentage from "../../Utils/Calculations/calculateSatisfactionPercentage";
import {getClinicianReport} from '../../Utils/Helpers/dataCalculations'

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
                    <ScatterGraph results={filteredFeedback} yDataPoint='averageScore' xDataPoint='id' />
                    </div>                
                </div>
                <SatisfactionCircleGraph positivePercentage={positivePercentage}/> 
                <ClinicianLeaderboard results={report}/>
                <DropdownQuestionComponent />
            </div>
        </div>
    )
}

export default FeedbackReportPage;



function ScatterGraph ({ results }) {

    function CustomTooltip ({ payload, active }) {
        if (active) {
            let client = payload[0].payload;
            let tooltipScore = client.averageScore > 2.5 ? 'positiveTooltipScore' : 'negativeTooltipScore';
            return (
                <div className='tooltipContainer'>
                    <p className='tooltipTitle'>{client.name}</p>
                    <p className={tooltipScore}>{client.averageScore} Avg</p>
                    <div className='tooltipMiniContainer'>
                    <p>{client.clinician}</p>
                    <p>{client.assessmentType}</p>
                </div>
            </div>
            )
        }
    }

        return (
        <ScatterChart width={500} height={300}>
            <Tooltip content={CustomTooltip} />
            <YAxis domain={[0, 6]} />
            <XAxis dataKey='id' padding={{ left: 30, right: 30 }} />
            <Scatter dataKey="averageScore" data={results} fill="#7CDF7C" stroke='#7CDF7C' activeDot={{ r: 8 }} />
        </ScatterChart>
        )
        
    } 

