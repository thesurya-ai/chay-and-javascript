//Array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "nagraj"]

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[1]);

/***********Array Methods**************/

// myArr.push(6)// add element
// myArr.push(7)
// myArr.pop()// remove last element


// myArr.unshift(9)// yah array ke start me diya gya element ko add kar deta hai
// myArr.shift()// starting element ko remove kar deta hai

// console.log(myArr.includes(9));// false "boolean"
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);//agar ham typeOf karke dekhenge to string me convert ho gyi hai isliye 1,2,3,4,5 diya hai




//******* slice and splice method **********/

console.log("A", myArr);
const myn1 = myArr.slice(1, 3)//1 aur 3 k bich ki value deta hai isme last value add nhi hota 
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C", myArr);
console.log(myn2);;




