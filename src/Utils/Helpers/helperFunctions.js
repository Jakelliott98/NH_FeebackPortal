import { getDateMonth, months } from '../Formatters/formatDate'


const getCliniciansWithFeedback = (results) => { 
  
  let physiologist = Array.from(new Set(results.map(item => item.clinicians.physiologist))).filter(item => item)
  let doctors = Array.from(new Set(results.map(item => item.clinicians.doctor))).filter(item => item)
  let physiotherapist = Array.from(new Set(results.map(item => item.clinicians.physiotherapist))).filter(item => item)
  let allClinicians = physiologist.concat(doctors).concat(physiotherapist)

  return {
    physiologist, 
    doctors, 
    physiotherapist,
    allClinicians
  }

}

function getActiveMonths (data) {
  let numberedMonths = Array.from(new Set(data.map(item => getDateMonth(item.created_at))));
  numberedMonths.sort((a, b) => a - b)
  let labeledMonths = numberedMonths.map(item => months[item])
  return labeledMonths;
}

export { getCliniciansWithFeedback, getActiveMonths }