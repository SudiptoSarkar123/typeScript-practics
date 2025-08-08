"use strict";
//Basic type
let username = 'sudipto';
let age = 14;
let isLogin = true;
// console.log(username,age,isLogin) 
// Other types
let fruits = ['banana', 'apple'];
let scores = [92, 42, 53];
let user = { name: 'sudipto', age: 25 };
let anything = 'This can be anything';
console.log(anything);
// Function with typescript 
function greet(name) {
    return `Hello ${name}`;
}
console.log(greet('sudipto'));
function greeet(name = 'sudipto') {
    console.log(`Hello ${name}`);
}
greeet();
