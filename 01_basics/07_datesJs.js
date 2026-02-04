// dates time


let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(typeof (myDate));


// let myCretedDate = new Date(2023, 5, 13)
// let myCretedDate = new Date(2023, 10, 20, 5, 3, 25)
// let myCretedDate = new Date("2023-01-14")
// let myCretedDate = new Date("01-14-2023")
// console.log(myCretedDate.toLocaleString());


// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCretedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getFullYear());

newDate.toLocaleString('default', {
    weekday: "long",    
    
})




