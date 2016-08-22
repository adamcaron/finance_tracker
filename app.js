const moment = require('moment')
const personal = require('./personal')

// Goal:
// Get me a list of deposits by week for the next relevant month
// and a total income over time

function income (numberOfWeeks) {
  const daysOfWeek = {
       "sunday": 0,
       "monday": 1,
      "tuesday": 2,
    "wednesday": 3,
     "thursday": 4,
       "friday": 5,
     "saturday": 6
  }

  // if today is past this week's payday, return next week's payday
  let payday = daysOfWeek.wednesday
  let today = moment().day()
  let nextSoonestPayday = today > payday ? (payday + 7) : payday

  let depositAmount = personal.weeklyIncome

  let i = numberOfWeeks
  while (i-- > 0) {
    let depositDate = moment()
      .day(nextSoonestPayday)
      .format('M/D')
    console.log( depositDate + ' + ' + depositAmount )
    nextSoonestPayday = nextSoonestPayday + 7
  }
  console.log('=============')
  console.log(`Total: ${numberOfWeeks * personal.weeklyIncome}`)
}

function debtTotal () {
  total = 0
  personal.debts.map(function (debt) {
    total = total + debt.amount
  })
  // console.log('Debt total: ', total)
  return total
}

income(5)
const dollars = require('./utils/dollarFormat')
console.log('Debt total: ', dollars(debtTotal()) )




