//FOR LOOP

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
    
    
// }

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5 ) {
//         console.log("5 is the best number");
//         console.log(element);
//     }
//     console.log(element);
    
    
// }

// NESTED LOOP

// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop value: ${i}`); 
    
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`inner loop value: ${j}, inner loop value ${i}`); 
//         console.log(i + '*' + j + '=' + i*j);
//     }
    
// }

let myArray = ["flash", "batman", "superman", "shaktiman"]
    // console.log(myArray.length);
    

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
    
}

// break and continue

//BREAKE CONDITION


// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`detected 5`);
//         break  // index  value tk ruk jati hai break ka use krte hai 
        
//     }
//     console.log(`value of i is ${index}`);

//CONTINEU CONDITION
    
    
// }
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`detected 5`);
//         continue// iska use detect ke baad tak rhta hai 

//     }
//     console.log(`value of i is ${index}`);
    
    
// }

// break - Loop ko turant rok deta hai (exit kar deta hai)

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

// contineu - Current iteration skip karta hai, next iteration pe chala jata hai

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

// Real-life Example
// break = class chhod ke ghar chale jaana 😄
// continue = ek question skip karke next solve karna