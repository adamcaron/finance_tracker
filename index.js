const dollars = require('./utils/dollars')
const moment = require('moment')
const seed = require('./utils/seed')
const db = require('./db')
seed(db, moment)
const transactions = db.transactions

// TODO: recieve this info via params
let dateFormat = 'MMM DD' // receive from param
let startDate = moment(transactions[0].date).format() // param
let endDate = moment(startDate).add(4, 'months').format() // param
let numberOfDaysInTimeline = moment(endDate).diff(startDate, 'days')
let timeline = {}
let startBalance = 900 // receive from param

// Create the Timeline
for (let i=0; i<= numberOfDaysInTimeline; i++) {
  let day = moment(startDate).add(i, 'days').format(dateFormat)
  timeline[day] = { 'transactions': [], balance: '' }
}

let balance = startBalance

// Put transactions in timeline
transactions.map((transaction) => {
  let day = moment(transaction.date).format(dateFormat)
  timeline[day]['transactions'].push(transaction)
  balance = balance + transaction.amt
  timeline[day]['balance'] = balance
})

balance = startBalance
console.log(dollars( balance ))

Object.keys(timeline).map((day) => {

  // transaction this day?
  if (timeline[day].balance) {
    let transactionsThisDay = timeline[day].transactions.map((transaction) => {

      // deposit?
      if (transaction.amt > 0) {
        return '\n          +' + dollars( transaction.amt ) + ' ' + transaction.desc
      }

      return '\n          ' + dollars( transaction.amt ) + ' ' + transaction.desc
    })

    return console.log(
      transactionsThisDay
      + ' \n\n'
      + day + ' =>  ' + dollars( timeline[day].balance ) + '_______________'
    )
  }

  return console.log( day )
})

// TODO:
// reduce transactions
// pass in timeline as initialValue
// could also pass an accumjlator that has startDate and balance





