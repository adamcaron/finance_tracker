/*
  Seeds db with transactions.
*/

function seed (db, moment) {
  const transactions = db['transactions'] = []

  transactions.push({'amt':-106,'date':moment(new Date('August 26, 2016')).format(),'desc': 'Comcast, Xcel'})
  transactions.push({'amt':-112,'date':moment(new Date('August 29, 2016')).format(),'desc': 'Stock Purchases'})
  transactions.push({'amt':1200,'date':moment(new Date('August 31, 2016')).format(),'desc': 'paycheck'})
  transactions.push({'amt':-700,'date':moment(new Date('August 31, 2016')).format(),'desc': 'MICHAEL 3,500 left'})
  transactions.push({'amt':-8,'date':moment(new Date('September 1, 2016')).format(),'desc': 'Movement'})
  transactions.push({'amt':-1133,'date':moment(new Date('September 1, 2016')).format(),'desc': 'Rent, RTD, BankAmericard'})
  transactions.push({'amt':1200,'date':moment(new Date('September 7, 2016')).format(),'desc': 'paycheck'})
  transactions.push({'amt':-70,'date':moment(new Date('September 7, 2016')).format(),'desc': 'MMC'})
  transactions.push({'amt':-1000,'date':moment(new Date('September 14, 2016')).format(),'desc': 'MICHAEL 2,500 left'})
  transactions.push({'amt':1200,'date':moment(new Date('September 14, 2016')).format(),'desc': 'paycheck'})
  transactions.push({'amt':-1293,'date':moment(new Date('September 15, 2016')).format(),'desc': 'Dave, Turing, Kevin, VZW'})
  transactions.push({'amt':1200,'date':moment(new Date('September 21, 2016')).format(),'desc': 'paycheck'})
  transactions.push({'amt':-540,'date':moment(new Date('September 22, 2016')).format(),'desc': 'Climb'})
  transactions.push({'amt':1200,'date':moment(new Date('September 28, 2016')).format(),'desc': 'paycheck'})
  transactions.push({'amt':-1535,'date':moment(new Date('September 29, 2016')).format(),'desc': 'Comcast, Xcel, Chase, Rent, RTD, BankAmericard'})
  transactions.push({'amt':1200,'date':moment(new Date('October 5, 2016')).format(),'desc': 'paycheck'})
  transactions.push({'amt':-78,'date':moment(new Date('October 5, 2016')).format(),'desc': 'Movement, MMC'})
  transactions.push({'amt':-1500,'date':moment(new Date('October 6, 2016')).format(),'desc': 'MICHAEL 1,000 left'})
  transactions.push({'amt':1200,'date':moment(new Date('October 12, 2016')).format(),'desc': 'paycheck'})
  transactions.push({'amt':-1293,'date':moment(new Date('October 15, 2016')).format(),'desc': 'Dave, Turing, Kevin, VZW'})
  transactions.push({'amt':1200,'date':moment(new Date('October 19, 2016')).format(),'desc': 'paycheck'})
  transactions.push({'amt':-540,'date':moment(new Date('October 19, 2016')).format(),'desc': 'Climb'})
  transactions.push({'amt':1200,'date':moment(new Date('October 26, 2016')).format(),'desc': 'paycheck'})
  transactions.push({'amt':-1501,'date':moment(new Date('October 27, 2016')).format(),'desc': 'Comcast, Xcel, Chase, Rent, RTD'})
  transactions.push({'amt':1200,'date':moment(new Date('November 2, 2016')).format(),'desc': 'paycheck'})
  transactions.push({'amt':-42,'date':moment(new Date('November 3, 2016')).format(),'desc': 'Movement, Bank Americard'})
  transactions.push({'amt':-1000,'date':moment(new Date('November 3, 2016')).format(),'desc': 'MICHAEL PAID OFF'})
  transactions.push({'amt':1200,'date':moment(new Date('November 9, 2016')).format(),'desc': 'paycheck'})
  transactions.push({'amt':-1363,'date':moment(new Date('November 10, 2016')).format(),'desc': 'MMC, Dave, Turing, Kevin, VZW'})
  transactions.push({'amt':1200,'date':moment(new Date('November 16, 2016')).format(),'desc': 'paycheck'})
  transactions.push({'amt':-600,'date':moment(new Date('November 17, 2016')).format(),'desc': 'RETREAT ????????'})
  transactions.push({'amt':-540,'date':moment(new Date('November 21, 2016')).format(),'desc': 'Climb'})
  transactions.push({'amt':1200,'date':moment(new Date('November 23, 2016')).format(),'desc': 'paycheck'})
  transactions.push({'amt':-106,'date':moment(new Date('November 28, 2016')).format(),'desc': 'Comcast, Xcel'})
  transactions.push({'amt':1200,'date':moment(new Date('November 30, 2016')).format(),'desc': 'paycheck'})
  transactions.push({'amt':-1433,'date':moment(new Date('December 1, 2016')).format(),'desc': 'Rent, RTD, Chase, BankAmericard'})
  transactions.push({'amt':1200,'date':moment(new Date('December 7, 2016')).format(),'desc': 'paycheck'})
  transactions.push({'amt':1200,'date':moment(new Date('December 14, 2016')).format(),'desc': 'paycheck'})
  transactions.push({'amt':1200,'date':moment(new Date('December 21, 2016')).format(),'desc': 'paycheck'})
}

module.exports = seed