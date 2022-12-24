function add(number1,number2){
    const add = number1 + number2;
return add;
}
let functionadd = add(3,4);

console.log("addition is :",functionadd);//calling the log function outside the paranthesis //

//******************** *//
function prod(number1,number2){
    const prod = number1 * number2;
    console.log("product is :",prod);; //calling the log function inside the paranthesis as part of function//
}
prod = prod(3,4);


//*****lodash*************** *//
var lodashVariable = require('lodash');

console.log("lodashVariable.add is :",lodashVariable.add(20,20));
console.log("lodashVariable.multiply is :", lodashVariable.multiply(20,20));
console.log("lodashVariable.subtract is :", lodashVariable.subtract(200,20));
