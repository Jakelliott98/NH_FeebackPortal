function calculateSatisfactionPercentage (data) {
    return {
        positiveData: data.filter(item => item.average_score > 2.5),
        negativeData: data.filter(item => item.average_score < 2.5),
        positivePercentage: ((data.filter(item => item.average_score > 2.5).length / data.length) * 100).toFixed(0),
        negativePercentage: ((data.filter(item => item.average_score < 2.5).length / data.length) * 100).toFixed(0), 
    }
}

export default calculateSatisfactionPercentage;