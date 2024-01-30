const accountId = 144553
let accountEmail = "harshanand8499@gmail.com"
let accountpass = "12345" /* dont use var in js, bcoz of issue in block scope{} and functional scope
 */
let accountCity = "dumka"
let accountState;
// accountId = 2
accountEmail = "hc@fc.com"
accountpass = "234"
accountCity = "ranchi"


console.log(accountId);

console.table([accountId,accountEmail,accountpass,accountCity, accountState])