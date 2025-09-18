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

function formatDate (date) {

  let formattedDate = new Date(date);
  
  let year = formattedDate.getFullYear();
  let month = formattedDate.getMonth()
  let monthText = months[month]
  let day = formattedDate.getDate()

  return day + ' ' + monthText + ' ' + year;
  
}

function getDateMonth (date) {
  let formattedDate = new Date(date);
  return formattedDate.getMonth();
}

export { formatDate, getDateMonth, months };
