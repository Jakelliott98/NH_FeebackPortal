
import rawdataReturned from "./rawData";

let totalResponses = rawdataReturned.length;

function returnAverage () {
    let totalScore = rawdataReturned
        .map((item) => {return item.averageScore})
        .reduce((a, b) => a + b, 0);
    return ((totalScore / (totalResponses * 5)) * 100).toFixed(0)
}

function positiveResponses () {
    let positiveResponse = rawdataReturned.filter(item => item.averageScore > 2.5).length
    return (positiveResponse / rawdataReturned.length) * 100;
}

function negativeResponses () {
    let positiveResponse = rawdataReturned.filter(item => item.averageScore < 2.5).length
    return ((positiveResponse / rawdataReturned.length) * 100).toFixed(0)
}

function returnComments () {
    return rawdataReturned.map(item => item.comments)
}

export { returnAverage, totalResponses, positiveResponses, negativeResponses, returnComments }