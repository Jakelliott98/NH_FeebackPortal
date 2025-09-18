function calculateAverageScore (data) {
    let totalScore = data
        .map((item) => {return item.averageScore})
        .reduce((a, b) => a + b, 0);
    return Math.floor(((totalScore / (data.length * 5)) * 100))
}

function calculateClinicianScore (feedback, clinician) {

    const cliniciansResponses = feedback.filter(item => item.clinician == clinician);
    const averagePercentage = calculateAverageScore(cliniciansResponses)
    
    return {
        name: clinician,
        count: cliniciansResponses.length,
        average: averagePercentage,
    }

}

export { calculateAverageScore, calculateClinicianScore }