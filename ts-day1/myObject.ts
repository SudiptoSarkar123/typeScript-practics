// const User = {
//     name : "Sudipto",
//     email:"sudiptosarkar833@gmail.com",
//     isActive:true
// }

// Type Aliases

// type User = {
//     name:string;
//     email:string;
//     isActive:boolean
// }
// // type Mystring = string ;

// function createUser(user:User):User{
//     return {name:user.name + 'sarkar',email:'dogesh@gmail.com',isActive:false}
// }

// createUser({name:'',email:'',isActive:true})

// console.log(createUser(User))





// comment  = a keyword (readonly) (?) ()
type User = {
    readonly _id:number,
    name:string
    email:string
    isActive:boolean
    credcardDetails? : number
}


let myUser : User = {
    _id:123,
    name:'sudipto',
    email:'s1@gmail.com',
    isActive:false,
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardnumber: string
}

type cardDetails = cardNumber & cardDate & {
    cvv:number
}

myUser.email = "sss@gmail.com"
// myUser._id = "123" 



export {}