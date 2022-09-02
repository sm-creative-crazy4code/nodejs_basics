//Node uses comon js library /every file in node is amodule
//modules= encapsulated code
//const peter="peter"
// const toy="toy"
// const polo="polo"
//  to access the values exported from 4_name s we need require
//pass ut the argument as the name where path of module is present
const names = require("./4_names") 
const sayHi = require("./5_utils")
const data = require("./6_alt_mtd")
require('./7_add') //==> even if wea re not assinging any variable to te module if there is a function invocke in the module the cofde wil run

//we we import a module we invoke it
//thoughwe had mot exported the code the code is not exported on its own Node 1wraps it inside the function and exports it





// console.log(data)
// 
// // const sayHi=(name)=>{

//     sayHi(names.polo)
//     sayHi(names.toy)
