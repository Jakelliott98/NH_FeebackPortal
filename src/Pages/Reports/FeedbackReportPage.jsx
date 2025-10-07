import "./FeedbackReportPage.css"
import DataGraphCard from "../Home/DataGraphCard";
import { useContext } from "react";
import resultsContext from "../../Context/resultsContext";
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip } from 'recharts';
import ClinicianLeaderboard from "./ClinicianLeaderboard/ClinicianLeaderboard";
import DropdownQuestionComponent from "./DropdownQuestionComponent/DropdownQuestionComponent";
import SatisfactionCircleGraph from "./SatisfactionCircleGraphs/SatisfactionCircleGraph";
import style from '../../Components/Graphs/CustomTooltip.module.css'

function FeedbackReportPage () {

    const { filteredFeedback } = useContext(resultsContext)

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
                        <ScatterGraph results={filteredFeedback} yDataPoint='average_score' xDataPoint='id' />
                    </div>                
                </div>
                <SatisfactionCircleGraph /> 
                <ClinicianLeaderboard />
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
            let tooltipScore = client.average_score > 2.5 ? `${style['positive-tooltip-score']}` : `${style['negative-tooltip-score']}`;
            return (
                <div className={style['tooltip-container']}>
                    <p className={style['tooltip-title']}>{client.name}</p>
                    <p className={tooltipScore}>{client.average_score} Avg</p>
                    <div className={style['tooltip-mini-container']}>
                        <p>{client.clinician}</p>
                        <p>{client.assessment_type}</p>
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
            <Scatter dataKey="average_score" data={results} fill="#7CDF7C" stroke='#7CDF7C' activeDot={{ r: 8 }} />
        </ScatterChart>
        )
        
    } 

