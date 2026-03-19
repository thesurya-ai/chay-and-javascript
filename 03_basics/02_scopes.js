let a = 300  // globle scope 
// if (true) {
//     let a = 10
//     const b = 20   //INNER Scope ke liye console.log
//     console.log("INNER:", a);  
// }
// console.log(a);  //globle scope ke liye console.log



// function statement / function declaration 
function outer(){
    let number = 0;

    return function inner(){
        return number++;
    }
}

let result = outer();

console.log(result());
console.log(result());
console.log(result());
console.log(result());






