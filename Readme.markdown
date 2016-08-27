# Finance Tracker

An app to manage finances.

## Up and Running

 - `git clone git@github.com:adamcaron/finance_tracker.git`
 - `cd finance_tracker`
 - `npm install`
 - `touch db.js`
 - Add to `db.js` ...
```
{
  'weeklyIncome': 100000000000, // your weekly income as a Number
  'debts': [
    {
      'name': 'some-bank', // name of lender
      'amount': 10000
    },
    {
      'name': 'some-other-lender',
      'amount': 8000
    },
    {
      'name': 'another-lender',
      'amount': 1650000 // damn, you broke!
    }
  ]
},

```
 - Run it! `node app` to see weekly income given, number of weeks


### Moment.js


To test out 'moment.js' stuff: [https://tonicdev.com/npm/moment](https://tonicdev.com/npm/moment) and [http://momentjs.com/docs](http://momentjs.com/docs).