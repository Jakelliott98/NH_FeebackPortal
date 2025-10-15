import DataGraphCard from "./DataGraphCard"
import styles from './HomeGraphSection.module.css'

export default function GraphSection ({selectedChart}) {

    return (
            <div className={styles['graph-container']}>
                <div className={styles['graph-div']}>
                    <DataGraphCard selectedChart={selectedChart}/>
                </div>
            </div>
    )
}