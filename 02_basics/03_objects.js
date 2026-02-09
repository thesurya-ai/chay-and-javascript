 //Singleton
 //object.create


 //Object Literals 

 const mySym = Symbol("key1")

 const JsUser = {
    name: "Surya",
    "full name": "Surya Prakash",
    [mySym]: "mykey1",// agar ham symbol ka use krenge to hamesha [] iska use karte hai
    age: 18,
    location: "Jaunpur",
    email: "suryaprakash@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Sunday"]
 }
 
// console.log(JsUser);

JsUser.email = "surya@gmail.com"
// Object.freeze(JsUser)//freeze method ka use value loi change na kr paye iske liye karte hai
JsUser.email = "sp@gmail.com"
// console.log(JsUser);


// Add the function

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}
// console.log(JsUser.greeting);//undefined
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

