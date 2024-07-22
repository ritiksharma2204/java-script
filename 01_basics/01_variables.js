const accountId = 123456
let accountEmail = "ritik.sh54321@gmail.com"
var accountPassword = "222111"
accountCity = "jaipur"
let accountState
console.log(accountId)
//prefer not to use "var" coz of issue in block scope and functional scope
accountEmail = "ritik@gmail.com"
accountPassword = "111111"
accountCity = "bengaluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])