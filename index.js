const dollars = require('./utils/dollars')
const moment = require('moment')
const seed = require('./utils/seed')
const db = require('./db')
seed(db, moment)
const transactions = db.transactions

let dateFormat = 'MMM DD' // || receive from param
let startDate = moment().format() // param
let endDate = moment(startDate).add(4, 'months').format() // param
let numberOfDaysInTimeline = moment(endDate).diff(startDate, 'days')
let timeline = {}
let startBalance = 900 // receive from param

for (let i=0; i<= numberOfDaysInTimeline; i++) {
  let day = moment(startDate).add(i, 'days').format(dateFormat)
  timeline[day] = { 'transactions': [], balance: '' }
}

let balance = startBalance

transactions.map((transaction) => {
  let day = moment(transaction.date).format(dateFormat)
  timeline[day]['transactions'].push(transaction)
  balance = balance + transaction.amt
  timeline[day]['balance'] = balance
})

balance = startBalance

Object.keys(timeline).map((day) => {
  if (timeline[day].balance) return console.log( day + ' => ' +  dollars( timeline[day].balance ) )
  return console.log( day )
})