// const user = {
//     username : "hitesh",
//     price : 999,

//     welcomeMassage: function() {
//         console.log(`${this.username}, welcome to my website`);  // this is current contest  "this keyword current contest ko refer karta hai"
//         console.log(this);
        
//     }
// }

// user.welcomeMassage()

/************change the current contest means user name ka value*****/

// user.username = "Surya"
// user.welcomeMassage()

/******OUT PUT
 * hitesh, welcome to my website
{
  username: 'hitesh',
  price: 999,
  welcomeMassage: [Function: welcomeMassage]   // first contest
}



Surya, welcome to my website
{
  username: 'Surya',
  price: 999,
  welcomeMassage: [Function: welcomeMassage]  //second contest
} */


// Using this keywords


  const user = {
    username : "hitesh",
    price : 999,

    welcomeMassage: function() {
        console.log(`${this.username}, welcome to my website`);  // this is current contest  "this keyword current contest ko refer karta hai"
        console.log(this);
        
    }
}

// user.welcomeMassage()

/************change the current contest means user name ka value*****/

// user.username = "Surya"
// user.welcomeMassage()

// console.log(this);


// function chai(){
//     let username = "Siddhant"
//     console.log(this.username);
    
// }
//  chai()



// const chai = function() {
//     let username = "Siddhant"
//     console.log(this.username);  
// }
//  chai()  // out put undefiend beacause 


/****using Arrow Function */

const chai = () => {
    let username = "Siddhant"
    console.log(this);  
}
 chai()



 //() => {} this is Arrow Function if we are use the  {}  to hme return keyword likhna padega

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(3, 8));



/****implisit return method */
//isme {}  use nhi karte hai yah apne aap Asume kar leta hai ek hee line me likhna hota hai

// const addTwo = (num1, num2) =>  num1 + num2

//using () , aise bhi use kar sakte hai

const addTwo = (num1, num2) =>  ( num1 + num2)


console.log(addTwo(3, 8)); 


