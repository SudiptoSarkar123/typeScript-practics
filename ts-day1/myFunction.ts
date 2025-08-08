function addTwo(num:number){
    return num + 2;
}

function greet(name:number):string{
    // return 5;
    return `Hello, your number is ${name}`;
}

function showDetails(name:string, age:number, isMarried:boolean = false): string {
    return `Name: ${name}, Age: ${age}, Married: ${isMarried}`;
}

// function getValue(myVal:number):boolean{
//     if(myVal > 5){
//         return true;
//     }
//     return "200 OK";
// }


// console.log(showDetails("Sudipto", 23).toUpperCase());

const myName :string = greet(5);

// console.log(myName);


// console.log(addTwo(8));



export {}