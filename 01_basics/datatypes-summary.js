// ******Data types*******


// (1) Premitive Data type
// (2) Reference Data type

// (1) Primitive

// (1) String, (2) Number, (3)Boolean, (4)null, (5)undefined, (6)Symbol, (7)BigInt

// (2) Reference Data Type (Non-Primitive)

    // (1) Array, (2) Object, (3)function

const score = 100
const scoreValue = 200.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 21457479641264n


// (2) Reference Data Type (Non-Primitive)
    // (1) Array, (2) Object, (3)function

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
        name:"Surya",
        age: 23,
    }


    const myFunction = function(){
        console.log("Hello world");
        
    }

console.log(typeof score);
