//Basic type
let username:string = 'sudipto' ;
let age:number = 14 ;
let isLogin:boolean = true ;
// console.log(username,age,isLogin) 

// Other types
let fruits:string[] = ['banana','apple']
let scores:number[] = [92,42,53]
let user: {name:string ; age:number} = {name:'sudipto',age:25}
let anything:any = 'This can be anything'
console.log(anything)


// Function with typescript 

function greet(name:string):string{
    return `Hello ${name}`
}

console.log(greet('sudipto'))

function greeet(name:string = 'sudipto'):void{
    console.log(`Hello ${name}`)
}

greeet()