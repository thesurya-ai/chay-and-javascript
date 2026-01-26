const name =  "Surya Prakash"
const repoCount = 50


// console.log(name +  repoCount +  "Value");  Not Prefere for this

console.log(`Hello my Name is ${name}, and my repo Count is ${repoCount}`);

const gameName = new String ('hitesh-hc-com')  // access string value 


// console.log(gameName [0]);
// console.log(gameName. __proto__);
// console.log(gameName. length);
// console.log(gameName. toUpperCase());
console.log(gameName. charAt(3)); // (charAt) iska use karke ham kaun sa number  kaun se cahr per hai dekh sakte hai


console.log(gameName. indexOf('t')); // (indexOf) iska use karke ham kaun sa char  kaun se Number  per hai dekh sakte hai

const newString = gameName.substring(0 , 4)
console.log(newString); // but not add 4th num char
 
//then use slice method

const anotherString= gameName.slice(-8, 4)
console.log(anotherString);

//trim method 
 const newStringOne = "    Hitesh   "// using trim method remove Space(" space  ")
 console.log(newStringOne);
 console.log(newStringOne.trim());

 //replace method

 const url = "https://hitesh.com/hitesh%20chaoudhary"
 console.log(url .replace('%20', '-'));

 // enquiry character "include" method

console.log(url.includes('hitesh')); //true
console.log(url.includes('Surya'));//false

 //split method

 console.log(gameName.split('-')); //('hitesh-hc-com') remove dash- using split method
 
 
 



