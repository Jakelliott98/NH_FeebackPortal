import { getDateMonth, months } from '../Formatters/formatDate'


const getCliniciansWithFeedback = (results) => { 
  
  let physiologist = Array.from(new Set(results.map(item => item.physiologist))).filter(item => item)
  let doctors = Array.from(new Set(results.map(item => item.doctor))).filter(item => item)
  let physiotherapist = Array.from(new Set(results.map(item => item.physiotherapist))).filter(item => item)

  return {
    physiologist, 
    doctors, 
    physiotherapist,
  }

}

function getActiveMonths (data) {
  let numberedMonths = Array.from(new Set(data.map(item => getDateMonth(item.timestamp))));
  numberedMonths.sort((a, b) => a - b)
  let labeledMonths = numberedMonths.map(item => months[item])
  return labeledMonths;
}

export { getCliniciansWithFeedback, getActiveMonths }