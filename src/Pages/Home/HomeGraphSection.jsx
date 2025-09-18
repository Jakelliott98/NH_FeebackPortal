import { useContext } from "react"
import resultsContext from "../../Context/resultsContext"
import DataGraphCard from "./DataGraphCard"


export default function GraphSection ({selectedChart}) {
    const { filteredFeedback } = useContext(resultsContext)

    return (
            <div className='graphContainer'>
                <div className='graphDiv'>
                    <DataGraphCard results={filteredFeedback} selectedChart={selectedChart}/>
                </div>
            </div>
    )
}