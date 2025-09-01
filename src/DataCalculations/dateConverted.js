
function returnDateFormat (date) {
  let formattedDate = new Date(date);
  
  let year = formattedDate.getFullYear();
  let month = formattedDate.getMonth()
  let monthText = months[month]
  let day =formattedDate.getDate()

  return day + ' ' + monthText + ' ' + year;
}

export default returnDateFormat;


const months = [
  "January", 
  "February", 
  "March", 
  "April", 
  "May", 
  "June", 
  "July", 
  "August", 
  "September", 
  "October", 
  "November", 
  "December"
];