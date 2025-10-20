import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Rectangle } from 'recharts';
import {CustomTooltip, CustomMonthlyTooltip} from '../../../Components/Graphs/CustomTooltip';
import calculateMonthlyPayload from '../../../Utils/Helpers/calculateMonthlyPayload';
import { useContext } from 'react';
import resultsContext from '../../../Context/resultsContext';


function DataGraphCard ({ selectedChart }) {

    let { filteredFeedback } = useContext(resultsContext);

    let monthlyData = calculateMonthlyPayload(filteredFeedback)
    console.log(monthlyData)

    const responseChart = (
        <ResponsiveContainer width="100%"height="100%" >
            <LineChart data={filteredFeedback} >
                <Tooltip content={CustomTooltip}/>
                <YAxis domain={[0, 6]}/>
                <XAxis dataKey="id" padding={{ left: 30, right: 30 }} hide={true}/>
                <Line dataKey="average_score" fill="#7CDF7C" stroke='#7CDF7C' activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );

    const averageChart = (
        <ResponsiveContainer width="100%"height="100%" >
            <BarChart data={monthlyData}>
                <Tooltip content={CustomMonthlyTooltip}/>
                 <Bar dataKey="averageScore" fill="#7CDF7C" activeBar={<Rectangle fill="#00a200" />}/>
                 <XAxis dataKey='month'/>
                 <YAxis domain={[0, 100]}/>
            </BarChart>
        </ResponsiveContainer>
    )

    const postiveResponsesChart = (
        <ResponsiveContainer width="100%"height="100%" >
            <BarChart data={monthlyData}>
                <Tooltip content={CustomMonthlyTooltip}/>
                <Bar dataKey="positivePercentage" fill="#7CDF7C" activeBar={<Rectangle fill="#00a200" />}/>
                <XAxis dataKey='month' />
                <YAxis domain={[0, 100]}/>
            </BarChart>
        </ResponsiveContainer>
    )

    const negativeResponsesChart = (
        <ResponsiveContainer width="100%"height="100%" >
            <BarChart data={monthlyData}>
                <Tooltip content={CustomMonthlyTooltip}/>
                <Bar dataKey="negativePercentage" fill="#7CDF7C" activeBar={<Rectangle fill="#00a200" />}/>
                <XAxis dataKey='month' />
                <YAxis domain={[0, 100]}/>
            </BarChart>
        </ResponsiveContainer>
    )

    function selectChart () {

        switch (selectedChart) {

            case 'Average': return averageChart;
            case 'Responses': return responseChart;
            case 'Positive Responses': return postiveResponsesChart;
            case 'Negative Responses': return negativeResponsesChart;
            default: return averageChart;

    }}
    
    return selectChart();

}

export default DataGraphCard;
