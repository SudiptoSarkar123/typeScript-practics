"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Sudipto",
    email: "sudiptosarkar833@gmail.com",
    isActive: true
};
// type Mystring = string ;
function createUser(user) {
    return { name: user.name + 'sarkar', email: 'dogesh@gmail.com', isActive: false };
}
createUser({ name: '', email: '', isActive: true });
console.log(createUser(User));
