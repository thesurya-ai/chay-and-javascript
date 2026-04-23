// for of loops

//String Example
let name = "Saty";

for (let hii of name) {  //Yahan "hii" directly array ke elements ko represent karta hai
  //console.log(hii);
}


//Array Example
let arr = [1, 2, 3, 4, 5]

for (const num of arr) {  //Yahan "num" directly array ke elements ko represent karta hai
    //console.log(num);
    
}
let greeting = "happy new year"

    for (const greet of greeting) {
        //console.log(`each char is ${greet}`);
    
    }

    // MAP

    const map = new Map()
    map.set ('IN', "India")
    map.set ('USA', "United States America")  // "map" me country do baar add nahi ho sakta
    map.set ('FR', "France")

    // console.log(map);

    // use the for of loop

    for (const [key, value] of map) {
        console.log(`key => ${value}`);
        
        
    }
    

// NOTE=> object ke liye "for in" loop 
//         Array ke liye "for of" loop

       

