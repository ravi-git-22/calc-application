



//*****lodash*************** *//
var lodashVariable = require('lodash');

console.log("lodashVariable.add is :",lodashVariable.add(20,20));
console.log("lodashVariable.multiply is :", lodashVariable.multiply(20,20));
console.log("lodashVariable.subtract is :", lodashVariable.subtract(200,20));

//*****calc*************** *//

var packageVar = require('ravi-calc-new');
console.log("this is from my npm package", packageVar.add(100,100));

console.log("this is from my npm package", packageVar.subtract(100,100));

console.log("this is from my npm package", packageVar.multiply(100,100));

console.log("this is from my npm package", packageVar.divide(100,100));
