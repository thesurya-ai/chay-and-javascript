const userEmail = []

if (userEmail) {
    console.log("got user email");
    
    
} else{
    console.log("don't have user email");
    
}

// truthy and false Value 

// FALSY VALUE :- false, 0, -0, BigInt 0n, "", null, undefined, NaN
//TRUTHY VALUE :- true, "0", " ", 'false', [], {}

// WHO TO CHECK IS AN ARRAY
if (userEmail.length === 0) {
    console.log("array is empty");    
}
// WHO TO CHECK IS AN OBJECT
const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("object is empty");
    
}
// NULLISH (NULL) COALESCING OPERATOR (??) : null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10   
val1 = undefined ?? 40 ?? 90    // jo bhi value first milti hai wahi asign ho jati hai
console.log(val1);

//TERNARY OPERATORS

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less then 80"): console.log("more then 80");
;
