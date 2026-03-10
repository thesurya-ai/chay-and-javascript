// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");

function sayMyName(){
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}

// sayMyName()

// function addToNumber(number1, number2){   //parameters
//     console.log(number1 + number2);
    
// }
// addToNumber(45, 5)// arguments

// jab ham function ki difinition banate hai to usme jo bhi input, string, number lete hai usko parameter kahate  hai,
// aur fab ham function call karte hai tab jo bhi value ham pass krte hai  to usko argument kahte hai


function addToNumber(number1, number2){   //parameters
    // let result = number1 + number2
    // return result
    return number1 + number2

    
}
const result = addToNumber(3, 5)// arguments
// console.log("Result:", result) 

function loginUserMassage(username){
    if(username===undefined){
        console.log("Please Enter the username");
        return
        

    }
    return `${username} just logged in`

}
// console.log(loginUserMassage("hitesh"));
// console.log(loginUserMassage(""));
// console.log(loginUserMassage());

function calculateCartPrice(...num1){
    return num1 
}
// console.log(calculateCartPrice(200, 300, 400));  // (...) triple dott ko rest and spred oprator bola jata hai

const user = {
    username: "hitesh",
    prices: 199
}

function handelObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    

}

// then function call 

// handelObject(user)

handelObject({
    username: "Surya Prakash",
    price: 199
})

// pass the array, using in array 

const myNewArray = [200, 400, 100, 600]

// then define function jo array ko accept krta hai aur uski second value ko return kar deta hai

function returnSecondValue(getArray){
    return getArray[1]

}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([100, 200, 3000, 500]));
