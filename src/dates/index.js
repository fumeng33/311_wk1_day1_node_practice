const moment = require('moment');

// import moment here; use this package in each functio                     n


const today = () => {
  // write code for dates.today
// const d = new Date();
// const todayDate = d.getDay();

return (moment().format('dddd'));

}

const calendar = () => {
  // write code for dates.calendar
  // use moment 
  // const today = new Date();
  // const n = today.getMonth()+' '(today.getDate()+1) +','+today.getFullYear();

  const date = moment().format('LL');
  return date;

}

const currentTime = () => {
  // write code for dates.currentTime

  const time = moment().format('LTS');
  return time;
}

module.exports = {
  today,
  calendar,
  currentTime
}