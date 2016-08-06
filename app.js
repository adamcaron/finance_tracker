const moment = require('moment')
const personal = require('./personal')

const bills = [
  {
    // name: "",
    // amount: "",
    // dueDate: "",
    // auto: false,
    // accountWithdrawnFrom:
  }
]

// Goal:
// Get me a list of deposits by week for the next relevant month
// and a total income over time

function income () {
  const daysOfWeek = {
       "sunday": 0,
       "monday": 1,
      "tuesday": 2,
    "wednesday": 3,
     "thursday": 4,
       "friday": 5,
     "saturday": 6
  }

  let payday = daysOfWeek.wednesday

  // if payday already past this week, return next week's payday
  let nextSoonestPayday = moment().day() > payday ? (payday + 7) : payday

  let depositDate = moment()
    .day(nextSoonestPayday)
    .format('M/D'),
    depositAmount = personal.weeklyIncome

  return depositDate + ' + ' + depositAmount
}

console.log( income() )

// utils

function times (n, f) { while ( n-- > 0 ) f() } // do something for a repeatable number of times

function dollars (amount) {
  let options = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }
  return (amount).toLocaleString("en-US", options)
  // http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#Browser_Compatibility
}
