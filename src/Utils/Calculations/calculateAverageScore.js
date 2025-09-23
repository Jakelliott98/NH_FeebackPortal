function calculateAverageScore (data) {
    let totalScore = data
        .map((item) => {return item.averageScore})
        .reduce((a, b) => a + b, 0);
    return Math.floor(((totalScore / (data.length * 5)) * 100))
}

function calculateClinicianScore (feedback, clinician, clinicianType) {

    let cliniciansResponses = '';
    let averagePercentage = '';

    if (clinicianType === 'doctor') {
        cliniciansResponses = feedback.filter(item => item.doctor == clinician);
        averagePercentage = calculateAverageScore(cliniciansResponses)
    } else if (clinicianType === 'physiologist') {
        cliniciansResponses = feedback.filter(item => item.physiologist == clinician);
        averagePercentage = calculateAverageScore(cliniciansResponses)
    } else if (clinicianType === 'physiotherapist') {
        cliniciansResponses = feedback.filter(item => item.physiotherapist == clinician);
        averagePercentage = calculateAverageScore(cliniciansResponses)
    }
    
    return {
        name: clinician,
        count: cliniciansResponses.length,
        average: averagePercentage,
    }

}

function averageScoreAsPercentage (score) {
    return Math.floor((score / 5) * 100)
}

export { calculateAverageScore, calculateClinicianScore, averageScoreAsPercentage }