const dollars = require('./utils/dollars')
const moment = require('moment')
const db = require('./db')
// const seed = require('./utils/seed')
// seed(db, moment)
// const transactions = db.transactions
const transactions = db.recurringTransactions

// TODO: recieve this info via params
let dateFormat = 'MMM DD' // receive from param
let startDate = moment() // param
let endDate = moment(startDate).add(4, 'months') // param
let numberOfDaysInTimeline = moment(endDate).diff(startDate, 'days')
let timeline = []
let startBalance = 0 // receive from param
let startPayDate = moment('2017-11-16')
let paySchedule = []
// Create pay schedule
for (let i=0; i<= numberOfDaysInTimeline; i += 14) {
  let payDay = moment(startPayDate).add(i, 'days').format('MMM DD')
  paySchedule.push(payDay)
}

// Create the Timeline
for (let i=0; i<= numberOfDaysInTimeline; i++) {
  let year = moment(startDate).add(i, 'days').format('YYYY')
  let month = moment(startDate).add(i, 'days').format('MMM')
  let day = moment(startDate).add(i, 'days').format('DD')
  let weekday = moment(startDate).add(i, 'days').format('dddd')
  let date = moment(startDate).add(i, 'days')
  timeline.push({
    transactions: [],
    balance: 0,
    year,
    month,
    day,
    weekday,
    date
  })
}
// Populate Timeline Transactions
transactions.forEach(transaction => {
  timeline.forEach(day => {
    const timelineDay = moment(day.date).format('MMM DD')
    const payday = paySchedule.includes(timelineDay)
    if (day.weekday === transaction.day && payday) {
      day.transactions.push(transaction)
    }
    if (day.day === transaction.day) {
      day.transactions.push(transaction)
    }
  })
})
// Sum Transactions
timeline = timeline.map(day => {
  day.balance = day.transactions.reduce((acc, t) => {
    return acc + t.amt
  }, day.balance)
  return day
})
// Maintain Daily Balance
let balance = startBalance
timeline = timeline.map(day => {
  balance = balance + day.balance
  day.balance = balance
  return day
})

timeline.forEach(day => {
  console.log(`${day.month} ${day.day} ${day.balance}`)
})
