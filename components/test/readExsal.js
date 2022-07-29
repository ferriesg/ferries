const fs = require('fs')
const xlsx = require('node-xlsx'); 
let list = xlsx.parse("./Michaels UAT Product Redirects QA.xlsx")

module.exports = list[0].data