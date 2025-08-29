

function sortDataTrend (data) {

    return {
        averageRating: returnAverage(data),
        positiveData: data.filter(item => item.averageScore > 2.5),
        negativeData: data.filter(item => item.averageScore < 2.5),
        positivePercentage: ((data.filter(item => item.averageScore > 2.5).length / data.length) * 100).toFixed(0),
        negativePercentage: ((data.filter(item => item.averageScore < 2.5).length / data.length) * 100).toFixed(0), 
        // Clinicians will also be collected from this point
    }
}

function returnAverage (data) {
    let totalScore = data
    .map((item) => {return item.averageScore})
    .reduce((a, b) => a + b, 0);
    return ((totalScore / (data.length * 5)) * 100).toFixed(0)
}

export { sortDataTrend }