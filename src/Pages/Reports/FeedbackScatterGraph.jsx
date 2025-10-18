import styles from '../../Components/Graphs/CustomTooltip.module.css'
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip } from 'recharts';
import { useContext } from 'react';
import resultsContext from '../../Context/resultsContext';

function ScatterGraph () {

    const { filteredFeedback } = useContext(resultsContext)

    function CustomTooltip ({ payload, active }) {
        if (active) {
            let client = payload[0].payload;
            let tooltipScore = client.average_score > 2.5 ? `${styles['positive-tooltip-score']}` : `${styles['negative-tooltip-score']}`;
            return (
                <div className={styles['tooltip-container']}>
                    <p className={styles['tooltip-title']}>{client.name}</p>
                    <p className={tooltipScore}>{client.average_score} Avg</p>
                    <div className={styles['tooltip-mini-container']}>
                        <p>{client.clinician}</p>
                        <p>{client.assessment_type.label}</p>
                    </div>
                </div>
            )
        }
    }
        return (
        <ScatterChart width={500} height={300}>
            <Tooltip content={CustomTooltip} />
            <YAxis domain={[0, 6]} />
            <XAxis padding={{ left: 30, right: 30 }} />
            <Scatter dataKey="average_score" data={filteredFeedback} fill="#7CDF7C" stroke='#7CDF7C' activeDot={{ r: 8 }} />
        </ScatterChart>
        )
    } 


export default ScatterGraph;