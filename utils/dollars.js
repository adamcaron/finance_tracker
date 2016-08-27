/*
  Formats Numbers as US dollars.
*/

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

module.exports = dollars