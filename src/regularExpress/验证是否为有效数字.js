

let num = -0.234
let reg = /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/;
let reg3 =  /^(\+|\-)?(\d|([1-9]\d+))(\.\d+)?$/;

console.log(reg.test(num));
console.log(reg3.test(num));
