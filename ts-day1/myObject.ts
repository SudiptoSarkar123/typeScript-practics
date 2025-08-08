const User = {
    name : "Sudipto",
    email:"sudiptosarkar833@gmail.com",
    isActive:true
}

// Type Aliases

type User = {
    name:string;
    email:string;
    isActive:boolean
}
// type Mystring = string ;

function createUser(user:User):User{
    return {name:user.name + 'sarkar',email:'dogesh@gmail.com',isActive:false}
}

createUser({name:'',email:'',isActive:true})

console.log(createUser(User))


export {}