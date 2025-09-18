import { getDateMonth, months } from '../Formatters/formatDate'


const getCliniciansWithFeedback = (results) => { return Array.from(new Set(results.map(item => item.clinician)))}


function getActiveMonths (data) {
  let numberedMonths = Array.from(new Set(data.map(item => getDateMonth(item.timestamp))));
  numberedMonths.sort((a, b) => a - b)
  let labeledMonths = numberedMonths.map(item => months[item])
  return labeledMonths;
}

export { getCliniciansWithFeedback, getActiveMonths }