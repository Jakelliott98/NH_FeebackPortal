function calculateAverageScore (data) {
    let totalScore = data
        .map((item) => {return item.average_score})
        .reduce((a, b) => a + b, 0);
    return Math.floor(((totalScore / (data.length * 5)) * 100))
}

function calculateClinicianScore (feedback, clinician, clinicianType) {

    let cliniciansResponses = '';
    let averagePercentage = '';

    if (clinicianType === 'doctor') {
        cliniciansResponses = feedback.filter(item => item.clinicians.doctor == clinician);
        averagePercentage = calculateAverageScore(cliniciansResponses)
    } else if (clinicianType === 'physiologist') {
        cliniciansResponses = feedback.filter(item => item.clinicians.physiologist == clinician);
        averagePercentage = calculateAverageScore(cliniciansResponses)
    } else if (clinicianType === 'physiotherapist') {
        cliniciansResponses = feedback.filter(item => item.clinicians.physiotherapist == clinician);
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