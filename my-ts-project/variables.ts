// Strings 

let name:string = 'sudipto'
// name = 123 ; // Type 'number' is not assignable to type 'string'.ts(2322)
// console.log(name) 

let message:string = 'hello world '
let yourName = 'Sudesna'
// console.log(message.length)
// console.log(message.toUpperCase());
console.log(message.substring(0,5))


// String union types

let directions:  'up' | 'left' | 'down' | 'right'
directions = 'up'
// directions = 'fcuk' //not valid

//String literal type

type Colour = 'red' | 67 | 'pink' ;

let bgColor:Colour = 'pink'
//let tshirtColor:Colour = 'black' // Type '"black"' is not assignable to type 'Colour' never read.ts(6133)

export{}