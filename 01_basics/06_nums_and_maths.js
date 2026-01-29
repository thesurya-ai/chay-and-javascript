// Game And Accounts Balance 

const score = 400
// console.log(typeof score);
// console.log(score);

const balance = new Number(100)
// console.log(balance)


// console.log(balance.toString().length) // number ko count krke brtata hai ki kitne char ka numaber ka hai 100=3 num

// console.log(balance.toFixed(3)) // using decimal number

// toPrecision method
const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));  // value ko ham 1-21 ke bich hee de skte  bas

// toLocalSrting Method (iska use camma , ke liye kiya jata hai) jaise 1000000 to iska 10,00,000

const hunderds = 1000000
// console.log(hunderds.toLocaleString('en-IN'))


//**************Math ***********

// console.log(Math);
// Math.abs iska use sirf (-) ko (+) krne k liye use kiya jata hai
// console.log(Math.abs(-4))

// Math.round iska use sirf round off means round figure krne k liye use kiya jata hai, first number big honi chahiye 
// console.log(Math.round(4.5))

// Math.ceil iska use agar 4.1 hai to 6 kr dega jaise ki niche diya gya hai
// console.log(Math.ceil(4.9))

// Math.floor iska use (Math.ceil) se opposite hota hai lower value lega ye 
// console.log(Math.floor(4.9))

//Math.min and max 
// console.log(Math.min(4,5,6,8,3,6))
//math.max
// console.log(Math.max(2,4,8,7,6,5,4,3))

//in sabhi ko ham use yah krte hai

console.log(Math.random()) // iska value hmesha 0 aur 1 ya  0 se 0  ke bich me hee ayegi aati hai
console.log(Math.random()*10 + 1) //ab minimum value 1 aayegi 0 nhi aayegi  
console.log(Math.floor(Math.random()*10) + 1) // Math.floor ka use krke ab minimum value 1 se 9 tak ki value  quki +1 add kr diya hai

// Que Solve the min and max value
// const min = 10
// const max = 20
 // in dono ke bich ka number nikalna hai

 //then
    const min = 10
    const max = 20
 console.log(Math.random() * (max - min +1)) //3.8987419373409744
 // use the (Math.floor) method iska use hm one degit me late hai

 console.log(Math.floor(Math.random() * (max - min +1)) + min)