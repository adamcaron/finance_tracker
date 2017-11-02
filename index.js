const dollars = require('./utils/dollars')
const moment = require('moment')
const db = require('./db')
// const seed = require('./utils/seed')
// seed(db, moment)
// const transactions = db.transactions
const transactions = db.recurringTransactions

// TODO: recieve this info via params
let dateFormat = 'MMM DD' // receive from param
let startDate = moment(transactions[0].date).format() // param
let endDate = moment(startDate).add(4, 'months').format() // param
let numberOfDaysInTimeline = moment(endDate).diff(startDate, 'days')
let timeline = []
let startBalance = 0 // receive from param

// Create the Timeline
for (let i=0; i<= numberOfDaysInTimeline; i++) {
  let month = moment(startDate).add(i, 'days').format('MMM')
  let day = moment(startDate).add(i, 'days').format('DD')
  timeline.push({
    transactions: [],
    balance: 0,
    month,
    day
  })
}
// Populate Timeline Transactions
transactions.forEach(transaction => {
  timeline.forEach(day => {
    if (day.day === transaction.interval[1]) {
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
