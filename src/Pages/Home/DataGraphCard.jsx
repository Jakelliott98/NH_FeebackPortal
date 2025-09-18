import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Rectangle } from 'recharts';
import { negativeResponse, positiveResponse, monthlyResponse } from '../../Utils/Data/graphData';
import {CustomTooltip, CustomMonthlyTooltip} from '../../Components/Graphs/CustomTooltip';


function DataGraphCard ({results, selectedChart}) {

    const responseChart = (
        <ResponsiveContainer width="100%"height="100%" >
            <LineChart data={results} >
                <Tooltip content={CustomTooltip}/>
                <YAxis domain={[0, 6]}/>
                <XAxis dataKey="id" padding={{ left: 30, right: 30 }} hide={true}/>
                <Line dataKey="averageScore" fill="#7CDF7C" stroke='#7CDF7C' activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );

    // CHANGE TOOLTIP TO PERCENTAGE
    const averageChart = (
        <ResponsiveContainer width="100%"height="100%" >
            <BarChart data={monthlyResponse}>
                <Tooltip content={CustomMonthlyTooltip}/>
                 <Bar dataKey="numberOfResponses" fill="#7CDF7C" activeBar={<Rectangle fill="#00a200" />}/>
                 <XAxis dataKey='month'/>
                 <YAxis dataKey='numberOfResponses'/>
            </BarChart>
        </ResponsiveContainer>
    )

    const postiveResponsesChart = (
        <ResponsiveContainer width="100%"height="100%" >
            <BarChart data={positiveResponse}>
                <Tooltip content={CustomMonthlyTooltip}/>
                <Bar dataKey="data" fill="#7CDF7C" activeBar={<Rectangle fill="#00a200" />}/>
                <XAxis dataKey='month' />
                <YAxis />
            </BarChart>
        </ResponsiveContainer>
    )

    const negativeResponsesChart = (
        <ResponsiveContainer width="100%"height="100%" >
            <BarChart data={negativeResponse}>
                <Tooltip content={CustomMonthlyTooltip}/>
                <Bar dataKey="data" fill="#7CDF7C" activeBar={<Rectangle fill="#00a200" />}/>
                <XAxis dataKey='month' />
                <YAxis />
            </BarChart>
        </ResponsiveContainer>
    )

    function selectChart () {

        switch (selectedChart) {

            case 'Average': return averageChart;
            case 'Responses': return responseChart;
            case 'Positive': return postiveResponsesChart;
            case 'Negative': return negativeResponsesChart;
            default: return averageChart;

    }}
    
    return selectChart();

}

export default DataGraphCard;
