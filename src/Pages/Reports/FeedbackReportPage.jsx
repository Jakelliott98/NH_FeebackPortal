import { useContext } from "react";
import resultsContext from "../../Context/resultsContext";

function FeedbackReportPage () {

    const { setCurrentPage } = useContext(resultsContext)

    setCurrentPage('Feedback Reports')

    return (
        <>
            <p>Each Questions Average Score Table Graph</p>
            <p>Line Chart showing Avg score over time month by month</p>
            
        </>
    )
}

export default FeedbackReportPage;