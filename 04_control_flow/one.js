// if 

// const isUserLoggedIn = true
// const temperature = 41

// if( temperature === 40 ){
//     console.log("less then 50"); 
// }
// else{
//     console.log("temperature is greater then 50");
// }
// console.log("execute");

// <, >, <=, >=, ==, ===, !==

// const score = 200

// if ( score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
    
// }
//     console.log(`user power: ${power}`);

// short hands notation

// const balance = 1000

// if (balance > 500) console.log("test"); //implicity scope mean maan liya hai ki ye scope hai

// nesting loop//

// if (balance < 500){
//     console.log("less then < 500");
    
// } else if(balance < 750){
//     console.log("less then < 750");
    
// } else if(balance < 900){
//     console.log("less then < 900");
    
// }
// console.log("less then < 1200");

// const isUserLoggedIn = true
// const debitCard = true

// if (isUserLoggedIn && debitCard && 2==2){  // && AND statment apne dono side ke value ko check karta hai left aur 
// // right condition me dono side true aana chahiye AND && ststement 2 baar use kr skte hai if agar false hoga to execute nhi krega 
//     console.log("allow to by course");
    
// }
const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false 
const loggedInFromEmail = true

if (isUserLoggedIn && debitCard && 2==2){ 
    console.log("allow to by course");
    
}
if (loggedInFromGoogle || loggedInFromEmail ) { //|| OR sign  is name pipe sign yah multiple condition ko ckeck krne ke liye hota hai
    console.log("User logged in ");
       
}