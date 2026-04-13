//IIFE

(function chai() {
    //named IFFE because iska name hai
    console.log(`DB CONNECTED`);

    
})();

// () function definition () execution call jaise ham chai() ye lgate the to hmne pure function 
// ko hee paranthesis() se rap kar diya 

// globle scope ke polution se problem hone se bachane ke liye IIFE ka use karte hai

( (name) => {
    //simple IFFE iska name nahi hai
    console.log(`DB CONNECTED TWO ${name}`);
    
}) (`Surya`)

// Note:- jab ham 2 IFFE ek sath use karte hai tab Semcolon ; hamesha lagana chahiye