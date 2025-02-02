const accountId = 112112
let accountEmail = "afzal@gmail.com"
var accountPassword = "12345"
accountCity = "vadodara"
let accountState;

//Don't use var as it is an issue in block and functional scope


accountEmail = "afzalkapadwala@gmail.com"
accountPassword = "4321"
accountCity = "ahmedabad"

console.table([accountId,accountEmail, accountPassword, accountCity, accountState])