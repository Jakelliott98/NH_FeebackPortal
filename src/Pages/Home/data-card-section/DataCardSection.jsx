import DataCard from '../../../Components/DataCardComponents/DataCard'
import { useContext } from 'react';
import resultsContext from '../../../Context/resultsContext';
import dataCardObjects from './dataCardObjects';
import styles from './DataCardSection.module.css'

function DataCardSection ({ selectedChart, setSelectedChart }) {

    const { filteredFeedback, responses, filters } = useContext(resultsContext);

    let colours = ['#8e44ad', '#ffd600', '#cddc39', '#E94984'];

    return (
            <div className={styles["data-snapshot-div"]}>
                {
                    dataCardObjects(filteredFeedback, responses.value, filters).map((item, index) => {
                        return (
                            <DataCard 
                                selectedChart={selectedChart} 
                                onClick={() => {setSelectedChart(item.title)}}
                                item={item}
                                colour={colours[index]}
                                key={index}
                            /> 
                        )
                    })
                }
            </div>
    )
}

export { DataCardSection }