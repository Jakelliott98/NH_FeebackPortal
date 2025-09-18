function calculateAverageScore (data) {
    let totalScore = data
        .map((item) => {return item.averageScore})
        .reduce((a, b) => a + b, 0);
    return Math.floor(((totalScore / (data.length * 5)) * 100))
}

export { calculateAverageScore }