import { useContext } from "react"
import resultsContext from "../../Context/resultsContext"
import DataGraphCard from "./DataGraphCard"
import '../../CSS/components/GraphCard.css'
import styles from './HomeGraphSection.module.css'

export default function GraphSection ({selectedChart}) {
    const { filteredFeedback } = useContext(resultsContext)

    return (
            <div className={styles['graph-container']}>
                <div className={styles['graph-div']}>
                    <DataGraphCard results={filteredFeedback} selectedChart={selectedChart}/>
                </div>
            </div>
    )
}