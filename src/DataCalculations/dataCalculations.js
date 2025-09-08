import { getCliniciansWithFeedback } from "./helperFunctions";


function getDataTrends (data) {

    return {
        averageRating: getAverageRating(data),
        positiveData: data.filter(item => item.averageScore > 2.5),
        negativeData: data.filter(item => item.averageScore < 2.5),
        positivePercentage: ((data.filter(item => item.averageScore > 2.5).length / data.length) * 100).toFixed(0),
        negativePercentage: ((data.filter(item => item.averageScore < 2.5).length / data.length) * 100).toFixed(0), 
    }
    
}

function getClinicianResponses (feedback) {

    let clinicianCount = feedback.map(item => item.clinician)
    let clinicianCountObj = [];

    for (let i = 0; i < clinicianCount.length; i++) {
        
        if (clinicianCountObj.some(e => e.name == clinicianCount[i])) {
            let index = clinicianCountObj.findIndex(e => e.name === clinicianCount[i]);
            clinicianCountObj[index].count += 1;
        } else {
        let clinicianObject = {
            name: clinicianCount[i],
            count: 0,
        }
        clinicianCountObj.push(clinicianObject)
    }}

    return clinicianCountObj.sort((a, b) => b.count - a.count);

}

function getAverageRating (data) {

    let totalScore = data
    .map((item) => {return item.averageScore})
    .reduce((a, b) => a + b, 0);
    return ((totalScore / (data.length * 5)) * 100).toFixed(0)

}

export { getDataTrends, getClinicianResponses }