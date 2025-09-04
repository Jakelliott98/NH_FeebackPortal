

function getDataTrends (data) {

    return {
        averageRating: getAverageRating(data),
        positiveData: data.filter(item => item.averageScore > 2.5),
        negativeData: data.filter(item => item.averageScore < 2.5),
        positivePercentage: ((data.filter(item => item.averageScore > 2.5).length / data.length) * 100).toFixed(0),
        negativePercentage: ((data.filter(item => item.averageScore < 2.5).length / data.length) * 100).toFixed(0), 
    }
    
}

function getAverageRating (data) {

    let totalScore = data
    .map((item) => {return item.averageScore})
    .reduce((a, b) => a + b, 0);
    return ((totalScore / (data.length * 5)) * 100).toFixed(0)

}

export { getDataTrends }