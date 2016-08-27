const moment = require('moment')
const dollars = require('./utils/dollars')
const db = require('./db')

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
  let depositAmount = db.weeklyIncome
  let payday = daysOfWeek.wednesday
  let today = moment().day()
  // if today is past this week's payday, return next week's payday
  let nextSoonestPayday = today > payday ? (payday + 7) : payday

  let i = numberOfWeeks
  while (i-- > 0) {
    let depositDate = moment()
      .day(nextSoonestPayday)
      .format('M/D')
    console.log( depositDate + ' + ' + depositAmount )
    nextSoonestPayday = nextSoonestPayday + 7
  }
  console.log('=============')
  return console.log(`Total: ${numberOfWeeks * db.weeklyIncome}`)
}

function debtTotal () {
  total = 0
  db.debts.map(function (debt) {
    total = total + debt.amount
  })
  return console.log( '\nDebt total: ', dollars(total) )
}

income(5)
debtTotal()



